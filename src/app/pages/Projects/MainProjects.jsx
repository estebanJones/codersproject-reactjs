import React from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

// Import Structure
import Header from "../../base/Header/Header.jsx";
import Footer from "../../base/Footer/Footer.jsx";

// Import Components
import ModalNouveauProject from "./components/ModalNouveauProject.jsx";

// Import Icons
import {MdLocalOffer} from "react-icons/md";
import {GoChecklist} from "react-icons/go";
import {FaProjectDiagram, FaPlusCircle} from "react-icons/fa";




const MainProjects = ({ checkUserStatus: isOnline, onLogoutUser: onLogout }) => {

  const [projects, setProjects] = useState([]);

  let listAllProjects = () => {
      console.log('dans ma liste projects');


  
    };

  listAllProjects();



    return (
      <div id="wrapper">
      <Header 
          checkUserStatus={isOnline}
          onLogoutUser={onLogout} />
      <main className="bg_projects">
        <div className="allBlock row w-100 d-flex justify-content-lg-around mx-0 col-lg-12">

        <div className="h-100 d-flex flex-column justify-content-center col-lg-3 pl-0 pr-2">
          
          <div className="h-20">
          
              <ModalNouveauProject />

          </div>
          <div className="h-80 pt-2">
            <div className="block-dark h-100 p-2 text-center">
                <div className="h-10">
                <h3><MdLocalOffer /> Postes à pourvoir</h3>
                </div>
                <div className="h-80">
                    <div className="row h-100 mx-0 pb-2">
                        <div className="col-12 px-0 h-25 mb-1">
                            <div className="block-dark-hover h-100">
                            test
                            </div>
                        </div>
                        <div className="col-12 px-0 h-25 mb-1">
                            <div className="block-dark-hover h-100">
                            test
                            </div>
                        </div>
                        <div className="col-12 px-0 h-25 mb-1">
                            <div className="block-dark-hover h-100">
                            test
                            </div>
                        </div>
                        <div className="col-12 px-0 h-25">
                            <div className="block-dark-hover h-100">
                            test
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-10 pt-1">
                <button className="btn w-100 mx-0 block-dark-hover text-white rounded-0">Voir tous les postes</button>
                </div>
            </div>
          </div>
          
        </div>

        <div className="h-100 d-flex flex-column justify-content-center col-lg-6 px-0">
 
        <div className="block-dark h-100">
                
                
                <div className="row mx-0 p-2 h-10 d-flex flex-column justify-content-start">
                    <div className="searchProjects col-lg-6 pl-0 pr-2 d-flex justify-content-center h-10">
                        <input type="search" className="form-control rounded-0 text-center" placeholder="Chercher par Nom" />
                    </div>
                    <div className="col-lg-6 px-0 d-flex justify-content-center h-10">
                        <button className="btn block-dark-hover w-100 rounded-0 mx-0 text-white">FILTRER</button>
                    </div>
                </div>
                    <div className="col-12 h-90 px-2 d-flex justify-content-start">
                        <div className="row w-100 mx-0 h-100 custom_scrollbar">

                            
                            <div className="col-4 px-0 mb-1 h-50">
                            <Link to="projet/1/">
                                <div className="block-dark-hover mr-1 h-100">
                                    test
                                </div>
                                </Link>
                            </div>
                            <div className="col-4 px-0 mb-1 h-50">
                            <Link to="projet/2/">
                                <div className="block-dark-hover mr-1 h-100">
                                    test
                                </div>
                                </Link>
                            </div>
                            <div className="col-4 px-0 mb-1 h-50">
                            <Link to="projet/3/">
                                <div className="block-dark-hover mr-1 h-100">
                                    test
                                </div>
                                </Link>
                            </div>
                            <div className="col-4 px-0 mb-1 h-50">
                            <Link to="projet/4/">
                                <div className="block-dark-hover mr-1 h-100">
                                    test
                                </div>
                                </Link>
                            </div>
                            <div className="col-4 px-0 mb-1 h-50">
                            <Link to="projet/5/">
                                <div className="block-dark-hover mr-1 h-100">
                                    test
                                </div>
                                </Link>
                            </div>
                            <div className="col-4 px-0 mb-1 h-50">
                            <Link to="projet/6/">
                                <div className="block-dark-hover mr-1 h-100">
                                    test
                                </div>
                                </Link>
                            </div>
                            <div className="col-4 px-0 mb-1 h-50">
                            <Link to="projet/7/">
                                <div className="block-dark-hover mr-1 h-100">
                                    test
                                </div>
                                </Link>
                            </div>
                            <div className="col-4 px-0 mb-1 h-50">
                            <Link to="projet/8/">
                                <div className="block-dark-hover mr-1 h-100">
                                    test
                                </div>
                                </Link>
                            </div>
                            
                            
                            </div>
                    </div>
            


            </div>
          
        </div>

        <div className="h-100 d-flex flex-column justify-content-center col-lg-3 mx-0 pr-0 pl-2">
          
          <div className="h-80">
          <div className="block-dark h-100 p-2 text-center">
              <div className="h-10">
          <h3><FaProjectDiagram /> Projets Terminés</h3>
          </div>
          <div className="h-90">
                    <div className="row h-100 mx-0 pb-2">
                        <div className="col-12 px-0 h-25 mb-1">
                            <Link to="projet/1/gerer">
                            <div className="block-dark-hover h-100">
                            test
                            </div>
                            </Link>
                        </div>
                        <div className="col-12 px-0 h-25 mb-1">
                            <Link to="projet/2/gerer">
                                <div className="block-dark-hover h-100">
                            test
                            </div>
                            </Link>
                        </div>
                        <div className="col-12 px-0 h-25 mb-1">
                            <Link to="projet/3/gerer">
                                <div className="block-dark-hover h-100">
                            test
                            </div>
                            </Link>
                        </div>
                        <div className="col-12 px-0 h-25">
                            <Link to="projet/4/gerer">
                                <div className="block-dark-hover h-100">
                            test
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="h-20 pt-2">
          <button className="btn block-dark-hover text-white w-100 p-4 h-100 m-0 rounded-0"><GoChecklist size="2em" className="mr-2" /> Voir les projets terminés</button>
          </div>
          
        </div>


      </div>

      </main>

      <Footer isOnline={isOnline} />
    </div>
      
    );
  }


export default MainProjects;
