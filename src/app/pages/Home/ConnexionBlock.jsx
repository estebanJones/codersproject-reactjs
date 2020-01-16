import React, { useState } from "react";

// Import Icons
// import { AiFillGoogleSquare } from 'react-icons/ai';
// import { FaFacebookSquare } from 'react-icons/ai';
// import { AiFillLinkedin } from 'react-icons/ai';
// import { AiFillPlusSquare } from 'react-icons/ai';
import FrontCard from "./FlipCard/FrontCard";
import BackCard from "./FlipCard/BackCard";
import ReactCardFlip from "react-card-flip";
import { useContext } from "react";
import { StatusUserContext } from "../../contexts/ThemeContext";

function ConnexionBlock(props) {
  const [statusToFlip, setStatusToFlip] = useState(false);
  const [statusToRegister, setStatusToRegister] = useState(false);
  const frontFlip = () => {
    // e.preventDefault();
    setStatusToFlip(true);
  };

  const backFlip = () => {
    // e.preventDefault();
    if (statusToRegister) {
      setStatusToRegister(false);
    }
    setStatusToFlip(false);
  };

  const registerFlip = () => {
    console.log("dans register");
    setStatusToRegister(true);
    setStatusToFlip(true);
  }

  const { isOnline, setIsOnline } = useContext(StatusUserContext);

  return (
    <div className="col-lg-3 px-0 d-flex flex-column text-center justify-content-center">
      {console.log({ isOnline })};
      <ReactCardFlip isFlipped={statusToFlip} flipDirection="horizontal">
        <FrontCard onFrontFlip={frontFlip}
          onRegisterFlip={registerFlip} />
        <BackCard onBackFlip={backFlip}
          statusRegisterPage={statusToRegister}
          checkStatusToFlip={statusToFlip}
        />
      </ReactCardFlip>
    </div>
  );
}

export default ConnexionBlock;
