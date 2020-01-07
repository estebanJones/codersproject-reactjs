import React, { useState } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

// Import Component
import MainHome from "./app/pages/Home/MainHome.jsx";
import MainArene from "./app/pages/Arene/MainArene.jsx";
import MainProfile from "./app/pages/UserProfile/MainProfile.jsx";
import NouveauProjet from "./app/pages/Projects/NouveauProjet.jsx";

////// Projets
// import Projects from "./app/pages/Projects/Projects.jsx";
// import ProjetsFinis from "./app/pages/Projects/pages/ProjetsFinis.jsx";
// import NouveauProjet from "./app/pages/Projects/pages/NouveauProjet.jsx";
////// Projet Seul
// import ProjetSeul from "./app/pages/ProjetSeul/ProjetSeul.jsx";
////// Forum
// import Forum from "./app/pages/Forum/Forum.jsx";
////// Quizz
// import Quizz from "./app/pages/Quizz/Quizz.jsx"
function RouterCoder() {
  const [userId, setUserId] = useState();
  const [username, setUsername] = useState("");
  const [isOnline, setIsOnline] = useState(true);
  const [isAdmin, setIsAdmin] = useState(true);

  const updateUser = e => {
    console.log("Bien dans le Routeur !!!");
    setIsOnline(true);
  };

  const deconnexionUser = e => {
    setIsOnline(false);
  };

  return (
    <Router>
      <div>
        <Route
          exact
          path="/"
          render={props => (
            <MainHome
              checkUserStatus={isOnline}
              updateUserToHome={updateUser}
              onLogoutUser={deconnexionUser}
            />
          )}
        />
        <Route
          exact
          path="/arene"
          render={props => (
            <MainArene checkUserStatus={isOnline} onLogoutUser={deconnexionUser} />
          )}
        />
        <Route exact path="/mon-profile/" render={props => ( <MainProfile checkUserStatus={isOnline} onLogoutUser={deconnexionUser} /> )}/>
        {/* <Route exact path="/projets"
            render={(props) => <Projects checkUserStatus={isOnline} onLogoutUser={this.deconnexionUser} />} />
            <Route exact path="/projets/nouveau" 
            render={(props) => <ProjetsFinis checkUserStatus={isOnline} onLogoutUser={this.deconnexionUser} />} />
            <Route exact path="/projet/1"
            render={(props) => <ProjetSeul checkUserStatus={isOnline} onLogoutUser={this.deconnexionUser} />} />
            <Route exact path="/forum"
            render={(props) => <Forum checkUserStatus={isOnline} onLogoutUser={this.deconnexionUser} />} />
            <Route exact path="/quizz"
            render={(props) => <Quizz checkUserStatus={actualUser[0].isOnline} onLogoutUser={this.deconnexionUser} />} /> */}
      </div>
    </Router>
  );
}

export default RouterCoder;
