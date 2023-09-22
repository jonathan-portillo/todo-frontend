import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  getNotes,
  updateNotes,
  setEditingNote,
  editNote,
} from "../../actions/todoActions";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import SaveIcon from "@mui/icons-material/Save";
import { TextField } from "@mui/material";

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
    editNote({ setNoteId: noteId, note: updatedNote });
  };

  const formatDescription = (text) => {
    return text.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < text.split("\n").length - 1 && <br />}{" "}
      </React.Fragment>
    ));
  };

  return (
    <div>
      {filteredNotes.map((note) => (
        <React.Fragment key={note.id}>
          {props.noteEditingState[note.id] ? (
            <>
              <div className="editbox">
                <TextField
                  id="outlined-multiline-flexible"
                  type="text"
                  multiline
                  rows={null}
                  defaultValue="Type in your note"
                  style={{ height: "100%" }}
                  value={editedNotes[note.id] || ""}
                  onChange={(e) => handleInputChange(e, note.id)}
                  className="notepad-input"
                />
                <div className="saveicon">
                  <IconButton>
                    <SaveIcon
                      style={{ fontSize: 18 }}
                      onClick={() => handleSaveClick(note.id)}
                    />
                  </IconButton>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="notesbox">
                <div className="note">
                  <p>{formatDescription(note.todo_list)}</p>
                </div>
                <div className="editbuttonnote">
                  <IconButton>
                    <EditIcon
                      style={{ fontSize: 18 }}
                      onClick={() => handleEditClick(note.id, note.todo_list)}
                    />
                  </IconButton>
                </div>
              </div>
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
