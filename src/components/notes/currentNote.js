import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  getNotes,
  updateNotes,
  editNoteDescription,
  setEditingNote,
  editNote,
} from "../../actions/todoActions";

const CurrentNote = (props) => {
  const {
    id,
    allUserNotes,
    getNotes,
    updateNotes,
    editNoteDescription,
    isEditingNote,
    setEditingNote,
    editedNote,
    editNote,
  } = props;

  useEffect(() => {
    getNotes(id);
  }, [id, getNotes]);

  const filteredNotes = allUserNotes.filter(
    (note) => note.todo_title_id === props.id
  );

  const handleEditClick = () => {
    editNote(filteredNotes[0]?.todo_list); // Set the initial value of editedNote
    setEditingNote(id, true);
  };

  const handleSaveClick = () => {
    updateNotes(filteredNotes[0]?.id, { todo_list: editedNote });
    setEditingNote(id, false);
  };

  const handleInputChange = (e) => {
    editNote(e.target.value); // Update the local state of editedNote
  };

  return (
    <div>
      {filteredNotes.map((note) => (
        <React.Fragment key={note.id}>
          {isEditingNote ? (
            <>
              <input
                type="text"
                value={editedNote}
                onChange={handleInputChange}
              />
              <button onClick={handleSaveClick}>Save</button>
            </>
          ) : (
            <>
              <p>{note.todo_list}</p>
              <button onClick={handleEditClick}>Edit</button>
            </>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    allUserNotes: state.allUserNotes,
    editedNote: state.editNote, // Update to use 'editNote' instead of 'editedNote'
    isEditingNote: state.isEditingNote,
  };
};

export default connect(mapStateToProps, {
  getNotes,
  updateNotes,
  setEditingNote,
  editNote,
})(CurrentNote);
