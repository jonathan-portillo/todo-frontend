import React from "react";
import Nav from "../components/nav";
import NewTask from "./newtask";
import CurrentTasks from "./currenttask";
import { connect } from "react-redux";
import { createNewTask, handle_change_newtask } from "../actions/todoActions";

const Task = () => {
  return (
    <>
      <Nav />
      <br />
      <br />
      <br />
      <br />
      <div className="dashbox">
        <NewTask />
        <br />
        <br />
        <br />
        <CurrentTasks />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    newTask: state.newTask,
  };
};

export default connect(mapStateToProps, {
  createNewTask,
  handle_change_newtask,
})(Task);
