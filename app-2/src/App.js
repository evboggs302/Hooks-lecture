import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import AllFriends from "./Components/AllFriends/AllFriends";
import axios from "axios";
import NewFriend from "./Components/NewFriend/NewFriend";

function App() {
  let [myFriends, setFriends] = useState([]);

  useEffect(() => {
    axios.get("/api/get-friends").then(response => {
      setFriends(response.data);
    });
  }, []);

  let postFriend = payload => {
    axios.post("/api/post-friend", payload).then(response => {
      console.log(response.data);
      setFriends(response.data);
    });
  };

  let deleteFriend = id => {
    axios.delete(`/api/delete-friend/${id}`).then(response => {
      setFriends(response.data);
    });
  };

  console.log(myFriends);
  return (
    <div className="App">
      <Header />
      <span>
        {/* Render newFriend and allFriend components. Pass Appropriate props */}
        <NewFriend postFriend={postFriend} />
        <AllFriends friends={myFriends} deleteFriend={deleteFriend} />
      </span>
    </div>
  );
}

export default App;
