import React, { useEffect } from "react";
import { getTasks, deleteTask } from "../../actions/todoActions";
import { connect } from "react-redux";
import NoteDescription from "../notes/noteDescription";
import { Paper } from "@mui/material";

const CurrentTasks = (props) => {
  useEffect(() => {
    props.getTasks();
  }, [props.getTasks]);

  return (
    <>
      <div>
        {props.allTasks.map((task) => (
          <Paper className="taskbox">
            <p className="tasktitle">{task.todo_title}</p>
            <div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  props.deleteTask(task.id);
                }}
              >
                Delete
              </button>
            </div>
            <NoteDescription
              key={task.id}
              id={task.id}
              title={task.todo_title}
            />
          </Paper>
        ))}
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    allTasks: state.allTasks,
  };
};

export default connect(mapStateToProps, {
  getTasks,
  deleteTask,
})(CurrentTasks);
