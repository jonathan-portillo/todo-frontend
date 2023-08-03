import React from "react";
import { getTasks, deleteTask, updateTask } from "../../actions/todoActions";
import { connect } from "react-redux";

const TaskTitle = (props) => {
  return (
    <>
      <input type="checkbox" className="toggle" id={`task_${props.task.id}`} />
      <div className="tasktitlebox">
        <label className="tasktitle" htmlFor={`task_${props.task.id}`}>
          {props.task.todo_title}
        </label>
        <div className="buttonsss">
          <button>Edit</button>
          <button
            onClick={(e) => {
              e.preventDefault();
              props.deleteTask(props.task.id);
            }}
          >
            Delete
          </button>
        </div>
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
})(TaskTitle);
