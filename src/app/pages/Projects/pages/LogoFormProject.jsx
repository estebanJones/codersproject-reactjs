import React, { useState } from "react";
import logo  from "./../../../../img/logo.png";

function LogoFormProject() {
    const [projectTitle, setProjectTitle] = useState("");
    const [describProject, setDescribProject] = useState("");

    const handleSubmitNewProject = (e) => {
        e.preventDefault();
        console.log(e);
        // fetch('app/projet/createProject/')
        //     .then(res => {
        //         return res.json;
        //     })
        //     .then(data => {
        //         console.log(data);
        //     })
    }

    return (
        <div>
            <form>
                <div className="mainContainer col-12 offset-1 text-center">   
                    <div className="containerLeft">
                        <label onSubmit={(e) => handleSubmitNewProject(e)}>Titre du nouveau Projet<br></br>
                            <input id="projectTitle" name="projectTitle" type="text" onChange={({ currentTarget: { value } }) => setProjectTitle(value)} value={projectTitle} ></input>
                        </label><br></br>
                        <div className="formTechno mb-4">
                            <strong>Technologies utilisées</strong><br></br>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
                                <label className="form-check-label" for="inlineCheckbox1">Front-End</label>
                            </div>

                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"></input>
                                <label className="form-check-label" for="inlineCheckbox2">Back-End</label>
                            </div>
                            <label name="projectDescrib" type="text" onChange={({ currentTarget: { value } }) => setDescribProject(value)} value={describProject}>Description du résultat attendu
                                <br></br>   <textarea></textarea>
                            </label>
                        </div>
                    </div>
                    <div className="rightBock">
                        <label>Ajouter une image ou utiliser celle par défaut</label><br></br>
                        <img src={logo} alt="logo" /><br></br>
                        <input type="file"></input> <br></br>
                        <button className="btn btn-danger text-white">REVENIR EN ARRIERE</button>
                        <button type="submit" className="btn btn-success text-white">CREER LE PROJET</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default LogoFormProject;