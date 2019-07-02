import React, { useState } from "react";
import "./NewFriend.css";
import useInput from "../../CustomHooks/useInput";

export default function NewFriend(props) {
  let nameValue = useInput("");
  let imageValue = useInput("");
  console.log(nameValue, imageValue);

  return (
    <div className="NewFriend-Parent">
      <h1>Add a new Friend</h1>
      <div className="newFriend-Parent_input-container">
        {/* Add input form here */}
        <div>
          Name: <input {...nameValue} />
          Image UrL: <input {...imageValue} />
        </div>
      </div>

      <button
        onClick={() =>
          props.postFriend({ name: nameValue.value, image: imageValue.value })
        }
      >
        Add New Friend
      </button>
    </div>
  );
}
