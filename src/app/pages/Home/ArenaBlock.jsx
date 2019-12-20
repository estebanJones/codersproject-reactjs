import React from "react";
import arena from "../../../img/arena.png";

function ArenaBlock() {
  return (
    <div class="container">
      <div class="arene">
        <img src={arena} alt="lol" class="logo"></img>
        <h3>Arène</h3>
      </div>

      <div class="article">
        <h1> A venir </h1>
        <h2>HTML / CSS</h2>

        <h3>Début de la Battle</h3>
        <strong>Dimanche 21 Octobre à 14:00</strong>

        <h3>Fin de la Battle</h3>
        <strong>Dimanche 21 Octobre à 14:00</strong>
      </div>

      <div class="recompenses">
        <h1>Récompenses</h1>
      </div>
    </div>
  );
}



export default ArenaBlock;
