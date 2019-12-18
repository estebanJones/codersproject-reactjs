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
    }

    const backFlip = () => {
        // e.preventDefault();
        setStatusToFlip(false);
    }

    return (
        <ReactCardFlip isFlipped={statusToFlip} flipDirection="horizontal">
            <FrontCard  onFrontFlip={frontFlip} />
            <BackCard onBackFlip={backFlip}/>
        </ReactCardFlip>

    );
}

export default ConnexionBlock;