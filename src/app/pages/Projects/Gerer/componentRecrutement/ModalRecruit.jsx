import React, { useState } from 'react';
import {  MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

// Import Icons
import {IoMdAdd} from "react-icons/io";
import {MdCompareArrows} from "react-icons/md";

function ModalPage(props){

   
    const [inputTitle, setInputTitle] = useState("");
    const [inputDesc, setInputDesc] = useState("");
    const [inputSpec, setInputSpec] = useState("");

    const closeModal = () => {
        props.setStatusModal(false);
    }

    const ajouterOffre = (e) => {

        e.preventDefault();
        console.log(inputTitle, inputDesc, inputSpec);

    }
        return (
            <div>
              <MDBBtn className="rounded-0 mx-0 p-3" color="success"><IoMdAdd /></MDBBtn>
              <MDBModal isOpen={props.statusModal} fullHeight position="right"  >
                <MDBModalHeader><MdCompareArrows /> Ajouter une offre</MDBModalHeader>
                <MDBModalBody>
                <h5 className="text-center mt-4 mb-3">Déposez une offre de Recrutement pour votre projet.</h5>
                <p className="text-center mb-4">Les Coders pourront consulter cette offre et y postuler en cas d'intérêt.</p>
                <form onSubmit={ajouterOffre}>
                    <h5 className="text-center">Titre du Poste</h5>
                    <input
                    
                    className="form-control w-100 rounded-0 m-2"
                    type="text"
                    onChange={({currentTarget: {value}}) => setInputDesc(value)}
                    />
                    <h5 className="text-center">Description</h5>
                    <textarea  
                    className="form-control w-100 rounded-0 m-2"
                    onChange={({currentTarget: {value}}) => setInputDesc(value)}></textarea>
                    <h5 className="text-center">Spécialisation</h5>
                    <select
                    className="form-control w-100 rounded-0 m-2"
                    onChange={({currentTarget: {value}}) => setInputSpec(value)}
                    >
                    
                        <option value="front">Front-End</option>
                        <option value="back">Back-End</option> 
                        <option value="graph">Graphisme</option>
                        <option value="manage">Management</option>
                    </select>
                
                        </form>
                            </MDBModalBody>
                            <MDBModalFooter className="row mx-0">
                            <MDBBtn onClick={closeModal} color="danger" className="rounded-0 w-50 m-0">Fermer</MDBBtn>
                            <MDBBtn color="success" className="rounded-0 w-50 m-0" onClick={ajouterOffre} >Valider offre</MDBBtn>
                            </MDBModalFooter>
                        </MDBModal>
                        </div>
            );

}

  



export default ModalPage;