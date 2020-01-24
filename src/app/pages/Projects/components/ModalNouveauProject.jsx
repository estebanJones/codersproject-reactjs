import React, { useState } from 'react';
import {  MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

// Import Icons
import {FaPlusCircle} from "react-icons/fa";
import {FaProjectDiagram} from "react-icons/fa";

function ModalPage(props) {
  const [statusModal, setStatusModal ] = useState(false);
  const [inputTitle, setInputTitle] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  // const [inputSpec, setInputSpec] = useState("");
  const [userId, setUserId] = useState(localStorage.getItem("userId"));


  const closeModal = () => {
    setStatusModal(false);
  }

  const openModal = () => {
    setStatusModal(true);
  }

  const stopSubmit = e => {
    e.preventDefault()
  }

function ajouterOffre(e) {
  fetch("http://127.0.0.1:8000/project/create_project", {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(
      {
        user_id: userId,
        title: inputTitle,
        description: inputDesc
      }
    )
  })
    .then(res => res.json())
    .then(data => {})

    fetch('http://127.0.0.1:8000/project/show_all_project', {
        method : 'GET',
        headers: {"Content-Type": "application/json" },
      })
        .then(res =>res.json())
        .then(data => { props.listPro(data.projects)})

        setStatusModal(false)
}

        return (
            <div className="h-100">
              <MDBBtn className="btn block-dark-hover text-white w-100 p-4 h-100 m-0 rounded-0" onClick={openModal}><FaPlusCircle size="2em" className="mr-2" /> Créer un nouveau Projet</MDBBtn>
              <MDBModal isOpen={statusModal}  fullHeight position="left"  >
                <MDBModalHeader ><FaProjectDiagram /> Créer un Projet</MDBModalHeader>
                <MDBModalBody className="p-2">
                <h5 className="text-center mt-4 mb-3">Démarrez un nouveau projet.</h5>
                <p className="text-center mb-4">Ouvrez des postes, gérez votre planning de tâches et plus encore !</p>
                <form onSubmit={(e) => stopSubmit(e)}>
                  <h5 className="text-center">Titre</h5>
                  <input

                  className="form-control w-100 rounded-0"
                  type="text"
                  onChange={({currentTarget: {value}}) => setInputTitle(value)}
                  />
                  <h5 className="text-center mt-4">Description</h5>
                  <textarea
                  className="form-control w-100 rounded-0"
                  rows="5"
                  onChange={({currentTarget: {value}}) => setInputDesc(value)}></textarea>


                  <h5 className="text-center mt-4">Image</h5>
                    <div className="d-flex justify-content-center col-12" >
                      <img src="https://place-hold.it/200x200" alt="img"/>
                      </div>
                      <input
                      className="form-control w-100 rounded-0 mt-4"
                      type="file"
                      />
                      </form>
                          </MDBModalBody>
                            <MDBModalFooter className="row mx-0">
                              <MDBBtn color="danger" onClick={closeModal} className="rounded-0 w-50 m-0">Fermer</MDBBtn>
                              <MDBBtn color="success" className="rounded-0 w-50 m-0" onClick={ajouterOffre} >Créer le Projet</MDBBtn>
                            </MDBModalFooter>
                        </MDBModal>
                    </div>
            );
}

export default ModalPage;