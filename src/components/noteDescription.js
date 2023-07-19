import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createNewNote, getNotes } from "../actions/todoActions";
import NewNote from "./newNote";

const NoteDescription = (props) => {
  const id = props.id;
  const notes = props.allUserNotes;
  const hasNotes = notes.some((note) => note.todo_title_id === id);

  useEffect(() => {
    props.getNotes(id);
    console.log(props.allUserNotes);
  }, [id, props.getNotes]);

  return (
    <>
      {hasNotes ? (
        <div>There are notes for this component</div>
      ) : (
        <NewNote id={id} />
      )}
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
