import React, { useEffect } from "react";
import { getTasks } from "../actions/todoActions";
import { connect } from "react-redux";
import NoteDescription from "./noteDescription";
import { Title } from "@mui/icons-material";

const CurrentTasks = (props) => {
  useEffect(() => {
    props.getTasks(props.allTasks);
  }, []);

  console.log("Info is here", props.allTasks);

  return (
    <>
      <div>All my notes are here </div>
      <br />
      <div>
        {props.allTasks.map((res) => {
          return res.map((task) => {
            return (
              <div key={task.id}>
                <p>{task.todo_title}</p>
                <NoteDescription id={task.id} title={task.todo_title} />
              </div>
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
