import React from "react";
import Nav from "../standardcomps/nav";
import CurrentTasks from "../task/currenttask";
import { connect } from "react-redux";
import {
  createNewTask,
  handle_change_newtask,
} from "../../actions/todoActions";
import SideNav from "../dashboard/sidenav";

const Dashboard = () => {
  return (
    <>
      <Nav />
      <div className="dashbox">
        <SideNav />
        <div className="notebox">
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
})(Dashboard);
