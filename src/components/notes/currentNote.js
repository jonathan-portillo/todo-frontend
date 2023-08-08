import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  getNotes,
  updateNotes,
  setEditingNote,
  editNote,
} from "../../actions/todoActions";

const CurrentNote = (props) => {
  const {
    id,
    allUserNotes,
    getNotes,
    updateNotes,
    setEditingNote,
    editedNotes,
    editNote,
  } = props;

  useEffect(() => {
    getNotes(id);
  }, [id, getNotes]);

  const filteredNotes = allUserNotes.filter(
    (note) => note.todo_title_id === props.id
  );

  const handleEditClick = (noteId, noteContent) => {
    // Set the initial value of editedNote
    editNote({ setNoteId: noteId, note: noteContent });
    setEditingNote(noteId, true);
  };

  const handleSaveClick = (noteId) => {
    const updatedNote = editedNotes[noteId] || filteredNotes[0]?.todo_list;
    updateNotes(noteId, { todo_list: updatedNote });
    setEditingNote(noteId, false);
  };

  const handleInputChange = (e, noteId) => {
    const updatedNote = e.target.value;
    editNote({ setNoteId: noteId, note: updatedNote }); // Update the local state of editedNote
  };

  return (
    <div>
      {filteredNotes.map((note) => (
        <React.Fragment key={note.id}>
          {props.noteEditingState[note.id] ? (
            <>
              <input
                type="text"
                value={editedNotes[note.id] || note.todo_list}
                onChange={(e) => handleInputChange(e, note.id)}
              />
              <button onClick={() => handleSaveClick(note.id)}>Save</button>
            </>
          ) : (
            <>
              <p>{note.todo_list}</p>
              <button onClick={() => handleEditClick(note.id, note.todo_list)}>
                Edit
              </button>
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
    editedNotes: state.editedNotes,
    noteEditingState: state.noteEditingState,
  };
};

export default connect(mapStateToProps, {
  getNotes,
  updateNotes,
  setEditingNote,
  editNote,
})(CurrentNote);
