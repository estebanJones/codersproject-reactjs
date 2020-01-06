import React from "react";
import arena from "../../../img/arena.png";

function ArenaBlock() {
  return (
    <div className="col-lg-4">
      <div className="arene mb-2 d-flex justify-content-around">
        <img src={arena} alt="lol" className="logo ml-5 p-3"></img>
        <h3 className="mr-5">Arène</h3>
      </div>

      <div className="article text-center block-dark p-5">
        <h1> A venir </h1>
        <h2>HTML / CSS</h2>

        <h3>Début de la Battle</h3>
        <strong>Dimanche 21 Octobre à 14:00</strong>
        <h3>Fin de la Battle</h3>
        <strong>Dimanche 21 Octobre à 14:00</strong>
      </div>

      <div>
        <h1 className="text-center block-dark mt-2 p-5">Récompenses</h1>
      </div>
    </div>
  );
}

export default ArenaBlock;
