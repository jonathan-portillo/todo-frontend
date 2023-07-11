import React, { useState } from "react";
import { connect } from "react-redux";
import {
  createNewNote,
  handle_change_note_description,
} from "../actions/todoActions";

const NoteDescription = (props) => {
  console.log("props", props);

  const id = props.id;

  const handleSubmit = async (e) => {
    e.preventDefault();
    await props.createNewNote(id, props.newNoteDescription);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Description for {props.title}
          <input
            id="todo_list"
            label="todo_list"
            name="todo_list"
            type="text"
            value={props.newNoteDescription.todo_list}
            onChange={props.handle_change_note_description}
          />
        </label>
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
  createNewNote,
  handle_change_note_description,
})(NoteDescription);
