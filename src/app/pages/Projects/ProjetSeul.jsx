import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";


// Import Structure
import Header from "../../base/Header/Header.jsx";
import Footer from "../../base/Footer/Footer.jsx";

// Import Icons
import {AiFillClockCircle} from "react-icons/ai";
import {GoTools} from "react-icons/go";
import {FaClipboard, FaSuitcase, FaSymfony, FaReact, FaGithub} from "react-icons/fa";
import {IoIosBarcode, IoMdCodeWorking} from "react-icons/io";




const ProjetSeul = (props,{ checkUserStatus: isOnline, onLogoutUser: onLogout }) => {

  const [project, setProject] = useState([]);
  const { id } = useParams();


  useEffect(() => {fetch('http://127.0.0.1:8000/project/show_one_project', {
        method : 'POST',
        headers: {"Content-Type": "application/json" },
        body: JSON.stringify({
          projectId : id,
      })
      })
        .then(res =>res.json())
        .then(data => { setProject(data.project) })
     },[])

      // console.log(id);
      // console.log(project.title);

    return (
      <div id="wrapper">
      <Header 
          checkUserStatus={isOnline}
          onLogoutUser={onLogout} />
      <main className="bg_projects">
        <div className="allBlock row w-100 d-flex justify-content-center mx-0 col-lg-12 ">

               {/** Left Column */}

        <div className="h-100 d-flex flex-column justify-content-center col-lg-12 px-0 h-10">
            <h2 className="text-center">{project.title}</h2>
        </div>
        <div className="h-100 d-flex flex-column justify-content-center col-lg-3 px-0 h-90">

        <div className="block-dark h-75">

        <h4 className="text-center mt-3 mb-2"><IoMdCodeWorking className="pb-1" /> Fonctionnalités attendues</h4>
        <ul className="h-85 mt-2 px-4 custom_scrollbar">
          <li className="h-10 mb-1 text-center block-light-hover d-flex flex-column justify-content-center">
            Espace Membre
          </li>
          <li className="h-10 mb-1 text-center block-light-hover d-flex flex-column justify-content-center">
            Administration
          </li>
          <li className="h-10 mb-1 text-center block-light-hover d-flex flex-column justify-content-center">
            Blog
          </li>
          <li className="h-10 mb-1 text-center block-light-hover d-flex flex-column justify-content-center">
            Page de Contact
          </li>
          <li className="h-10 mb-1 text-center block-light-hover d-flex flex-column justify-content-center">
            Services
          </li>
          <li className="h-10 mb-1 text-center block-light-hover d-flex flex-column justify-content-center">
            Gestionnaire de Devis
          </li>
          <li className="h-10 mb-1 text-center block-light-hover d-flex flex-column justify-content-center">
            Espace Membre
          </li>
          <li className="h-10 mb-1 text-center block-light-hover d-flex flex-column justify-content-center">
            Administration
          </li>
          <li className="h-10 mb-1 text-center block-light-hover d-flex flex-column justify-content-center">
            Blog
          </li>
          <li className="h-10 mb-1 text-center block-light-hover d-flex flex-column justify-content-center">
            Page de Contact
          </li>
          <li className="h-10 mb-1 text-center block-light-hover d-flex flex-column justify-content-center">
            Services
          </li>
          <li className="h-10 mb-1 text-center block-light-hover d-flex flex-column justify-content-center">
            Gestionnaire de Devis
          </li>

        </ul>

            </div>
        <div className="block-dark h-25 mt-2">

        <h4 className="text-center mt-3 mb-2"><FaSuitcase className="pb-1" /> Outils & Frameworks</h4>

        <div class="row mx-0 h-50 w-100 pl-1 d-flex justify-content-center">
          <div className="col-6 col-lg-3 pr-1 pl-0 w-100 h-100">
            <div className="block-dark-hover w-100 h-100 text-center d-flex flex-column justify-content-center">
              <FaSymfony className="mx-auto" size="2em" />
              </div>
              </div>
          <div className="col-6 col-lg-3 pr-1 pl-0  w-100 h-100">
            <div className="block-dark-hover w-100 h-100 text-center d-flex flex-column justify-content-center">
              <FaReact className="mx-auto" size="2em" />
              </div>
              </div>
          <div className="col-6 col-lg-3 pr-1 pl-0  w-100 h-100">
            <div className="block-dark-hover w-100 h-100 text-center d-flex flex-column justify-content-center">
              <FaGithub className="mx-auto" size="2em" />
              </div>
              </div>

        </div>

            </div>

        </div>

               {/** Middle Column */}
        <div className="h-100 d-flex flex-column justify-content-center col-lg-4 pr-0 pl-2 h-90">
 
        <div className="block-dark h-20 d-flex flex-column justify-content-center">
                           
        <h5 className="text-center"><IoIosBarcode className="pb-1" /> Ce Projet est en cours d'élaboration</h5>

            </div>
        <div className="block-dark h-60 mt-2 d-flex flex-column justify-content-center">
                           
                          <div className="d-flex justify-content-center">
<img src="https://place-hold.it/250x250/e7e7e7"/>
</div>
            </div>
        
        <div className="block-dark-hover h-20 mt-2 ">
        <Link to={`${project._id}/gerer`} className="h-100 w-100 d-flex flex-column justify-content-center text-white">                
        <h4 className="text-center"><GoTools className="pb-1" /> Gérer le projet</h4>
        </Link>
            </div>
        
          
        </div>

        {/** Right Column */}

        <div className="h-100 d-flex flex-column justify-content-center col-lg-5 pr-0 pl-2 h-90">
 
        <div className="block-dark h-25 d-flex flex-column justify-content-center">
                           
        <h5 className="text-center"><AiFillClockCircle className="pb-1" /> Projet démarré il y a 2 semaines, 4 jours et 5 heures.</h5>

            </div>
        <div className="block-dark h-75 mt-2 mb-0 custom_scrollbar">
                           
        <h4 className="text-center mt-3 mb-2"><FaClipboard className="pb-1" /> Description</h4>
        <p className="pb-0 text-center p-3">
          {project.description}
        </p>

            </div>
          
      
          
        </div>


      </div>

      </main>

      <Footer isOnline={isOnline} />
    </div>
      
    );
  }


export default ProjetSeul;
