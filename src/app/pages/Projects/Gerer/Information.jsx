import React, {useState} from "react";

// Import Icons
import {IoMdInformationCircle} from "react-icons/io";
import {FaPlus,FaSymfony, FaReact, FaGithub} from "react-icons/fa";

const Information = ({ checkUserStatus: isOnline, onLogoutUser: onLogout }) => {

  let resFrameworkOutils = [
    {id: 1, name: 'symfony'},
    {id: 2, name: 'react'},
    {id: 3, name: 'github'},
    {id: 4, name: 'symfony'},
    {id: 5, name: 'react'},
    {id: 6, name: 'github'},
    {id: 7, name: 'symfony'},
    {id: 8, name: 'react'},
    {id: 9, name: 'github'},
  ];
  let resFonctionsAttendues = [
    {id: 1, title: 'La fonction attendue'},
    {id: 2, title: 'react'},
    {id: 3, title: 'github'},
    {id: 4, title: 'react'},
    {id: 5, title: 'github'},
    {id: 6, title: 'github'},
    {id: 7, title: 'react'},
    {id: 8, title: 'github'},
  ];

  let displayTools = (name) => {

    switch(name){
      case "symfony":
        return <FaSymfony size="1.5em" className="mx-auto" />;
      case "react":
        return <FaReact size="1.5em" className="mx-auto"  />;
      case "angular":
        return <FaGithub size="1.5em" className="mx-auto"  />;
      case "node":
        return <FaGithub size="1.5em" className="mx-auto"  />;
      case "github":
        return <FaGithub size="1.5em" className="mx-auto"  />;
      default:
        return null;
    }

  }

  const getSelectedTools = () => {

    let toolToAdd = document.getElementById('toolsSelect');

    console.log(document.getElementsByName("tools"));

    return toolToAdd 
  }

  const add = (e, name) => {
    console.log(name);
  }

  

  const [frameworksAndTools, setframeworksAndTools] = useState(resFrameworkOutils);;
  const [fonctionsAttendues, setfonctionsAttendues] = useState(resFonctionsAttendues);;

    return (
      <div className="contenu_information d-flex align-items-center flex-column">
        <h2 className="h-10"><IoMdInformationCircle /> Informations</h2>
        <div className="row mx-0 w-100 h-90">

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
                <div className="h-40 d-flex align-items-center flex-column">
                  
                  <p>Frameworks et Outils</p>
                  <div className="row mx-0 w-100 h-30 py-2">
                  <select name="tools" className="form-control rounded-0 col-lg-10 h-100">
                    <option value="symfony">Symfony</option>
                    <option value="react">React</option>
                    <option value="github">Github</option>
                    {/* <option value="audi">Node.js</option>
                    <option value="saab">Bootstrap</option>
                    <option value="fiat">Laravel</option>
                    <option value="audi">Wordpress</option>
                    <option value="audi">Prestashop</option>
                    <option value="saab">Spring</option>
                    <option value="fiat">Ruby on Rails</option> */}
                  </select>

                  <div className="col-lg-2 px-0">
                  <button onClick={(e) => (e,add())} className="btn btn-success rounded-0  m-0 h-100 ml-1 w-100"><FaPlus /></button>
                  </div>
                  </div>
                  <div className="row mx-0 h-50 w-100 mt-1 d-flex justify-content-center custom_scrollbar">
                  {frameworksAndTools.map(frAndTools => {
        return (
          <div className="col-lg-2 px-0 pl-1 h-100 ">
            <div id={frAndTools.id} className="block-dark-hover d-flex flex-column justify-content-between h-100 px-0">
              <div className="px-0 h-100 d-flex flex-column justify-content-center ">
              { displayTools(frAndTools.name) }
              </div>
              <div className="px-0 p-1 d-flex flex-column justify-content-center">
              <button  className="btn btn-danger w-100 mx-0 rounded-0 my-0 w-100"><FaPlus className="align-self-center" /></button>
              </div>
            </div> 
        </div>
        )
        
        
        })}
                  </div>
                </div>
                <div className="h-60 mt-2 d-flex align-items-center flex-column py-2">
                  <p className="h-10 mb-0">Fonctionnalités attendues</p>
                  <div className="row mx-0 w-100 h-15">
                  <div className="col-lg-10 px-0">
                  <input name="cars" className="form-control rounded-0 h-100" />
                  </div>
                  <div className="col-lg-2 px-0 pl-1">
                  <button className="btn btn-success rounded-0 m-0 w-100 h-100 "><FaPlus /></button>
                  </div>
                  </div>

                  <div className="mx-0 h-75 w-100 mt-1 d-flex flex-column justify-content-start custom_scrollbar">
                  {fonctionsAttendues.map(fonctionAttendue => {
        return (
          <div className="px-0 h-100 ">
            <div id={fonctionAttendue.id} className="block-dark-hover d-flex justify-content-between h-100 px-0">
              <div className="px-0 h-100 d-flex flex-column justify-content-center ">
              <h6>{fonctionAttendue.title}</h6>
              </div>
              <div className="px-0 p-1 h-100 d-flex flex-column justify-content-center">
              <button  className="btn btn-danger w-100 mx-0 rounded-0 my-0 h-100"><FaPlus className="align-self-center" /></button>
              </div>
            </div> 
        </div>
        )
        
        
        })} </div>
                </div>
                </div>
              </div>
              <div className="logo d-flex align-items-center justify-content-start flex-column col-lg-6 px-0 mx-0">
              <div className="block-light h-100 w-100 p-2">
                <div className="h-70 pb-2">
                <img src="http://placehold.it/400x400" alt="" className="w-100 h-100" />
                </div>
                <div className="h-15 ">
                <input
                  type="file"
                  name=""
                  id=""
                  accept="image/png, image/jpeg"
                  className="form-control rounded-0"
                />
                </div>
                
                  
                <button className="btn btn-success rounded-0 w-100 h-15 m-0"><h6 className="text-uppercase mb-0">Mettre à Jour</h6></button>
                </div>
              </div>


              </div>



          </div>


        </div>

      </div>
    );
  
}

export default Information;
