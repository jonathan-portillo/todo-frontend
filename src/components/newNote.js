import React, { useState } from "react";
import { connect } from "react-redux";

const NewNote = (props) => {
  return (
    <>
      <p>Our Id in this component is this {props.id}</p>
      <form>
        <input
          id="todo_list"
          label="todo_list"
          name="todo_list"
          value={props.newNoteDescription.todo_list}
          onChange={props.handle_change_note_description}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

const mapStateToProps = (state) => {
  return { newNoteDescription: state.newNoteDescription };
};

export default connect(mapStateToProps, {})(NewNote);
