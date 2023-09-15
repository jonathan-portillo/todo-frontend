import React from "react";
import { connect } from "react-redux";
import {
  deleteTask,
  updateTask,
  setEditing,
  editTitle,
  enableAnyTitleEditing,
  disableAnyTitleEditing,
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

    enableAnyTitleEditing,
  } = props;

  const handleEditClick = () => {
    if (!props.isAnyTitleEditing) {
      editTitle(task.todo_title);
      setEditing(task.id, true);
      enableAnyTitleEditing();
    }
  };

  const handleSaveClick = async (e) => {
    e.preventDefault();
    console.log("Task ID to be updated:", task.id);
    console.log("Updated Title:", editedTitle);

    await updateTask(task.id, { todo_title: editedTitle });
    setEditing(task.id, false);
    props.disableAnyTitleEditing();
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
              <>
                {!props.isAnyTitleEditing ? (
                  // Render the edit button only when no title is being edited
                  <IconButton>
                    <EditIcon
                      style={{ fontSize: 20 }}
                      onClick={handleEditClick}
                    />
                  </IconButton>
                ) : (
                  // Render a disabled edit button when any title is being edited
                  <IconButton disabled>
                    <EditIcon style={{ fontSize: 20 }} />
                  </IconButton>
                )}
              </>
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
    isAnyTitleEditing: state.isAnytitleEditing,
  };
};

export default connect(mapStateToProps, {
  deleteTask,
  updateTask,
  setEditing,
  editTitle,
  enableAnyTitleEditing,
  disableAnyTitleEditing,
})(TaskTitle);
