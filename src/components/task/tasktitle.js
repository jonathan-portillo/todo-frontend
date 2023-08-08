import React from "react";
import { connect } from "react-redux";
import {
  deleteTask,
  updateTask,
  setEditing,
  editTitle,
} from "../../actions/todoActions";

const TaskTitle = (props) => {
  const {
    task,
    deleteTask,
    updateTask,
    isEditing,
    editedTitle,
    setEditing,
    editTitle,
  } = props;

  const handleEditClick = () => {
    editTitle(task.todo_title);
    setEditing(task.id, true);
  };

  const handleSaveClick = async (e) => {
    e.preventDefault();
    console.log("Task ID to be updated:", task.id);
    console.log("Updated Title:", editedTitle);

    await updateTask(task.id, { todo_title: editedTitle });
    setEditing(task.id, false);
  };

  return (
    <>
      <input type="checkbox" className="toggle" id={`task_${task.id}`} />
      <div className="tasktitlebox">
        {isEditing ? (
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => editTitle(e.target.value)}
          />
        ) : (
          <label className="tasktitle" htmlFor={`task_${task.id}`}>
            {task.todo_title}
          </label>
        )}
        <div className="buttonsss">
          {isEditing ? (
            <button onClick={handleSaveClick}>Save</button>
          ) : (
            <button onClick={handleEditClick}>Edit</button>
          )}
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  const taskId = ownProps.task.id;
  return {
    editedTitle: state.editedTitle,
    isEditing: state.isEditing[taskId] || false,
  };
};

export default connect(mapStateToProps, {
  deleteTask,
  updateTask,
  setEditing,
  editTitle,
})(TaskTitle);
