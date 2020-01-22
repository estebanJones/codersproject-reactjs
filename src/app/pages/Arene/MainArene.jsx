import React from "react";

// Import Structure
import Header from "../../base/Header/Header.jsx";
import Footer from "../../base/Footer/Footer.jsx";

// Import Images
import arena from "../../../img/arena.png";
import battleImg from "../../../img/logo.png";

// Import Icons
import { GiBattleAxe } from "react-icons/gi";

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
                    <div className="mainAreneButton block-dark p-5 d-flex flex-column ">
                        <img className="p-5 d-flex mx-auto w-50 " src={arena} alt="img" />
                        <h4 className="text-center"><em>Coming Soon ...</em></h4>
                        </div>
                        </div>

        {/* Single List Result */}
        <div className="py-4 px-4 col-lg-4">
        <h1 className="text-center">Battles Terminées</h1> 
        <div className="battle-list-block block-dark custom_scrollbar">

        {/* Single Result */}
        <div className="row mx-0 single-list-result block-dark-hover">
            <div className="d-flex justify-content-center col-3">
            <img src={battleImg} className="h-75 my-auto d-flex justify-content-center" alt="img"/>
            </div>
            <div className="d-flex flex-column justify-content-center col-9">
            <div class="row mx-auto pt-3">
                <div class="col-2">
                <GiBattleAxe />
                </div>
                <div class="col-10">
                <h5>HTML / CSS</h5>
                </div>
            </div>
            <p className="text-center"> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            
        </div>
        {/* Single Result */}
        <div className="row mx-0 single-list-result block-dark-hover">
            <div className="d-flex justify-content-center col-3">
            <img src={battleImg} className="h-75 my-auto d-flex justify-content-center" alt="img" />
            </div>
            <div className="d-flex flex-column justify-content-center col-9">
            <div class="row mx-auto pt-3">
                <div class="col-2">
                <GiBattleAxe />
                </div>
                <div class="col-10">
                <h5>HTML / CSS</h5>
                </div>
            </div>
            <p className="text-center"> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            
        </div>
        {/* Single Result */}
        <div className="row mx-0 single-list-result block-dark-hover">
            <div className="d-flex justify-content-center col-3">
            <img src={battleImg} className="h-75 my-auto d-flex justify-content-center" alt="img"/>
            </div>
            <div className="d-flex flex-column justify-content-center col-9">
            <div class="row mx-auto pt-3">
                <div class="col-2">
                <GiBattleAxe />
                </div>
                <div class="col-10">
                <h5>HTML / CSS</h5>
                </div>
            </div>
            <p className="text-center"> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            
        </div>
        {/* Single Result */}
        <div className="row mx-0 single-list-result block-dark-hover">
            <div className="d-flex justify-content-center col-3">
            <img src={battleImg} className="h-75 my-auto d-flex justify-content-center" alt="img"/>
            </div>
            <div className="d-flex flex-column justify-content-center col-9">
            <div class="row mx-auto pt-3">
                <div class="col-2">
                <GiBattleAxe />
                </div>
                <div class="col-10">
                <h5>HTML / CSS</h5>
                </div>
            </div>
            <p className="text-center"> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            
        </div>
        {/* Single Result */}
        <div className="row mx-0 single-list-result block-dark-hover">
            <div className="d-flex justify-content-center col-3">
            <img src={battleImg} className="h-75 my-auto d-flex justify-content-center" alt="img"/>
            </div>
            <div className="d-flex flex-column justify-content-center col-9">
            <div class="row mx-auto pt-3">
                <div class="col-2">
                <GiBattleAxe />
                </div>
                <div class="col-10">
                <h5>HTML / CSS</h5>
                </div>
            </div>
            <p className="text-center"> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            
        </div>
        {/* Single Result */}
        <div className="row mx-0 single-list-result block-dark-hover">
            <div className="d-flex justify-content-center col-3">
            <img src={battleImg} className="h-75 my-auto d-flex justify-content-center" alt="img"/>
            </div>
            <div className="d-flex flex-column justify-content-center col-9">
            <div class="row mx-auto pt-3">
                <div class="col-2">
                <GiBattleAxe />
                </div>
                <div class="col-10">
                <h5>HTML / CSS</h5>
                </div>
            </div>
            <p className="text-center"> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            
        </div>
        {/* Single Result */}
        <div className="row mx-0 single-list-result block-dark-hover">
            <div className="d-flex justify-content-center col-3">
            <img src={battleImg} className="h-75 my-auto d-flex justify-content-center" alt="img"/>
            </div>
            <div className="d-flex flex-column justify-content-center col-9">
            <div class="row mx-auto pt-3">
                <div class="col-2">
                <GiBattleAxe />
                </div>
                <div class="col-10">
                <h5>HTML / CSS</h5>
                </div>
            </div>
            <p className="text-center"> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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