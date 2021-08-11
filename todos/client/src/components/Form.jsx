import React from "react";
import { useState } from "react";

export default function Form({add}) {
  const [input, setInput] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => {
          setInput(e.target.value || "unknown title");
        }}
      />
      <button
      onClick={()=>{add(input)}}
      >Add</button>
    </div>
  );
}
