import React, { useState } from "react";
import { Button } from "@material-ui/core";

function ImageUpload() {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [caption, setCaption] = useState("");

  const handleUpload = (e) => {
    if (e.target.files[0]) setImage(e.target.files[0]);
  };

  const handleChange = () => {};
  return (
    <div>
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
