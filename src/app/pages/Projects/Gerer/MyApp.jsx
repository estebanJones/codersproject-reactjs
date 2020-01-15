import React from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

// Import Structure
import Header from "../../../base/Header/Header.jsx";
import Footer from "../../../base/Footer/Footer.jsx";

// Import Components
import Information from "./Information";
import Equipe from "./Equipe";
import Recrutement from "./Recrutement";
import ToDoList from "./ToDoList";
import Parametre from "./Parametre";



const MyApp = ({ checkUserStatus: isOnline, onLogoutUser: onLogout }) => {

  const { projectId } = useParams();  

  const [currentTab, setCurrentTab] = useState("information");

  const changeTab = (tab) => {
    setCurrentTab(tab);
  };

  const change = (etat) => {

    switch (etat) {
      case "information":
        return <Information />;
      case "equipe":
        return <Equipe />;
      case "recrutement":
        return <Recrutement />;
      case "to_do_list":
        return <ToDoList />;
      case "parametres":
        return <Parametre />;
      default:
        return null;
    }
  }




    return (
      <div id="wrapper">
      <Header 
          checkUserStatus={isOnline}
          onLogoutUser={onLogout} />
      <main className="bg_projects">
        <div className="allBlock row w-100 d-flex justify-content-lg-around mx-0 col-lg-12">

        <div className="list h-100 d-flex flex-column align-items-center justify-content-center col-lg-3 mx-0">
          <ul className="mb-0 h-100 d-flex flex-column w-100">
            <li onClick={e => {
              changeTab("information");
            }}>
Informations
            </li>
            <li onClick={e => {
              changeTab("equipe");
            }}>
Équipe
            </li>
            <li onClick={e => {
              changeTab("recrutement");
            }}>
Recrutement
            </li>
            <li onClick={e => {
              changeTab("to_do_list");
            }}>
To-Do List
            </li>
            <li onClick={e => {
              changeTab("parametres");
            }}>
Paramètres
            </li>

            </ul>
          
        </div>

        <div className="contenu d-flex flex-column justify-content-start h-100 col-9 p-2">
          {change(currentTab)}
        </div>
      </div>

      </main>

      <Footer isOnline={isOnline} />
    </div>
      
    );
  }


export default MyApp;
