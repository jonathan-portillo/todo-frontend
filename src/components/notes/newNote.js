import React from "react";
import { connect } from "react-redux";
import {
  handle_change_note_description,
  createNewNote,
} from "../../actions/todoActions";
import { TextField } from "@mui/material";

const NewNote = (props) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    await props.createNewNote(props.id, {
      todo_list: props.newNoteDescription,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-multiline-flexible"
          name="todo_list"
          type="text"
          multiline
          rows={3}
          defaultValue="Default Value"
          value={props.newNoteDescription.todo_list}
          onChange={(e) => props.handle_change_note_description(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    newNoteDescription: state.newNoteDescription,
  };
};

export default connect(mapStateToProps, {
  handle_change_note_description,
  createNewNote,
})(NewNote);
