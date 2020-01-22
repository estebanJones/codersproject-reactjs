import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

// Import Pages

// Home
import MainHome from "./app/pages/Home/MainHome.jsx";
// Arene
import MainArene from "./app/pages/Arene/MainArene.jsx";
// User
import MainProfile from "./app/pages/UserProfile/MainProfile.jsx";
// Projets
import MainProjects from "./app/pages/Projects/MainProjects.jsx";
import ProjetSeul from "./app/pages/Projects/ProjetSeul.jsx";
import MyApp from "./app/pages/Projects/Gerer/MyApp.jsx";

function RouterCoder() {
  const [isOnline, setIsOnline] = useState(false);


  useEffect(() => {
    const myStorage = localStorage.getItem("userToken");
    if (myStorage) {
      setIsOnline(true);
    } else {
      setIsOnline(false);
    }
  }, [])

  const updateUser = e => {
    return setIsOnline(true);

  };

  const deconnexionUser = e => {
    localStorage.removeItem("userToken");
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
        <Route exact path="/mon-profile/" render={props => (<MainProfile checkUserStatus={isOnline} onLogoutUser={deconnexionUser} />)} />
        <Route exact path="/projet/:id/gerer" render={props => (<MyApp checkUserStatus={isOnline} onLogoutUser={deconnexionUser} />)} />
        <Route exact path="/projet/:id/" render={props => (<ProjetSeul checkUserStatus={isOnline} onLogoutUser={deconnexionUser} />)} />
        <Route exact path="/projets/" render={props => (<MainProjects checkUserStatus={isOnline} onLogoutUser={deconnexionUser} />)} />
      </div>
    </Router>
  );
}

export default RouterCoder;
