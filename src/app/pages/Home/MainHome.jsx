import React from "react";
import ArenaBlock from "./ArenaBlock";
import ConnexionBlock from "./ConnexionBlock";
import LoggedUser from "./LoggedUser";
import ProjectBlock from "./ProjectBlock";
import Header from "../../base/Header/Header.jsx";
import Footer from "../../base/Footer/Footer.jsx";

function MainHome(props) {

  let isOnline = props.checkUserStatus;
  var onLogout = props.onLogoutUser;



  if(isOnline === false) {
    var blockState = <ConnexionBlock />
  } else if(isOnline === true){
var blockState = <LoggedUser />
  }

  return (
    <div id="wrapper">
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
    </div>
  );

}

export default MainHome;
