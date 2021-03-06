import React, { useState, useEffect } from "react";
import "./App.css";
import { db, auth } from "./firebase";
import Post from "./Post";
import { Button, Input } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import ImageUpload from "./ImageUpload";

import InstagramEmbed from "react-instagram-embed";

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
  const [openSingin, setOpenSignin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, [user, username]);

  // useEffect
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() }))
        );
      });
  }, []);

  const handleSingin = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));
    setOpenSignin(false);
  };

  const handleSignup = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({ displayName: username });
      })
      .catch((error) => alert(error.message));
    setOpen(false);
  };
  return (
    <div className="app">
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle[0]} className={classes.paper}>
          <form action="" className="app__singup">
            <center>
              <img
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                alt="Instagram Logo"
                className="app__headerImage"
              />
            </center>

            <Input
              type="text"
              placeholder="Usear name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" onClick={handleSignup}>
              Sign up
            </Button>
          </form>
        </div>
      </Modal>

      <Modal open={openSingin} onClose={() => setOpenSignin(false)}>
        <div style={modalStyle[0]} className={classes.paper}>
          <form action="" className="app__singup">
            <center>
              <img
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                alt="Instagram Logo"
                className="app__headerImage"
              />
            </center>
            <Input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" onClick={handleSingin}>
              Sign In
            </Button>
          </form>
        </div>
      </Modal>
      <div className="app__header">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Instagram Logo"
          className="app__headerImage"
        />

        {user ? (
          <Button onClick={() => auth.signOut()}>Logout</Button>
        ) : (
          <div className="app__loginContainer">
            <Button
              onClick={() => {
                setOpen(true);
              }}
            >
              Sign Up
            </Button>
            <Button
              onClick={() => {
                setOpenSignin(true);
              }}
            >
              Sign In
            </Button>
          </div>
        )}
      </div>

      <h1 className="app_headerTitle">
        Hello programmers, Let's build Instagram Clone.
      </h1>

      <div className="app__posts">
        <div className="app_postsLeft">
          {posts.map(({ id, post }) => (
            <Post
              key={id}
              postId={id}
              user={user}
              username={post.username}
              caption={post.caption}
              imageUrl={post.imageUrl}
            />
          ))}
        </div>

        <div className="app_postsRight">
          <InstagramEmbed
            url="https://www.instagram.com/p/Zw9o4/"
            maxWidth={540}
            hideCaption={false}
            containerTagName="div"
            protocol=""
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
          />
        </div>
      </div>

      {user?.displayName ? (
        <ImageUpload username={user.displayName} />
      ) : (
        <h1>Login to upload</h1>
      )}
    </div>
  );
}

export default App;
