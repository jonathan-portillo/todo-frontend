import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getNotes } from "../../actions/todoActions";

const CurrentNote = (props) => {
  const { id, allUserNotes, getNotes } = props;

  const filteredNotes = allUserNotes.filter(
    (note) => note.todo_title_id === props.id
  );

  useEffect(() => {
    getNotes(id);
  }, [id, getNotes]);

  console.log(`current component ${id} notes`, filteredNotes);

  return (
    <div>
      {filteredNotes.map((note) => (
        <p>{note.todo_list}</p>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    allUserNotes: state.allUserNotes,
  };
};

export default connect(mapStateToProps, {
  getNotes,
})(CurrentNote);
