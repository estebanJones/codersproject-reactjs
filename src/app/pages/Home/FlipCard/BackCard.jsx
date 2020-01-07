import React, { useState } from "react";

// Import base Theme
import Header from "../../../base/Header/Header.jsx";
import Footer from "../../../base/Footer/Footer.jsx";

// Import Icons
import { AiFillPlusSquare } from "react-icons/ai";


function BackCard(props) {
        const [username, setUsername] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [confirmPassword, setConfirmPassword] = useState("");

        const flipCreateAccount = () => {
            console.log("dans flip: ",props.statusFlipCreateAccount);
            if (props.statusFlipCreateAccount) {
                return (
                    <div>
                        <div className="login-block block-dark w-100 h-100 px-4 py-4">
                            <h4>Créer un compte</h4>
        
                            <form method="POST" action="user/candidat/new">
                                <label className="d-flex flex-column mb-2">
                                Nom d'utilisateur
                                <input
                                    name="username"
                                    type="text"
                                    onChange={({ currentTarget: { value } }) => setUsername(value)}
                                    value={username}
                                    className="w-100 mt-2 font-rubik"
                                ></input>
                                </label>
                                <label className="d-flex flex-column mb-2">
                                Adresse email
                                <input
                                    name="email"
                                    type="email"
                                    onChange={({ currentTarget: { value } }) => setEmail(value)}
                                    value={email}
                                    className="w-100 mt-2"
                                ></input>
                                </label>
                                <label className="d-flex flex-column mb-2">
                                Mot de passe
                                <input
                                    name="password"
                                    type="password"
                                    onChange={({ currentTarget: { value } }) => setPassword(value)}
                                    value={password}
                                    className="w-100 mt-2"
                                ></input>
                                </label>
                                <label className="d-flex flex-column mb-2">
                                Confirmé le mot de passe
                                <input
                                    name="passwordConfirm"
                                    type="password"
                                    onChange={({ currentTarget: { value } }) => setConfirmPassword(value)}
                                    value={confirmPassword}
                                    className="w-100 mt-2"
                                ></input>
                                </label>
                                <button
                                className="btn btn-success w-100 rounded-0 border-none"
                                >
                                Créer mon compte
                                </button>
                                <h5
                                className="backToLogin mt-5 mx-auto text-center w-100" 
                                onClick={props.onBackFlipFromCreate}
                                >
                                Retour à la connexion
                                </h5>
                            </form>
                        </div>
                    </div>            
                    
             );
      
            }else {
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
                                    onClick={props.onBackFlipFromForget}
                                    >
                                    Retour à la connexion
                                    </h5>
                            </div>
                    );
            }
        }

        return(<div>
                    {flipCreateAccount()}
                </div>)
}

export default BackCard;