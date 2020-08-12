import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { db, storage } from "./firebase";
import firebase from "firebase";

function ImageUpload({ username }) {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [caption, setCaption] = useState("");

  const handleUpload = (e) => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
        alert(error.message);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("posts").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption: caption,
              imageUrl: url,
              username: username,
            });
            setProgress(0);
            setCaption("");
            setImage(null);
          });
      }
    );
  };

  const handleChange = (e) => {
    if (e.target.files[0]) setImage(e.target.files[0]);
  };
  return (
    <div>
      {/* Progressbar */}
      <progress value={progress} max="100" />
      {/* caption */}
      <input
        type="text"
        placeholder="Enter a caption..."
        onChange={(ev) => setCaption(ev.target.value)}
        value={caption}
      />
      {/* image upload */}
      <input type="file" onChange={handleChange} />
      {/* submit buttton */}
      <Button onClick={handleUpload}>Upload</Button>
    </div>
  );
}

export default ImageUpload;
