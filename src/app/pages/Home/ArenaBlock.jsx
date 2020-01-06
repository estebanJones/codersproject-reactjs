import React from "react";
import { Link } from "react-router-dom";

// Import Icons
import { FaPlaceOfWorship } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";

function ArenaBlock() {
  return (
    <div className="col-lg-4">
      <div className="arene_link mb-2">
        <Link to="/arene">
          <button className="d-flex flex-column w-100 h-100 block-dark-hover justify-content-center">
            <div className="d-flex justify-content-center">
              <FaPlaceOfWorship className="mr-3 display-4" />
              <h2 className="my-auto">Arène</h2>
            </div>
          </button>
        </Link>
      </div>

      <div className="home-battle-infos text-center block-dark p-5">
        <h4>prochainement</h4>
        <h1 className="mb-2">HTML / CSS</h1>
        <div className="images mb-4 d-flex justify-content-center">
          <IoLogoHtml5 />
          <IoLogoCss3 />
        </div>
        <h5 className="mb-2">Début de la Battle</h5>
        <h6 className="mb-3">Dimanche 21 Octobre à 14:00</h6>
        <h5 className="mb-2">Fin de la Battle</h5>
        <h6>Dimanche 21 Octobre à 14:00</h6>
      </div>

      <div>
        <h1 className="text-center block-dark mt-2 p-5">Récompenses</h1>
      </div>
    </div>
  );
}

export default ArenaBlock;
