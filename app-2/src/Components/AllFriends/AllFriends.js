import React from "react";
import "./AllFriends.css";
import MappedFriends from "../MappedFriends/MappedFriends";

export default function AllFriends(props) {
  return (
    <div className="Allfriends-parent">
      <div className="section-header">
        <h1>All Friends</h1>
      </div>
      {/* Render mapped friends, pass appropriate props. */}
      <MappedFriends
        friends={props.friends}
        deleteFriend={props.deleteFriend}
      />
    </div>
  );
}
