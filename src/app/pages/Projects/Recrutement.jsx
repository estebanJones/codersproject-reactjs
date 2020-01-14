import React, { useState } from "react";
// import Poste from "./component/Poste";
// import Table from "./componentRecrutement/Offres";
// import Card from "./component/Card";

const Recrutement = () => {
  const [value, setValue] = useState([]);
  const [inputTitle, setInputTitle] = useState("");
  const [inputSpec, setInputSpec] = useState("");

  const add = () => {
    setValue([
      ...value,
      {
        title: inputTitle,
        spec: inputSpec
      }
    ]);
    setInputTitle("");
    setInputSpec("");
  };

  const suppr = () => {
    console.log("delete", value);
  };

  return (
    <div>
      <div className="d-flex justify-content-end">
        <div className="col-lg-3"></div>

        <div className="col-lg-6">
          <h2 className="w-100 d-flex justify-content-center">Recrutement</h2>
        </div>
        {/* <div className="d-flex flex-column justify-content-end"> */}
        <div className="col-lg-3">
          <button onClick={add}>Ajout</button>
          <input
            type="text"
            value={inputTitle}
            onChange={e => setInputTitle(e.currentTarget.value)}
            maxLength="10"
            placeholder="techno"
          />
          <input
            type="text"
            value={inputSpec}
            onChange={e => setInputSpec(e.currentTarget.value)}
            maxLength="20"
            placeholder="niveau"
          />
        </div>
      </div>

      <div id="poste" className=" ">
        {value.map((currentValue, index) => {
          return (
            <div className="poste">
              <h3>
                {index}
                {currentValue.title}
              </h3>
              <p>{currentValue.spec}</p>
              <button onClick={suppr}>suprimer</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recrutement;
