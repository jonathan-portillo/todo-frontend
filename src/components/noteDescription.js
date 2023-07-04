import React, { useState } from "react";

const NoteDescription = () => {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { description });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Describe Note
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default NoteDescription;
