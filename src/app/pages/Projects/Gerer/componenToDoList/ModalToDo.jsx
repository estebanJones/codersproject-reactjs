import React, {useState} from 'react';
import {  MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

// Import Icons
import {IoMdAdd} from "react-icons/io";
import {MdCompareArrows} from "react-icons/md";

function ModalToDo(props){

  const [modal1, setModal1] = useState(false);
  const [titleValue, setTitleValue] = useState("");
  const [importanceValue, setImportanceValue] = useState("low");

  const toggle = (e) => {
    setModal1(true);
  }

  const closeModal = e => {
    setModal1(false);
  }

  const stopSubmit = e => {
    e.preventDefault()
  }

  const createOffer = e => {

    props.ajouterOffre(titleValue, importanceValue);



    setModal1(false);

  }

return (
  <div className="h-100">
  <MDBBtn className="rounded-0 mx-0 p-3" color="success" onClick={e => toggle(e)}><IoMdAdd /></MDBBtn>
  <MDBModal isOpen={modal1} fullHeight position="right"  >
    <MDBModalHeader><MdCompareArrows /> Ajouter une tâche à la liste</MDBModalHeader>
    <MDBModalBody>
    <h5 className="text-center mt-4 mb-3">Ajoutez une nouvelle tâche à votre équipe de projet.</h5>
    <p className="text-center mb-4">Votre équipe de développement pourra consulter ces tâches et se les approprier.</p>
    <form onSubmit={(e) => stopSubmit(e)}>
<h5 className="text-center">Titre de la Tâche</h5>
<input

className="form-control w-100 rounded-0 m-2"
type="text"
onChange={({ currentTarget: { value } }) => setTitleValue(value) }
/>

<h5 className="text-center">Importance</h5>
<select
className="form-control w-100 rounded-0 m-2"
onChange={({ currentTarget: { value } }) => setImportanceValue(value) }
>

<option value="low">Faible</option>
<option value="medium">Moyenne</option> 
<option value="hard">Forte</option>
</select>

 </form>
    </MDBModalBody>
    <MDBModalFooter className="row mx-0">
      <MDBBtn color="danger" onClick={(e) => closeModal(e)} className="rounded-0 w-50 m-0">Fermer</MDBBtn>
      <MDBBtn color="success" onClick={(e) => createOffer(e)} className="rounded-0 w-50 m-0">Valider offre</MDBBtn>
    </MDBModalFooter>
  </MDBModal>
  </div>
    );

  }


export default ModalToDo;
