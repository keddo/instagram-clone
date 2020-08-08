import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";
function Post() {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="Rafeh Qazi"
          src="/static/images/avatar/1.jpg"
        />
        {/* header -> avatar + username */}
        <h3>Rafeh Qazi</h3>
      </div>
      {/* Image */}
      <img
        className="post__image"
        src="https://instagram.fjib1-2.fna.fbcdn.net/v/t51.2885-15/fr/e15/s1080x1080/117041974_302702244497038_500430435947338940_n.jpg?_nc_ht=instagram.fjib1-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=ndlEnHZGeYYAX_Rd9CG&oh=406dc78e256ac1631f12918759d3e76d&oe=5F58339E"
        alt="Post user"
      />
      {/* username + caption */}
      <h4 className="post__text">
        <strong>cleveqazi:</strong> Woow day three of live session.
      </h4>
    </div>
  );
}

export default Post;
