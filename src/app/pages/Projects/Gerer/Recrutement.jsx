import React, { useState, useEffect } from "react";

// Import Components
import ModalRecruit from "./componentRecrutement/ModalRecruit.jsx";
import ModalEditRecruit from "./componentRecrutement/ModalEditRecruit";

// Import Images
import userImg from "../../../../img/avatars/avatar-footer.png";

// Import Icons
import { MdCompareArrows } from "react-icons/md";
import { useParams } from "react-router-dom";
import { TiCancel } from "react-icons/ti";
import { GoCheck } from "react-icons/go";

const Recrutement = () => {
  const [offer, setOffers] = useState([]);
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputSpec, setInputSpec] = useState("front");
  const [candidatTab, setCandidatTab] = useState([]);
  const projectId = useParams("id").id


  useEffect(() => {
    fetch("http://127.0.0.1:8000/candidat/show/all", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        projectId: projectId
      })
    })
      .then(res => res.json())
      .then(candidats => setCandidatTab(candidats))
  }, [projectId])

  const getSpec = spec => {
    switch (spec) {
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
  };

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

  const acceptCandidat = (e, index) => {

    fetch('http://127.0.0.1:8000/candidat/accept', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        candidatId: candidatTab[index]._id,
        projectId: projectId,
        userId: candidatTab[index].user_id
      })
    })
      .then(res => res.json())
      .then(data => {
      })

    supprCandidat(e, index);

  }


  const suppr = (e, index) => {
    const offerCopy = [...offer];
    offerCopy.splice(index, 1);
    setOffers(offerCopy);
  };

  const supprCandidat = (e, index) => {
    fetch('http://127.0.0.1:8000/candidat/remove', {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        candidatId: candidatTab[index].id
      })
    })
      .then(res => res.json())
      .then(data => {

      })

    fetch("http://127.0.0.1:8000/candidat/show/all", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        projectId: projectId
      })
    })
      .then(res => res.json())
      .then(candidats => setCandidatTab(candidats))
  }




  return (
    <div className="row col-lg-12 mx-0">

      <div className="col-lg-8 border-right border-info mx-0">
        <div className="h-100 d-flex flex-column ">
          <div className="row mx-0">
            <div className="col-lg-3 px-0"></div>
            <div className="col-lg-6 px-0">
              <h2 className="m-2 text-center">
                <MdCompareArrows /> Recrutement
              </h2>
            </div>
            <div className="col-lg-3 px-0 d-flex justify-content-end">
              <ModalRecruit
                // onClick={openningModal}
                // statusModal={statusModal}
                // setStatusModal={setStatusModal}
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
                    <p className="text-center mb-0">
                      {getSpec(currentValue.spec)}
                    </p>
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
                        onClick={e => suppr(index)}
                        className="btn btn-danger rounded-0 w-100 m-0"
                      >
                        <TiCancel />{" "}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="col-lg-4 mx-0">
        <h2 className="m-2 text-center">Candidature</h2>
        <ul className="mt-3 row mx-0 h-85 custom_scrollbar">
          {console.log(candidatTab)}
          {candidatTab.map((candidat, index) => {
            
            return (
              <div className="col-lg-6 px-0 pr-1 h-40">
                <li id={candidat.id} className="block-dark-hover d-flex flex-column justify-content-center h-100 px-2">
                  <img src={userImg} className=" w-25 mx-auto img-fluid img-circle p-2" />
                  <h6 className="text-center h-25 d-flex flex-column justify-content-center">

                    {candidat.username}</h6>
                  <h6 className="text-center h-25 d-flex flex-column justify-content-center">

                    {candidat.message}</h6>
                    <div className="row mx-0">
                  <button className="btn btn-success w-50 mx-0 rounded-0" onClick={e => acceptCandidat(e, index)}><GoCheck /></button>
                  <button type="submit" onClick={(e) => supprCandidat(e, index)}
                    className="btn btn-danger w-50 mx-0 rounded-0"><TiCancel /></button>
                    </div>
                </li>
              </div>
            )


          })}

        </ul>
      </div>
    </div>
  );
};

export default Recrutement;
