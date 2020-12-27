import React, { useState } from "react";

function CreateArea(props) {
  const [fullNote, setFullNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFullNote((preValue) => {
      return {
        ...preValue,
        [name]: value
      };
    });
  }
  function submitNote(event) {
    props.onSubmit(fullNote);
    setFullNote({
      title: "",
      content: ""
    });

    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
