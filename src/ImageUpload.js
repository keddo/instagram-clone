import React from "react";
import { Button } from "@material-ui/core";

function ImageUpload() {
  return (
    <div>
      {/* caption */}
      <input type="text" placeholder="Enter a caption..." />
      {/* image upload */}
      <input type="file" onChange={handleChange} />
      {/* submit buttton */}
      <Button onClick={handleUpload}></Button>
    </div>
  );
}

export default ImageUpload;
