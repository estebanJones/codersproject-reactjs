import React from "react";
import $ from "jquery";
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
import CheckBoxSpeciality from "./CheckBoxSpeciality.jsx";

function MainProfile(props) {

  var isOnline = props.checkUserStatus;
  var onLogout = props.onLogoutUser;

  const transformEditDescrib = () => {
    $('.inputDescrib').replaceWith(function(){
      return $('<input/>', {
        'class': "inputDescription",
        text:"text"
      });
   })
  }

  const handleChange = (e) => {
    // console.log(e.currentTarget.value);
  }

  const transformEditCheckbox = () => {
    $('.checkBoxForm').replaceWith(function(){
      return $(<CheckBoxSpeciality />, {
        className:"row mx-0 d-flex justify-content-around pt-3",
      });
   })
  }

  const submitChange = (e) => {
    console.log("dans submit");
    e.preventDefault();

    const newDescrib = $('.inputDescription').val();

    $('.inputDescription').replaceWith(function(){
      return $('<p/>', {
        'class': "inputDescrib",
        text: newDescrib
      });
    })
  }
  
  const onSubmitEditUser = () => {


  }
  

  return (
    <div id="wrapper">
      <Header 
          checkUserStatus={isOnline}
          onLogoutUser={onLogout} 
      />

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

                  <form onSubmit={onSubmitEditUser}>
                    <div className="descriptionUser block-dark p-2 d-flex flex-column px-5">
                      <h5 className="text-center w-100"><strong>Description</strong><FaPenSquare onClick={transformEditDescrib}/></h5>
                      <p className="text-center inputDescrib">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum itaque hic eos offi
                      cia in dolorem officiis veritatis deserunt doloremque. Sit animi dolore soluta repudiandae, reprehenderit aliquid fugiat recusa
                      ndae odit ipsumorem ipsum dolor sit amet consectetur adipisicing elit. Earum itaque hic eos officia in dolorem officiis veritatis d
                      eserunt doloremque. Sit animi dolore soluta repudiandae, reprehenderit aliquid fugiat recusandae odit ipsum.</p>
                    </div>
                    <div className="row mx-0 mt-2 h-25">
                      <div className="px-0 pr-1 col-6">
                        <div className="descriptionUser block-dark h-100 p-2 d-flex flex-column px-5 ">
                          <h5 className="text-center w-100"><strong>Spécialité</strong><FaPenSquare onClick={transformEditCheckbox}/></h5>
                            <div className="row mx-0 d-flex justify-content-around pt-3 checkBoxForm">
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
                               <div className="form-check">
                                  <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                                  <img src={badge1} className="img-fluid" />
                               </div>
                               <div className="d-flex justify-content-center">
                                  <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck2"></input>
                                    <img src={badge2} className="img-fluid" />
                                  </div>
                                </div>
                                <div className="d-flex justify-content-center">
                                  <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck3"></input>
                                    <img src={badge1} className="img-fluid" />
                                  </div>
                                </div>
                                <div className="d-flex justify-content-center">
                                  <input className="form-check-input mr-2" type="checkbox" value="" id="defaultCheck4"></input>
                                  <img src={badge2} className="img-fluid" />
                                </div>
                              </div>
                          </div>
                        </div>
                      </div>
                    <button onClick={(e) => submitChange(e)} type="submit" className="btn btn-success">Valider les modifications</button>

                <div className="row mx-0 mt-2 h-25 ">
                    <div className="px-0 pr-1 col-6 ">
                      <div className="descriptionUser block-dark h-100 p-2 d-flex flex-column px-5 ">
                        <h5 className="text-center w-100"><strong>Projets Terminés</strong></h5>
                
                        <p className="text-center mt-3">Aucun projet terminé pour le moment.</p>
                      </div>
                    </div>
                    <div className="descriptionUser block-dark col-6  p-2 d-flex flex-column px-5 ">
                      <h5 className="text-center w-100"><strong>Historique de l'Arène</strong></h5>
                
                      <p className="text-center mt-3">Aucune battle terminée pour le moment.</p>
                    </div>
                </div>
                         
                </form> 
                          
          </div>
        </div>
      </main>

      <Footer isOnline={props.checkUserStatus} />
    </div>
  );

}

export default MainProfile;
