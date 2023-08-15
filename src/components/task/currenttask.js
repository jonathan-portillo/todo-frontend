import React, { useEffect } from "react";
import { getTasks, deleteTask, updateTask } from "../../actions/todoActions";
import { connect } from "react-redux";
import NoteDescription from "../notes/noteDescription";
import TaskTitle from "./tasktitle";
import { Paper } from "@mui/material";

const CurrentTasks = (props) => {
  useEffect(() => {
    props.getTasks();
  }, []);

  return (
    <>
      <div className="currtasks">
        {props.allTasks.map((task) => (
          <Paper className="taskbox" key={task.id}>
            <TaskTitle task={task} id={task.id} />
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
  updateTask,
})(CurrentTasks);
