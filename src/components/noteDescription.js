import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  createNewNote,
  handle_change_note_description,
  getNotes,
} from "../actions/todoActions";

const NoteDescription = (props) => {
  const id = props.id;

  useEffect(() => {
    props.getNotes(id);
  }, [id, props.getNotes]);

  console.log("Info is here", props.allUserNotes);

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

      <div>Display Notes here</div>
      <div>
        {props.allUserNotes.map((note) => (
          <p>{note.todo_list}</p>
        ))}
      </div>
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
  handle_change_note_description,
  getNotes,
})(NoteDescription);
