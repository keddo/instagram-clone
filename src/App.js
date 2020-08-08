import React, { useState, useEffect } from "react";
import "./App.css";
import { db } from "./firebase";
import Post from "./Post";
import { Button } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const classes = useStyles();
  const modalStyle = useState(getModalStyle);
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  // useEffect
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })));
    });
  }, []);

  console.log(modalStyle);
  return (
    <div className="app">
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Text in a modal</h2>
        </div>
      </Modal>
      <div className="app__header">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Instagram Logo"
          className="app__headerImage"
        />
      </div>

      <Button
        type="button"
        onClick={() => {
          setOpen(true);
        }}
      >
        Sign Up
      </Button>

      <h1>Hello programmers, Let's build Instagram Clone.</h1>

      {posts.map(({ id, post }) => (
        <Post
          key={id}
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
