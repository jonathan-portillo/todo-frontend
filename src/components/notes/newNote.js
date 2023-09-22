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
          rows={null}
          defaultValue="Type in your note"
          style={{ height: "100%" }}
          value={props.newNoteDescription.todo_list}
          onChange={(e) => props.handle_change_note_description(e.target.value)}
          className="notepad-input"
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
