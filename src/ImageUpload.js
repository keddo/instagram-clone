import React from "react";
import { Button } from "@material-ui/core";

function ImageUpload() {
  const [caption, setCaption] = useState("");
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
