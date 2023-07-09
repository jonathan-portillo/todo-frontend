import React, { useEffect } from "react";
import { getTasks } from "../actions/todoActions";
import { connect } from "react-redux";
import NoteDescription from "./noteDescription";

const CurrentTasks = (props) => {
  useEffect(() => {
    props.getTasks(props.allTasks);
  }, []);

  console.log(props.allTasks);

  return (
    <>
      <div>All my notes are here </div>
      <br />
      <div>
        {props.allTasks.map((res) => {
          return res.map((res) => {
            return (
              <>
                <p key={res.id}>{res.todo_title}</p>
                <NoteDescription />
              </>
            );
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
