import React, { useState,useEffect } from "react";
import { Link} from "react-router-dom";
import ProjetSeul from "../Projects/ProjetSeul.jsx";

// Import Icons
import { GoTasklist } from 'react-icons/go';

function HomeProjectList(){


    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/project/show_all_project', {
            method: 'GET',
            headers: { "Content-Type": "application/json" },
        })
            .then(res => res.json())
            .then(data => { console.log(data); setProjects(data.projects) })
    }, []);

    const listProject = projects.map((project) =>
    <div className="single-list-result block-dark-hover pointer py-2 px-4 ">
           <Link to={`projet/${project._id}`} handler={ProjetSeul} className="list-unstyled">
    <div className="row mx-0">
        <div className="d-flex justify-content-center col-2 text-white">
            <GoTasklist />
        </div>
        <div key={project._id} className="d-flex justify-content-center col-10">
        <h4 className="text-white">{project.title}</h4>
        </div>
    </div>
    <div className="row mx-0 text-center">
    <p className="text-white">{project.description}</p>
        </div>
       </Link>
        </div>
         );

        return (
            <div className="d-flex justify-content-center home-project-list block-dark mt-2 px-1 pt-3 h-85">
            <div className="d-flex flex-column justify-content-start">
                <div className="h-15">
                <h3 className="mb-4 mt-2 text-center">Susceptible de vous intéresser</h3>
                </div>
                <div className="block-home-list custom_scrollbar h-85 mb-0">
                {listProject}
                </div>
            </div>
        </div>
        );
    }
export default HomeProjectList;