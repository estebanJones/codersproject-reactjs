import React, { useState } from "react";

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
                <div className="leftBlock">
                    <label onSubmit={(e) => handleSubmitNewProject(e)}>Titre du nouveau LogoFormProject
                    <input name="projectTitle" type="text" onChange={({ currentTarget: { value } }) => setProjectTitle(value)} value={projectTitle} ></input>
                    </label>
                    <label name="projectDescrib" type="text" onChange={({ currentTarget: { value } }) => setDescribProject(value)} value={describProject}>Description du résultat attendu
                        <textarea></textarea>
                    </label>
                </div>
                <div className="rightBock">
                    <label>Ajouter une image ou utiliser celle par défaut<input type="file"></input></label>
                    <button className="btn btn-danger text-white">REVENIR EN ARRIERE</button>
                    <button type="submit" className="btn btn-success text-white">CREER LE PROJET</button>
                </div>
            </form>
        </div>
    );
}

export default LogoFormProject;