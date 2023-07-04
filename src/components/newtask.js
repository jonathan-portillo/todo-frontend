import React, { useState } from "react";

const NewTask = () => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { title });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          New Task
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default NewTask;
