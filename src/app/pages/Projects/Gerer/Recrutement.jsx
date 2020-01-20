import React, { useState } from "react";


// Import Components
import ModalRecruit from "./componentRecrutement/ModalRecruit.jsx";
import ModalEditRecruit from "./componentRecrutement/ModalEditRecruit";

// Import Icons
import {MdCompareArrows} from "react-icons/md";
import { useEffect } from "react";


const Recrutement = () => {  

  const [offer, setOffers] = useState([
    {title: 'Super Title', description: 'Description', spec: 'front'},
    {title: 'Super Title', description: 'Description', spec: 'back'}
  ]);
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputSpec, setInputSpec] = useState("front");

  
  // useEffect(() => {
  //   fetchOffers(); 
  // }, [])

  // const fetchOffers = () => {
    
  //   fetch('http://127.0.0.1:8000/api/user/create_project', {
  //     method : 'POST',
  //     headers: {"Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       projectID : titleValue,
  //       description : descValue,
  //       spec: specValue,
  //       userId : "1"
  //   })
  //   })
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  // }



  const getSpec = (spec) => {

    switch(spec){
      case "front":
      return "Front-End";
      case "back":
      return "Back-End";
      case "graph":
      return "Graphisme";
      case "manage":
      return "Management";
      default:
        return null;
    }

  }

  const add = (title, desc, spec) => {

    setOffers([
      ...offer,
      {
        title: title,
        description: desc,
        spec: spec
      }
    ]);
    setInputTitle("");
    setInputDescription(""); 

  };

  const modifier = () => {




    setOffers([
      ...offer,
      {
        title: inputTitle,
        description: inputDescription,
        spec: inputSpec
      }
    ]);
    setInputTitle("");
    setInputDescription("");
    setInputSpec("");
  };

  const suppr = (index) => {

    const offerCopy = [...offer];

    offerCopy.splice(index, 1);

    console.log(offerCopy);

    setOffers(offerCopy);
  };

  return (

<div className="h-100 d-flex flex-column ">
        <div className="row mx-0">
          <div className="col-lg-3 px-0">
            
          </div>
          <div className="col-lg-6 px-0">
          <h2 className="m-2 text-center"><MdCompareArrows /> Recrutement</h2>
          </div>
          <div className="col-lg-3 px-0 d-flex justify-content-end">
          <ModalRecruit
          ajouterOffre={add}
          modalInputTitle={setInputTitle}
          modalInputDesc={setInputDescription}
          modalInputSpec={setInputSpec}
          />

        </div>
      </div>

      <div id="poste" className="w-100 custom_scrollbar mt-2 pr-1">
        {offer.map((currentValue, index) => {
          return (
            <div className="poste d-flex flex-column justify-content-between">
              <div className="d-flex flex-column justify-content-center h-100">
              <h5 className="text-center">{currentValue.title}</h5>
                <p className="text-center mb-0">{getSpec(currentValue.spec)}</p>
                
              </div>
              
              <div className="row mx-0">
                <div className="col-lg-6 px-0  w-100">
                <ModalEditRecruit
                modifierOffre={modifier}
                modalInputTitle={setInputTitle}
                modalInputDesc={setInputDescription}
                modalInputSpec={setInputSpec}

                />
                </div>
                <div className="col-lg-6 px-0 w-100">
                <button
                onClick={(e) => suppr(index)}
                className="btn btn-danger rounded-0 w-100 m-0">
                Supprimer </button>
                </div>
              </div>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recrutement;
