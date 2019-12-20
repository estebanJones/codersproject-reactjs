import React, { useState } from "react";

// Import base Theme
import Header from "../../../base/Header/Header.jsx";
import Footer from "../../../base/Footer/Footer.jsx";

function FrontCard(props) {

    const [inputPseudo, setInputPseudo] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return(
        <div id="wrapper" className="bg_projects col-lg-4">
        <h3>Se connecter</h3>
            <form>
                <label>Nom d'utilisateur<input type="text" onChange={( { currentTarget: { value }} ) => setInputPseudo(value)} value={inputPseudo}></input></label>
                <label>Mot de passe<input type="password" onChange={( { currentTarget: { value }} ) => setInputPassword(value)} value={inputPassword}></input></label>
                <button className="btn btn-success" onClick={(e) => handleSubmit(e)}>Entrer</button>
                <p>OU</p>
                <p>Se connecter avec :</p>
                <div className="google">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 488 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                </div>
                <div className="facebook">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z"></path></svg>
                </div>
                <div className="linkedin">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
                </div>
                <div>
                    <span type="submit" onClick={props.onFrontFlip} >Mot de passe oublié</span>
                </div>
            </form>
           
        </div>
        );
}
export default FrontCard;