import React, { useState } from "react";

const taskNotes = () => {
  const [tasknotes, setTaskNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { taskNotes });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Notes
          <input
            type="text"
            value={tasknotes}
            onChange={(e) => setTaskNotes(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default taskNotes;
