import React, { useState } from "react";

// Import Icons
// import { AiFillGoogleSquare } from 'react-icons/ai';
// import { FaFacebookSquare } from 'react-icons/ai';
// import { AiFillLinkedin } from 'react-icons/ai';
// import { AiFillPlusSquare } from 'react-icons/ai';
import FrontCard from "./FlipCard/FrontCard";
import BackCard from "./FlipCard/BackCard";
import ReactCardFlip from "react-card-flip";

function ConnexionBlock() {
  const [statusToFlip, setStatusToFlip] = useState(false);
  const frontFlip = () => {
    // e.preventDefault();
    setStatusToFlip(true);
  };

  const backFlip = () => {
    // e.preventDefault();
    setStatusToFlip(false);
  };

  return (
    <div className="col-lg-3 px-0 d-flex flex-column text-center justify-content-center">
      <ReactCardFlip isFlipped={statusToFlip} flipDirection="horizontal">
        <FrontCard onFrontFlip={frontFlip} />
        <BackCard onBackFlip={backFlip} />
      </ReactCardFlip>
    </div>
  );
}

export default ConnexionBlock;
