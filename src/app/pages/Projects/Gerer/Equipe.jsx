import React from "react";

// Import Icons
import {FaUsersCog} from "react-icons/fa";

class Equipe extends React.Component {
  state = {};
  render() {
    return (
      <div className="h-100 d-flex flex-column ">
      <h2 className="m-2 text-center"><FaUsersCog /> Équipe</h2>
      </div>
    );
  }
}

export default Equipe;
