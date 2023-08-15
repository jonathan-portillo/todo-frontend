import React from "react";
import { connect } from "react-redux";
import {
  deleteTask,
  updateTask,
  setEditing,
  editTitle,
} from "../../actions/todoActions";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import IconButton from "@mui/material/IconButton";
import SaveIcon from "@mui/icons-material/Save";

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
          <div className="buttonscontainer">
            {isEditing ? (
              <IconButton>
                <SaveIcon style={{ fontSize: 20 }} onClick={handleSaveClick} />
              </IconButton>
            ) : (
              // <button onClick={handleSaveClick}>Save</button>
              <IconButton>
                <EditIcon style={{ fontSize: 20 }} onClick={handleEditClick} />
              </IconButton>
            )}
            <IconButton>
              <DeleteOutlineIcon
                style={{ fontSize: 20 }}
                onClick={() => deleteTask(task.id)}
              />
            </IconButton>
            {/* <button onClick={() => deleteTask(task.id)}>Delete</button> */}
          </div>
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
