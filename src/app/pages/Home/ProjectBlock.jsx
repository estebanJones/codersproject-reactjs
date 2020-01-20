import React from "react";
import { Link } from "react-router-dom";

// Import Component
import HomeProjectList from "./HomeProjectList.jsx";

// Import Icons
import { FaProjectDiagram } from "react-icons/fa";
import { useState } from "react";

function ProjectBlock() {

        return (
          <div className="col-lg-4">
      <div className="arene_link mb-2 h-15">
        <Link to="/projets">
          <button className="d-flex flex-column w-100 h-100 block-dark-hover justify-content-center">
            <div className="d-flex justify-content-center ">
              <FaProjectDiagram className="mr-3 display-4 " />
              <h2 className="my-auto">Projets</h2>
            </div>
          </button>
        </Link>
      </div>

      <HomeProjectList />
    </div>
  );
}

export default ProjectBlock;
