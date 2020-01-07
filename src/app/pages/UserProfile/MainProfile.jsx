import React from "react";

// Import Structure
import Header from "../../base/Header/Header.jsx";
import Footer from "../../base/Footer/Footer.jsx";

// Import Images
import userAvatar from "../../../img/avatars/avatar.png";
import badge1 from "../../../img/badges/badge-1.png";
import badge2 from "../../../img/badges/badge-2.png";

// Import Icons
import { FaPenSquare } from "react-icons/fa";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";

function MainProfile(props) {

  var isOnline = props.checkUserStatus;
  var onLogout = props.onLogoutUser;

  

  return (
    <div id="wrapper">
      <Header 
          checkUserStatus={isOnline}
          onLogoutUser={onLogout} />
      <main className="bg_userProfile">
        <div className="allBlock row w-100 d-flex justify-content-lg-around px-0 mx-0 col-lg-12">
        <div  className="imgUser py-4 px-4 col-lg-4 ">
                    <div className="d-flex flex-column ">
                        <img src={userAvatar} className="img-fluid mx-auto mt-5" />
                        <canvas id="doughnutChart"></canvas>
                        </div>
                        </div>
        <div className="infosUser py-4 px-4 col-lg-8 d-flex flex-column justify-content-center">
                        <h1 className="text-center text-uppercase mb-4">Élo la Mama</h1>

                        
                    <div className="descriptionUser block-dark p-2 d-flex flex-column px-5 ">
                        <h5 className="text-center w-100"><strong>Description</strong><FaPenSquare /></h5>
                        
                        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum itaque hic eos officia in dolorem officiis veritatis deserunt doloremque. Sit animi dolore soluta repudiandae, reprehenderit aliquid fugiat recusandae odit ipsumorem ipsum dolor sit amet consectetur adipisicing elit. Earum itaque hic eos officia in dolorem officiis veritatis deserunt doloremque. Sit animi dolore soluta repudiandae, reprehenderit aliquid fugiat recusandae odit ipsum.</p>
                        </div>

                        <div className="row mx-0 mt-2 h-25">
                            <div className="px-0 pr-1 col-6">
                        <div className="descriptionUser block-dark h-100 p-2 d-flex flex-column px-5 ">
                        <h5 className="text-center w-100"><strong>Spécialité</strong><FaPenSquare /></h5>
                        <div className="row mx-0 d-flex justify-content-around pt-3">
                           <div className="d-flex justify-content-center">
                               <IoIosCheckmarkCircle />
                               <h5 className="ml-2 my-auto">Front-End</h5>
                           </div>
                           <div className="d-flex justify-content-center">
                               <MdRadioButtonUnchecked />
                               <h5 className="ml-2 my-auto">Back-End</h5>
                           </div>
                           <div className="d-flex justify-content-center">
                               <MdRadioButtonUnchecked />
                               <h5 className="ml-2 my-auto">Management</h5>
                           </div>
                        </div>
                        </div>
                        </div>
                        <div className="descriptionUser block-dark col-6  p-2 d-flex flex-column px-5 ">
                        <h5 className="text-center w-100"><strong>Badges</strong><FaPenSquare /></h5>
                        <div className="row mx-0 d-flex justify-content-around">
                           <div className="d-flex justify-content-center">
                           <img src={badge1} className="img-fluid" />
                           </div>
                           <div className="d-flex justify-content-center">
                           <img src={badge2} className="img-fluid" />
                           </div>
                           <div className="d-flex justify-content-center">
                           <img src={badge1} className="img-fluid" />
                           </div>
                           <div className="d-flex justify-content-center">
                           <img src={badge2} className="img-fluid" />
                           </div>
                        </div>
                        
                        </div>
                        </div>


                        
                        <div className="row mx-0 mt-2 h-25 ">
                            <div className="px-0 pr-1 col-6 ">
                        <div className="descriptionUser block-dark h-100 p-2 d-flex flex-column px-5 ">
                        <h5 className="text-center w-100"><strong>Stats</strong><FaPenSquare /></h5>
                        
                        <p className="text-center mt-3">Aucune statistique pour le moment.</p>
                        </div>
                        </div>
                        <div className="descriptionUser block-dark col-6  p-2 d-flex flex-column px-5 ">
                        <h5 className="text-center w-100"><strong>Historique de l'Arène</strong><FaPenSquare /></h5>
                        
                        <p className="text-center mt-3">Aucune battle terminée pour le moment.</p>
                        </div>
                        </div>


                        </div>
        </div>
      </main>

      <Footer isOnline={props.checkUserStatus} />
    </div>
  );

}

export default MainProfile;
