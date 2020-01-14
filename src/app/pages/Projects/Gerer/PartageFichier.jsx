import React from "react";

class PartageFichier extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <p>
          Partage de fichier
          <input type="file" name="" id="" accept="image/png, image/jpeg" />
        </p>
      </div>
    );
  }
}

export default PartageFichier;
