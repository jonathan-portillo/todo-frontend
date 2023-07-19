import React, { useState } from "react";
import { connect } from "react-redux";
import {
  handle_change_note_description,
  createNewNote,
} from "../actions/todoActions";

const NewNote = (props) => {
  const handleChange = (e) => {
    handle_change_note_description(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createNewNote(props.id, props.newNote);
    handle_change_note_description("");
  };

  return (
    <>
      <p>Our Id in this component is {props.id}</p>
      <form onSubmit={handleSubmit}>
        <input
          id="todo_list"
          label="todo_list"
          name="todo_list"
          type="text"
          value={props.newNewnoteDescription}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

const mapStateToProps = (state) => {
  return { newNoteDescription: state.newNoteDescription };
};

export default connect(mapStateToProps, {
  handle_change_note_description,
  createNewNote,
})(NewNote);
