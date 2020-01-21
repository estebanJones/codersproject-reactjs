import React from "react";
import ArenaBlock from "./ArenaBlock";
import ConnexionBlock from "./ConnexionBlock";
import LoggedUser from "./LoggedUser";
import ProjectBlock from "./ProjectBlock";
import Header from "../../base/Header/Header.jsx";
import Footer from "../../base/Footer/Footer.jsx";
import ThemeUserContextProvider from "../../contexts/ThemeContext";

function MainHome(props) {

  let isOnline = props.checkUserStatus;
  let onLogout = props.onLogoutUser;
  let updateUser = props.updateUserToHome

  if (isOnline === false) {
    var blockState = <ConnexionBlock updateUser={updateUser} />
  } else if (isOnline === true) {
    var blockState = <LoggedUser />
  }

  return (
    <div id="wrapper">
      <ThemeUserContextProvider>
        <Header
          checkUserStatus={isOnline}
          onLogoutUser={onLogout} />
        <main className="bg_home">
          <div className="allBlock row w-100 d-flex justify-content-lg-around px-0 mx-0 col-lg-12">
            <ArenaBlock />
            {blockState}
            <ProjectBlock />
          </div>
        </main>

        <Footer isOnline={props.checkUserStatus} />
      </ThemeUserContextProvider>
    </div>
  );

}

export default MainHome;
