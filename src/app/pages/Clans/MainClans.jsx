import React from "react";

// Import Structure
import Header from "../../base/Header/Header.jsx";
import Footer from "../../base/Footer/Footer.jsx";

// Import Icons
import { GiRunningNinja } from "react-icons/gi";


function MainClans(props) {

  var isOnline = props.checkUserStatus;
  var onLogout = props.onLogoutUser;


  return (
    <div id="wrapper">
      <Header 
          checkUserStatus={isOnline}
          onLogoutUser={onLogout} />
      <main className="bg_home">
        <div className="allBlock row w-100 d-flex justify-content-lg-around px-0 mx-0 col-lg-12">
        <div className="w-100 mx-4 block-dark-hover d-flex flex-column justify-content-center" >
            <GiRunningNinja className="display-1 mx-auto" />
            <h3 className="text-center">Coming Soon ...</h3>
        </div>
        </div>
      </main>

      <Footer isOnline={props.checkUserStatus} />
    </div>
  );

}

export default MainClans;
