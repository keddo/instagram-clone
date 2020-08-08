import React, { useState } from "react";
import "./App.css";

import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "cleveqazi",
      caption: "Woow day three of live session.",
      imageUrl:
        "https://instagram.fjib1-2.fna.fbcdn.net/v/t51.2885-15/fr/e15/s1080x1080/117041974_302702244497038_500430435947338940_n.jpg?_nc_ht=instagram.fjib1-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=ndlEnHZGeYYAX_Rd9CG&oh=406dc78e256ac1631f12918759d3e76d&oe=5F58339E",
    },
    {
      username: "abrish",
      caption: "Dope",
      imageUrl:
        "https://images.unsplash.com/photo-1557433840-13fb8e0495b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=326&q=80",
    },
    {
      username: "game_player",
      caption: "This is fun project.",
      imageUrl:
        "https://images.unsplash.com/photo-1579104996658-54cd9e4bade8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMjF9&auto=format&fit=crop&w=750&q=80",
    },
  ]);
  return (
    <div className="app">
      <div className="app__header">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Instagram Logo"
          className="app__headerImage"
        />
      </div>

      <h1>Hello programmers, Let's build Instagram Clone.</h1>

      {posts.map((post) => (
        <Post
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
