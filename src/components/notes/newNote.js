import React, { useState } from "react";
import { connect } from "react-redux";
import {
  handle_change_note_description,
  createNewNote,
} from "../../actions/todoActions";
import { TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import * as yup from "yup";

const NewNote = (props) => {
  const [isValid, setIsValid] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await props.createNewNote(props.id, {
      todo_list: props.newNoteDescription,
    });
  };

  const validationSchema = yup.object().shape({
    todo_list: yup.string().required("Note cannot be empty"), // Require a non-empty note
  });

  const checkFormValidity = async (value) => {
    try {
      await validationSchema.validate(value);
      setIsValid(true);
    } catch (error) {
      setIsValid(false);
    }
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
          onChange={(e) => {
            props.handle_change_note_description(e.target.value);
            checkFormValidity({ todo_list: e.target.value });
          }}
          className="notepad-input"
        />
        <Button
          disabled={!isValid}
          type="submit"
          variant="contained"
          endIcon={<SendIcon />}
          style={{ padding: "2px 4px", fontSize: "8px" }}
        >
          Send
        </Button>
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
