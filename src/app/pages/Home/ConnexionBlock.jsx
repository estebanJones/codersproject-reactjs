import React, { useState } from "react";


// Import Icons
// import { AiFillGoogleSquare } from 'react-icons/ai';
// import { FaFacebookSquare } from 'react-icons/ai';
// import { AiFillLinkedin } from 'react-icons/ai';
// import { AiFillPlusSquare } from 'react-icons/ai';
import FrontCard from "./FlipCard/FrontCard";
import BackCard from "./FlipCard/BackCard";
import ReactCardFlip from "react-card-flip";
// import { FaRegTired } from "react-icons/fa";

function ConnexionBlock() {
  const [statusToFlip, setStatusToFlip] = useState(false);
  const [createAccountCard, setCreateAccoundCard] = useState(false);

// LE STATUS POUR ACCEDER A BACKFLIP

  const frontFlip = () => {
    // e.preventDefault();
    setStatusToFlip(true);
  };

  // BACK FLIP A PARTIR DE LA FACE CREATE ACCOUNT
  // setTimeOut POUR DISSIMULER LA FACE FORGET PASS
  //*
  const backFlipFromCreate = () => {
    // e.preventDefault();
    setStatusToFlip(false);
        if(createAccountCard) {
          setTimeout(() => {
            setCreateAccoundCard(false);

          }, 1000)
        }else {
          setCreateAccoundCard(true);
        }
  };

  const backFlipFromForget = () => {
    // e.preventDefault();
    setStatusToFlip(false);
  };


  const middleFlip = () => {

    setCreateAccoundCard(true);
    setStatusToFlip(true);
  }

  return (
    <div className="col-lg-3 px-0 d-flex flex-column text-center justify-content-center">
      <ReactCardFlip isFlipped={statusToFlip} flipDirection="horizontal">
        <FrontCard onFrontFlip={frontFlip} onMiddleFlip={middleFlip} />
        <BackCard onBackFlipFromCreate={backFlipFromCreate} 
                  onBackFlipFromForget={backFlipFromForget}
                  statusFlipCreateAccount={createAccountCard}/>
      </ReactCardFlip>
    </div>
  );
}

export default ConnexionBlock;
