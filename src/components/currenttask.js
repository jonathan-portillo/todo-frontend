import React, { useEffect } from "react";
import { getTasks } from "../actions/todoActions";
import { connect } from "react-redux";

const CurrentTasks = (props) => {
  useEffect(() => {
    props.getTasks(props.allTasks);
  }, []);

  console.log("where info is stored", props.allTasks);

  return (
    <>
      <div>All my notes are here </div>
      <br />
      <div>
        {props.allTasks.map((res) => {
          return res.map((res) => {
            return <p key={res.id}>{res.todo_title}</p>;
          });
        })}
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
})(CurrentTasks);
