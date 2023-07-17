import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createNewNote, getNotes } from "../actions/todoActions";
import NewNote from "./newNote";

const NoteDescription = (props) => {
  const id = props.id;

  return (
    <>
      <p>Our Title Id Below</p>
      <NewNote id={id} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    newNoteDescription: state.newNoteDescription,
    allUserNotes: state.allUserNotes,
  };
};

export default connect(mapStateToProps, {
  createNewNote,
  getNotes,
})(NoteDescription);
