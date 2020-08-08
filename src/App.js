import React from "react";
import "./App.css";

import Post from "./Post";

function App() {
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

      {/* Posts */}
      <Post
        username="Rahef Qazi"
        caption="Woow day three of live session."
        imageUrl="https://instagram.fjib1-2.fna.fbcdn.net/v/t51.2885-15/fr/e15/s1080x1080/117041974_302702244497038_500430435947338940_n.jpg?_nc_ht=instagram.fjib1-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=ndlEnHZGeYYAX_Rd9CG&oh=406dc78e256ac1631f12918759d3e76d&oe=5F58339E"
      />
      <Post
        username="Rahef Qazi"
        caption="Woow day three of live session."
        imageUrl="https://instagram.fjib1-2.fna.fbcdn.net/v/t51.2885-15/fr/e15/s1080x1080/117041974_302702244497038_500430435947338940_n.jpg?_nc_ht=instagram.fjib1-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=ndlEnHZGeYYAX_Rd9CG&oh=406dc78e256ac1631f12918759d3e76d&oe=5F58339E"
      />
      <Post
        username="Rahef Qazi"
        caption="Woow day three of live session."
        imageUrl="https://instagram.fjib1-2.fna.fbcdn.net/v/t51.2885-15/fr/e15/s1080x1080/117041974_302702244497038_500430435947338940_n.jpg?_nc_ht=instagram.fjib1-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=ndlEnHZGeYYAX_Rd9CG&oh=406dc78e256ac1631f12918759d3e76d&oe=5F58339E"
      />
    </div>
  );
}

export default App;
