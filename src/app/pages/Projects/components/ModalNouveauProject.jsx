import React, { Component } from 'react';
import {  MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

// Import Icons
import {FaPlusCircle} from "react-icons/fa";
import {FaProjectDiagram} from "react-icons/fa";

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
            <div className="h-100">
              <MDBBtn className="btn block-dark-hover text-white w-100 p-4 h-100 m-0 rounded-0" onClick={this.toggle(1)}><FaPlusCircle size="2em" className="mr-2" /> Créer un nouveau Projet</MDBBtn>
              <MDBModal isOpen={this.state.modal1} toggle={this.toggle(1)} fullHeight position="left"  >
                <MDBModalHeader toggle={this.toggle(1)}><FaProjectDiagram /> Créer un Projet</MDBModalHeader>
                <MDBModalBody className="p-2">
                <h5 className="text-center mt-4 mb-3">Démarrez un nouveau projet.</h5>
                <p className="text-center mb-4">Ouvrez des postes, gérez votre planning de tâches et plus encore !</p>
                <form>
        <h5 className="text-center">Titre</h5>
        <input
        
        className="form-control w-100 rounded-0"
        type="text"
        onChange={e => this.props.modalInputTitle(e.currentTarget.value)}
        />
        <h5 className="text-center mt-4">Description</h5>
        <textarea  
        className="form-control w-100 rounded-0"
        rows="5"
        onChange={e => this.props.modalInputDesc(e.currentTarget.value)}></textarea>

<h5 className="text-center mt-4">Image</h5>

          <div className="d-flex justify-content-center col-12" >
          <img src="https://place-hold.it/200x200" />
          </div>
        <input
        className="form-control w-100 rounded-0 mt-4"
        type="file"
        />

             </form>
                </MDBModalBody>
                <MDBModalFooter className="row mx-0">
                  <MDBBtn color="danger" onClick={this.toggle(1)} className="rounded-0 w-50 m-0">Fermer</MDBBtn>
                  <MDBBtn color="success" className="rounded-0 w-50 m-0" onClick={this.props.ajouterOffre} >Créer le Projet</MDBBtn>
                </MDBModalFooter>
              </MDBModal>
              </div>
            );

    }

  
}


export default ModalPage;