import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import AllFriends from "./Components/AllFriends/AllFriends";
import axios from "axios";
import NewFriend from "./Components/NewFriend/NewFriend";

const useAxios = (url, method = "get", body = null, initialData = []) => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    axios(url, {
      method,
      body
    }).then(response => {
      setData(response.data);
    });
    // if the url or method changes, recall the effect
  }, [url, method, body]);

  return data;
};

function App() {
  let [myFriends, setFriends] = useState([]);
  let axiosResult = useAxios("http://localhost:4001/api/get-friends", "get");

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
