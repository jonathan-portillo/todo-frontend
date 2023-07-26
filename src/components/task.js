import React from "react";
import Nav from "../components/nav";
import NewTask from "./newtask";
import CurrentTasks from "./currenttask";
import { connect } from "react-redux";
import { createNewTask, handle_change_newtask } from "../actions/todoActions";
import SideNav from "./sidenav";

const Task = () => {
  return (
    <>
      <Nav />
      <div className="dashbox">
        <SideNav />
        <div className="notebox">
          <NewTask />
          <CurrentTasks />
        </div>
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
