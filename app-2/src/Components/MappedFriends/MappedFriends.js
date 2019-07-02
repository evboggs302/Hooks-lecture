import React from "react";
import "./MappedFriends.css";

let MappedFriends = props => {
  let mapped = props.friends.map(friend => {
    return (
      <div className="friend-parent">
        <div className="friend-parent_profile-picture">
          <img src={friend.image} />
        </div>
        <div>
          <h3>{friend.name}</h3>
        </div>
        <button onClick={() => props.deleteFriend(friend.id)}>
          Delete friend
        </button>
      </div>
    );
  });
  return (
    <div
      style={{
        width: "100%",
        overflowX: "hidden",
        overflowY: "scroll",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      {mapped}
    </div>
  );
};

export default MappedFriends;
