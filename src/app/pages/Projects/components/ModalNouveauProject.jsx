import React, {useState} from 'react';
import {  MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

// Import Icons
import {FaPlusCircle} from "react-icons/fa";
import {FaProjectDiagram} from "react-icons/fa";

function ModalPage(props){

  const [modal1, setModal1] = useState(false);
  const [titleValue, setTitleValue] = useState("");
  const [descValue, setDescValue] = useState("");

  const toggle = (e) => {
    setModal1(true);
  }

  const closeModal = e => {
    setModal1(false);
  }

  const stopSubmit = e => {
    e.preventDefault()
  }
  const createProject = e => {
    fetch('http://127.0.0.1:8000/api/user/create_project', {
      method : 'POST',
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify({
        title : titleValue,
        description : descValue,
        userId : "1"
    })
    })
          .then(res => res.json())
          .then(data => console.log(data))

    // CREER LE FETCH POUR AJOUTER LE PROJET A LA BDD
    console.log("salut");
    // DANS LE CONSOLE LOG REPRESENTE LES VALEURS CATCHER PAR LES INPUTS
    console.log(titleValue, descValue);
    // FERME LE MODAL
    setModal1(false);
  }

return (
    <div className="h-100">
      <MDBBtn className="btn block-dark-hover text-white w-100 p-4 h-100 m-0 rounded-0" onClick={e => toggle(e)}><FaPlusCircle size="2em" className="mr-2" /> Créer un nouveau Projet</MDBBtn>
      <MDBModal isOpen={modal1} fullHeight position="left"  >
        <MDBModalHeader><FaProjectDiagram /> Créer un Projet</MDBModalHeader>
        <MDBModalBody className="p-2">
        <h5 className="text-center mt-4 mb-3">Démarrez un nouveau projet.</h5>
        <p className="text-center mb-4">Ouvrez des postes, gérez votre planning de tâches et plus encore !</p>
        <form onSubmit={(e) => stopSubmit(e)}>
        <h5 className="text-center">Titre</h5>
        <input
        onChange={({ currentTarget: { value } }) => setTitleValue(value) }
        className="form-control w-100 rounded-0"
        type="text"
        />
        <h5 className="text-center mt-4">Description</h5>
        <textarea
          className="form-control w-100 rounded-0"
          rows="5"
          onChange={({currentTarget: {value}}) => setDescValue(value)}>
        </textarea>

        <h5 className="text-center mt-4">Image</h5>

        <div className="d-flex justify-content-center col-12" >
          <img src="https://place-hold.it/200x200" alt="img"/>
        </div>
        <input
        className="form-control w-100 rounded-0 mt-4"
        type="file"/>
        </form>

        </MDBModalBody>
          <MDBModalFooter className="row mx-0">
            <MDBBtn onClick={(e) => closeModal(e)} color="danger" className="rounded-0 w-50 m-0">Fermer</MDBBtn>
            <MDBBtn onClick={(e) => createProject(e)} color="success" className="rounded-0 w-50 m-0" type="submit">Créer le Projet</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </div>
    );

  }


export default ModalPage;