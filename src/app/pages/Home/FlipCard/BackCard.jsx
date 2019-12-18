import React, { useState } from "react";


function BackCard(props) {

        const [email, setEmail] = useState("");


    return(
            <div>
                <div>
                    <h2 className="textCenter">Mot de passe oublié ?</h2>
                    <form
                        className="formControl mt-6">                
                        <label className="d-column mb-2">
                        Adresse mail{" "}
                        <input
                            onChange={({currentTarget: {value}}) => setEmail(value)} value={email}
                            className="mt-2 font-rubik"
                            type="text"
                        ></input>
                        </label>
                        <button className="btn-green mt-4 w-100" type="submit">
                        Valider
                        </button>
                        <h5
                        className="mt-5 mx-auto text-center pointer w-50"
                        onClick={props.onBackFlip}
                        >
                        Retour à la connexion
                        </h5>
                    </form>
                </div>
            </div>
          );
}

export default BackCard;