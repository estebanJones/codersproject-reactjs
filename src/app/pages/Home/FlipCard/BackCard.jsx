import React, { useState } from "react";

// Import base Theme
import Header from "../../../base/Header/Header.jsx";
import Footer from "../../../base/Footer/Footer.jsx";

// Import Icons
import { AiFillPlusSquare } from "react-icons/ai";


function BackCard(props) {

        const [email, setEmail] = useState("");


    return(
        <div className="login-block block-dark d-flex flex-column justify-content-between w-100 h-100 px-4 py-4">
                    <h4>Mot de passe oublié ?</h4>
                    <form
                        id="askPassword"
                        className="formControl mt-6">
                            <p>Veuillez renseigner votre adresse email afin d'obtenir un lien pour réinitialiser votre mot de passe.</p>                
                        <label className="mb-2">
                        Adresse mail{" "}
                        <input
                            onChange={({currentTarget: {value}}) => setEmail(value)} value={email}
                            className="w-100 mt-2 font-rubik"
                            type="email"
                        ></input>
                        </label>
                        <button className="btn btn-success w-100 rounded-0 border-none mt-2" type="submit">
                        Valider
                        </button>
                    </form>
                    <h5
                        className="backToLogin mt-5 mx-auto text-center w-100"
                        onClick={props.onBackFlip}
                        >
                        Retour à la connexion
                        </h5>
                </div>
          );
}

export default BackCard;