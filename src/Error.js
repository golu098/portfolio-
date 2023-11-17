import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <img
        src="https://miro.medium.com/v2/resize:fit:1400/1*DeBkx8vjbumpCO-ZkPE9Cw.png"
        alt="Error Image"
        style={{ width: '100%', height: 'auto', maxWidth: '100%' }} // Making the image responsive
      />
      <Link to="/" >
      <button style={{ backgroundColor: 'white' }}>Go To Home</button>
      </Link>
    </div>
  );
}
// making button clickbale

export default Error;
