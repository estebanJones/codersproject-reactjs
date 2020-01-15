import React from "react";

// Import Icons
import {MdSettings} from "react-icons/md";

const Parametre = ({ checkUserStatus: isOnline, onLogoutUser: onLogout }) => {

    return (

        <div className="h-100 d-flex flex-column ">
          <h2 className="m-2 text-center"><MdSettings /> Paramètres</h2>
          <div className="h-75 d-flex justify-content-between">
            <div className="row mx-0 w-100">
            <div className="col-lg-6 px-0 d-flex flex-column justify-content-center ">

              <div className="col-lg-12 px-0 d-flex flex-column justify-content-start h-50 ">

                <div className="h-50 block-dark">

              <h4 className="p-3 text-center mb-3">Recrutement</h4>
              <div className="row mx-0 d-flex justify-content-center mt-4">
                <div className="col-2 d-flex flex-column justify-content-center">
                <input type="checkbox" id="join" name="join" className="form-control" />
                </div>
                <div className="col-6 d-flex flex-column justify-content-center">
                <label for="join" className="mb-0">
                  Les Coders peuvent rejoindre le projet sans confirmation du
                  Chef.
                </label>
                </div>
              </div>

              <div className="row mx-0 d-flex justify-content-center mt-4">
                <div className="col-2 d-flex flex-column justify-content-center">
                <input type="checkbox" id="comment" name="comment" className="form-control" />
                </div>
                <div className="col-6 d-flex flex-column justify-content-center">
                <label for="comment" className="mb-0">
                Les Coders peuvent laisser un commentaire pour postuler.
                </label>
                </div>
              </div>
              </div>
              <div className="h-50 block-dark mt-1 px-4">
              <h4 className="p-3 text-center mb-3">Repository</h4>
              <p className="text-center">Liez votre projet à un repository de votre choix.
              </p>
              <input type="text" className="form-control rounded-0 mt-2" />
              <p className="text-center mt-2"><em>Entrez une URL</em></p>
              </div>
              </div>

            </div>
            <div className="col-lg-6 px-0 d-flex flex-column justify-content-center pl-2">

            <div className="col-lg-12 d-flex flex-column justify-content-start block-dark-hover ">

<h4 className="p-3 text-center mb-3">Permissions</h4>
<div className="row mx-0 d-flex justify-content-center mt-4">
  <div className="col-2 d-flex flex-column justify-content-center">
  <input type="checkbox" id="tache" name="tache" className="form-control" />
  </div>
  <div className="col-6 d-flex flex-column justify-content-center">
  <label for="tache" className="mb-0">Tous le monde peut créer des Tâches
  </label>
  </div>
</div>

<div className="row mx-0 d-flex justify-content-center mt-4">
  <div className="col-2 d-flex flex-column justify-content-center">
  <input type="checkbox" id="dossier" name="dossier" className="form-control" />
  </div>
  <div className="col-6 d-flex flex-column justify-content-center">
  <label for="dossier" className="mb-0">
  Tout le monde peut créer des dossiers.
  </label>
  </div>
</div>


<div className="row mx-0 d-flex justify-content-center mt-4">
  <div className="col-2 d-flex flex-column justify-content-center">
  <input type="checkbox" id="partage" name="partage" className="form-control" />
  </div>
  <div className="col-6 d-flex flex-column justify-content-center">
  <label for="partage" className="mb-0">
  Tout le monde peut partager des fichiers.
  </label>
  </div>
</div>

</div>


            </div>

            </div>
          </div>
          <button className="btn btn-success rounded-0 mx-0 mt-2 btnValider w-100">
            VALIDER LES CHANGEMENTS
          </button>
        </div>

    );
}


export default Parametre;