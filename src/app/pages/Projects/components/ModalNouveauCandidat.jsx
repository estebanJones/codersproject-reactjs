import React, { useState } from 'react';
import {  MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { useParams } from "react-router-dom";

// Import Icons
import {FaPlusCircle} from "react-icons/fa";
import {FaProjectDiagram} from "react-icons/fa";

function ModalPage(props) {
  const [statusModal, setStatusModal ] = useState(false);
  const [inputMessage, setInputMessage] = useState("");

  const userId = localStorage.getItem("userId");
  const { id } = useParams();


  const closeModal = () => {
    setStatusModal(false);
  }

  const openModal = () => {
    setStatusModal(true);
  }

  const stopSubmit = e => {
    e.preventDefault()
  }

function createCandidat(e) {
  fetch("http://127.0.0.1:8000/candidat/new", {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(
      {
        userId: userId,
        projectId: id,
        message: inputMessage
      }
    )
  })
    .then(res => res.json())
    .then(data => {
      setStatusModal(false);
    })

}

        return (
            <div className="h-100">
              <MDBBtn className="block-dark-hover text-white w-100 p-4 h-100 m-0 rounded-0" onClick={openModal}><FaPlusCircle size="2em" className="mr-2" /> Candidater</MDBBtn>
              <MDBModal isOpen={statusModal}  fullHeight position="left"  >
                <MDBModalHeader ><FaProjectDiagram /> Candidater pour un Projet</MDBModalHeader>
                <MDBModalBody className="p-2">
                <h5 className="text-center mt-4 mb-3">Candidater pour ce projet.</h5>
                <p className="text-center mb-4">Prouvez vos compétences en intégrant ce projet !</p>
                <form onSubmit={(e) => stopSubmit(e)}>

                  <h5 className="text-center mt-4">Message de Candidature</h5>
                  <textarea
                  className="form-control w-100 rounded-0"
                  rows="5"
                  onChange={({currentTarget: {value}}) => setInputMessage(value)}></textarea>


                    <div className="d-flex justify-content-center col-12" >
                      </div>
                      </form>
                          </MDBModalBody>
                            <MDBModalFooter className="row mx-0">
                              <MDBBtn color="danger" onClick={closeModal} className="rounded-0 w-50 m-0">Fermer</MDBBtn>
                              <MDBBtn color="success" className="rounded-0 w-50 m-0" onClick={createCandidat} >Candidater</MDBBtn>
                            </MDBModalFooter>
                        </MDBModal>
                    </div>
            );
}

export default ModalPage;