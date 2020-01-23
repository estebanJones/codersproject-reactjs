import React, { useState, useEffect } from "react";

// Import Components
import ModalRecruit from "./componentRecrutement/ModalRecruit.jsx";
import ModalEditRecruit from "./componentRecrutement/ModalEditRecruit";

// Import Icons
import { MdCompareArrows } from "react-icons/md";
import { useParams } from "react-router-dom";

const Recrutement = () => {
  const [offer, setOffers] = useState([
    { title: "Super Title", description: "Description", spec: "front" },
    { title: "Super Title", description: "Description", spec: "back" }
  ]);
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
        console.log(data)
      })

    supprCandidat(e, index);

  }


  const suppr = (e, index) => {
    const offerCopy = [...offer];
    offerCopy.splice(index, 1);
    console.log(offerCopy);
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
        console.log(data)

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
      {console.log(candidatTab)}
      <div className="col-lg-6 mx-0">
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
                        Supprimer{" "}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="col-lg-6 mx-0">
        <h2 className="m-2 text-center">Candidature</h2>
        <ul className="row mx-0 h-85 custom_scrollbar">

          {candidatTab.map((candidat, index) => {
            return (
              <div className="col-lg-2 px-0 pr-1 h-35">
                <li id={candidat.id} className="block-dark-hover d-flex flex-column justify-content-center h-100 px-2">
                  <img className="h-50 w-25 mx-auto img-fluid img-circle p-2" />
                  <h6 className="text-center h-25 d-flex flex-column justify-content-center">

                    {candidat.username}</h6>
                  <h6 className="text-center h-25 d-flex flex-column justify-content-center">

                    {candidat.message}</h6>
                  <button className="btn btn-success" onClick={e => acceptCandidat(e, index)}>Accepter</button>
                  <button type="submit" onClick={(e) => supprCandidat(e, index)}
                    className="btn btn-danger w-100 mx-0 rounded-0">Refuser</button>
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
