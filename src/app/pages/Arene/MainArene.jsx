import React from "react";

// Import Structure
import Header from "../../base/Header/Header.jsx";
import Footer from "../../base/Footer/Footer.jsx";

// Import Images
import arena from "../../../img/arena.png";

function MainArene(props) {

    var isOnline = props.checkUserStatus;
    var onLogout = props.onLogoutUser;
    return (
        <div id="wrapper">
                <Header 
                    checkUserStatus={isOnline}
                    onLogoutUser={onLogout} />
                <main className="bg_arene">
                    <div className="allBlock row w-100 d-flex justify-content-lg-around px-0 mx-0 col-lg-12">
                        <div className="py-4 px-4 col-lg-7">
                        <h1 className="text-center">Battle à venir</h1>
                    <div className="block-dark p-5 d-flex flex-column ">
                        <img className="p-5 d-flex mx-auto w-50 " src={arena} />
                        <h4 className="text-center"><em>Coming Soon ...</em></h4>
                        </div>
                        </div>

        {/* Single List Result */}
        <div className="py-4 px-4 col-lg-4">
        <h1 className="text-center">Battles Terminées</h1> 
        <div className="single-list-result block-dark custom_scrollbar">
        <div className="row mx-0  block-dark-hover">
            <div className="d-flex justify-content-center col-2">
                test
            </div>
            <div className="d-flex justify-content-center col-10">
            test
            </div>
            
        </div>
        <div className="row mx-0  block-dark-hover">
            <div className="d-flex justify-content-center col-2">
                test
            </div>
            <div className="d-flex justify-content-center col-10">
            test
            </div>
            
        </div>
        </div>
        </div>

            </div>
          </main>
    
          <Footer isOnline={props.checkUserStatus} />
        </div>
      );

}

export default MainArene;