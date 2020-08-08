import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";
function Post({ username, caption, imageUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt={username}
          src="/static/images/avatar/1.jpg"
        />
        {/* header -> avatar + username */}
        <h3>Rafeh Qazi</h3>
      </div>
      {/* Image */}
      <img className="post__image" src={imageUrl} alt="Post user" />
      {/* username + caption */}
      <h4 className="post__text">
        <strong>cleveqazi:</strong> {caption}
      </h4>
    </div>
  );
}

export default Post;
