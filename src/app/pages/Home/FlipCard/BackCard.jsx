import React, { useState } from "react";

// Import base Theme
import Header from "../../../base/Header/Header.jsx";
import Footer from "../../../base/Footer/Footer.jsx";

// Import Icons
import { AiFillPlusSquare } from "react-icons/ai";


function BackCard(props) {
    const [inputPseudoRegister, setInputPseudoRegister] = useState("");
    const [inputPasswordRegister, setInputPasswordRegister] = useState("");
    const [inputPasswordConfirmRegister, setInputPasswordConfirmRegister] = useState("");
    const [inputEmailRegister, setInputEmailRegister] = useState("");
    const [inputEmailForgetPass, setInputEmailForgetPass] = useState("");

    const onRegister = (e) => {
        e.preventDefault();
        // JENVOIES LES INFOS REACT A SYMFONY
        fetch("http://127.0.0.1:8000/user/newUser", {
            headers: { 'Content-Type': 'application/json' },
            method: "POST",
            body: JSON.stringify(
                {
                    username: inputPseudoRegister,
                    password: inputPasswordRegister,
                    email: inputEmailRegister
                }
            ),
        })
            .then(res => {
                return res.json();
            })
            // JE RECUPERE LA REPONSE
            .then(data => {
                console.log(data);
                // SI L INSCRIPTION EST UN SUCCESS
                // RETOURNER SUR LE FLIP LOGIN
                if (data.state === "success") {
                    props.onBackFlip();
                }

            });
    }

    const displayPageForgetOrCreateAccount = () => {

        if (props.checkStatusToFlip && props.statusRegisterPage) {
            return (
                <div className="login-block block-dark w-100 h-100 px-4 py-4">
                    <h4>Inscription</h4>
                    <form onSubmit={e => onRegister(e)}>
                        <label className="d-flex flex-column mb-2">
                            Nom d'utilisateur
                     <input
                                name="username"
                                type="text"
                                onChange={({ currentTarget: { value } }) => setInputPseudoRegister(value)}
                                value={inputPseudoRegister}
                                className="w-100 mt-2 font-rubik"
                            ></input>
                        </label>
                        <label className="d-flex flex-column mb-2">
                            Mot de passe
                     <input
                                name="password"
                                type="password"
                                onChange={({ currentTarget: { value } }) => setInputPasswordRegister(value)}
                                value={inputPasswordRegister}
                                className="w-100 mt-2"
                            ></input>
                        </label>
                        <label className="d-flex flex-column mb-2">
                            Confirmer le mot de passe
                     <input
                                name="passwordConfirm"
                                type="password"
                                onChange={({ currentTarget: { value } }) => setInputPasswordConfirmRegister(value)}
                                value={inputPasswordConfirmRegister}
                                className="w-100 mt-2"
                            ></input>
                        </label>
                        <label className="d-flex flex-column mb-2">
                            Email
                     <input
                                name="email"
                                type="email"
                                onChange={({ currentTarget: { value } }) => setInputEmailRegister(value)}
                                value={inputEmailRegister}
                                className="w-100 mt-2"
                            ></input>
                        </label>
                        <button
                            className="btn btn-success w-100 rounded-0 border-none m-0">
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

        } else if (props.checkStatusToFlip === true && props.statusRegisterPage === false) {
            return (<div className="login-block block-dark d-flex flex-column justify-content-between w-100 h-100 px-4 py-4">
                <h4>Mot de passe oublié ?</h4>
                <form
                    id="askPassword"
                    className="formControl mt-6">
                    <p>Veuillez renseigner votre adresse email afin d'obtenir un lien pour réinitialiser votre mot de passe.</p>
                    <label className="mb-2">
                        Adresse mail{" "}
                        <input
                            onChange={({ currentTarget: { value } }) => setInputEmailForgetPass(value)} value={inputEmailForgetPass}
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
                    onClick={props.onBackFlip}>
                    Retour à la connexion</h5>
            </div>
            );
        }
    }

    return (
        <div>
            {displayPageForgetOrCreateAccount()}
        </div>
    );
}

export default BackCard;