import React, { Component } from 'react';
import {  MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

// Import Icons
import {IoMdAdd} from "react-icons/io";
import {MdCompareArrows} from "react-icons/md";

class ModalPage extends Component {
state = {
  modal1: false
}


toggle = nr => () => {
  let modalNumber = 'modal' + nr
  this.setState({
    [modalNumber]: !this.state[modalNumber]
  });
}

render() {
   
        return (
            <div>
              <MDBBtn className="rounded-0 mx-0 p-3" color="success" onClick={this.toggle(1)}><IoMdAdd /></MDBBtn>
              <MDBModal isOpen={this.state.modal1} toggle={this.toggle(1)} fullHeight position="right"  >
                <MDBModalHeader toggle={this.toggle(1)}><MdCompareArrows /> Ajouter une offre</MDBModalHeader>
                <MDBModalBody>
                <h5 className="text-center mt-4 mb-3">Déposez une offre de Recrutement pour votre projet.</h5>
                <p className="text-center mb-4">Les Coders pourront consulter cette offre et y postuler en cas d'intérêt.</p>
                <form>
        <h5 className="text-center">Titre du Poste</h5>
        <input
        
        className="form-control w-100 rounded-0 m-2"
        type="text"
        onChange={e => this.props.modalInputTitle(e.currentTarget.value)}
        />
        <h5 className="text-center">Description</h5>
        <textarea  
        className="form-control w-100 rounded-0 m-2"
        onChange={e => this.props.modalInputDesc(e.currentTarget.value)}></textarea>
        <h5 className="text-center">Spécialisation</h5>
        <select
        className="form-control w-100 rounded-0 m-2"
        onChange={e => this.props.modalInputSpec(e.currentTarget.value)}
        >
           
            <option value="front">Front-End</option>
            <option value="back">Back-End</option> 
            <option value="graph">Graphisme</option>
            <option value="manage">Management</option>
        </select>
    
             </form>
                </MDBModalBody>
                <MDBModalFooter className="row mx-0">
                  <MDBBtn color="danger" onClick={this.toggle(1)} className="rounded-0 w-50 m-0">Fermer</MDBBtn>
                  <MDBBtn color="success" className="rounded-0 w-50 m-0" onClick={this.props.ajouterOffre} >Valider offre</MDBBtn>
                </MDBModalFooter>
              </MDBModal>
              </div>
            );

    }

  
}


export default ModalPage;