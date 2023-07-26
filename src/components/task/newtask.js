import React from "react";
import { connect } from "react-redux";
import {
  createNewTask,
  handle_change_newtask,
} from "../../actions/todoActions";

const NewTask = (props) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    await props.createNewTask(props.newTask);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo_title">
          Todo Title
          <input
            id="todo_title"
            label="todo_title"
            name="todo_title"
            type="text"
            value={props.newTask.todo_title}
            onChange={props.handle_change_newtask}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    newTask: state.newTask,
  };
};

export default connect(mapStateToProps, {
  handle_change_newtask,
  createNewTask,
})(NewTask);
