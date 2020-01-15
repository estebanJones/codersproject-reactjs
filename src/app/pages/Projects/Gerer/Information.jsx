import React from "react";

// Import Icons
import {IoMdInformationCircle} from "react-icons/io";
import {FaPlus} from "react-icons/fa";


class Information extends React.Component {
  state = {};
  render() {
    return (
      <div className="contenu_information d-flex align-items-center flex-column">
        <h2><IoMdInformationCircle /> Informations</h2>
        <div className="row mx-0 w-100 h-100">

          <div className="col-lg-4 px-0  d-flex flex-column justify-content-center ">

            <div className="block-light p-2 mr-2 h-100 ">
          <div className="d-flex align-items-center flex-column justify-content-start h-25">
              <p>Modifier le titre du projet</p>
              <input type="text" name="" id="" placeholder="Titre..." className="form-control rounded-0 text-center" />
            </div>
            <div className="d-flex align-items-center flex-column justify-content-start h-75 ">
              <p>Description du projet</p>
              <textarea
                name=""
                id=""
                rows=""
                placeholder="Description..."
                className="form-control rounded-0 h-100 text-center "  
              ></textarea>
            </div>
            </div>
          </div>
          <div className="col-lg-8 px-0 h-100 d-flex flex-column justify-content-start">

            <div className="row mx-0 h-100">
              <div className="langue d-flex flex-column justify-content-start col-lg-6 px-0 mx-0">
                <div className="block-light mr-2 h-100 p-2">
                <div className="h-30 d-flex align-items-center flex-column">
                  
                  <p>Frameworks et Outils</p>
                  <div className="row mx-0 w-100">
                  <select name="cars" className="form-control rounded-0 col-lg-10">
                    <option value="volvo">Symfony</option>
                    <option value="saab">React</option>
                    <option value="fiat">Angular</option>
                    <option value="audi">Node.js</option>
                    <option value="saab">Bootstrap</option>
                    <option value="fiat">Laravel</option>
                    <option value="audi">Wordpress</option>
                    <option value="audi">Prestashop</option>
                    <option value="saab">Spring</option>
                    <option value="fiat">Ruby on Rails</option>
                  </select>
                  <div className="col-lg-2 px-0">
                  <button className="btn btn-success rounded-0 w-100 m-0 h-100 ml-1"><FaPlus /></button>
                  </div>
                  </div>
                </div>
                <div className="h-75 mt-4 d-flex align-items-center flex-column">
                  <p>Fonctionnalités attendues</p>
                  <div className="row mx-0 w-100">
                  <div className="col-lg-10 px-0">
                  <input name="cars" className="form-control rounded-0" />
                  </div>
                  <div className="col-lg-2 px-0">
                  <button className="btn btn-success rounded-0 w-100 m-0 h-100 ml-1"><FaPlus /></button>
                  </div>
                  </div>
                </div>
                </div>
              </div>
              <div className="logo d-flex align-items-center justify-content-start flex-column col-lg-6 px-0 mx-0">
              <div className="block-light h-100 p-2">
                <img src="http://placehold.it/450x450" alt="" />
                <input
                  type="file"
                  name=""
                  id=""
                  accept="image/png, image/jpeg"
                  className="form-control rounded-0"
                />
                </div>
              </div>


              </div>
              <div className="row mx-0 h-100">
              <div className="langue d-flex flex-column justify-content-start col-lg-12 px-0 mx-0">
                <div className="block-light mt-2 h-100 p-2">
                  <button className="btn btn-success rounded-0 w-100 h-100"><h6 className="text-uppercase mb-0">Mettre à Jour</h6></button>
                </div>
              </div>
              </div>


          </div>


        </div>

      </div>
    );
  }
}

export default Information;