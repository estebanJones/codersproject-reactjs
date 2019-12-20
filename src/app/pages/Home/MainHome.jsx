import React from "react";
import ArenaBlock from "./ArenaBlock";
import ConnexionBlock from "./ConnexionBlock";
import ProjectBlock from "./ProjectBlock";



function MainHome() {

    return (
        <div className="container-fluid">
        <div className="allBlock row col-lg-12">
            <ArenaBlock />
            <ConnexionBlock />
            <ProjectBlock />

        </div>
        </div>
    )




}

export default MainHome;