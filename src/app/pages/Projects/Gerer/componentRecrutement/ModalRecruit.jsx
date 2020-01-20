import React, {useState} from 'react';
import {  MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

// Import Icons
import {IoMdAdd} from "react-icons/io";
import {MdCompareArrows} from "react-icons/md";

function ModalRecruit(props){

  const [modal1, setModal1] = useState(false);
  const [titleValue, setTitleValue] = useState("");
  const [descValue, setDescValue] = useState("");
  const [specValue, setSpecValue] = useState("front");

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

    
    props.ajouterOffre(titleValue, descValue, specValue);


    // fetch('http://127.0.0.1:8000/api/user/create_project', {
    //   method : 'POST',
    //   headers: {"Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     title : titleValue,
    //     description : descValue,
    //     spec: specValue,
    //     userId : "1"
    // })
    // })
    //       .then(res => res.json())
    //       .then(data => console.log(data))

   
    setModal1(false);
  }
return (
  <div className="h-100">
  <MDBBtn className="rounded-0 mx-0 p-3" color="success" onClick={e => toggle(e)}><IoMdAdd /></MDBBtn>
  <MDBModal isOpen={modal1} fullHeight position="right"  >
    <MDBModalHeader><MdCompareArrows /> Ajouter une offre</MDBModalHeader>
    <MDBModalBody>
    <h5 className="text-center mt-4 mb-3">Déposez une offre de Recrutement pour votre projet.</h5>
    <p className="text-center mb-4">Les Coders pourront consulter cette offre et y postuler en cas d'intérêt.</p>
    <form onSubmit={(e) => stopSubmit(e)}>
<h5 className="text-center">Titre du Poste</h5>
<input

className="form-control w-100 rounded-0 m-2"
type="text"
onChange={({ currentTarget: { value } }) => setTitleValue(value) }
/>
<h5 className="text-center">Description</h5>
<textarea  
className="form-control w-100 rounded-0 m-2"
onChange={({currentTarget: {value}}) => setDescValue(value)}></textarea>
<h5 className="text-center">Spécialisation</h5>
<select
className="form-control w-100 rounded-0 m-2"
onChange={({ currentTarget: { value } }) => setSpecValue(value) }
>

<option value="front">Front-End</option>
<option value="back">Back-End</option> 
<option value="graph">Graphisme</option>
<option value="manage">Management</option>
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


export default ModalRecruit;
