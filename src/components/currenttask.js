import React, { useEffect } from "react";
import { getTasks, deleteTask } from "../actions/todoActions";
import { connect } from "react-redux";
import NoteDescription from "./noteDescription";

const CurrentTasks = (props) => {
  useEffect(() => {
    props.getTasks(props.allTasks);
  }, [props.allTasks, props.getTasks]);

  return (
    <>
      <div>All my notes are here </div>
      <br />
      <div>
        {props.allTasks.map((task) => (
          <div key={task.id}>
            <p>{task.todo_title}</p>
            <button
              onClick={(e) => {
                e.preventDefault();
                props.deleteTask(task.id);
              }}
            >
              Delete
            </button>
            <NoteDescription id={task.id} title={task.todo_title} />
          </div>
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
