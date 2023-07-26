import React from "react";
import { connect } from "react-redux";
import {
  createNewTask,
  handle_change_newtask,
} from "../../actions/todoActions";
import { TextField } from "@mui/material/";
import { Button } from "@mui/material";

const NewTask = (props) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    await props.createNewTask(props.newTask);
    props.handleClose();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="inputtitle">
          <TextField
            id="todo_title"
            variant="standard"
            label="Create a task"
            name="todo_title"
            fullWidth
            type="text"
            value={props.newTask.todo_title}
            onChange={props.handle_change_newtask}
          ></TextField>
          <div className="modalbutton">
            <Button className="move" type="submit">
              Enter
            </Button>
          </div>
        </div>
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
