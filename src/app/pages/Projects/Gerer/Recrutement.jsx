import React, { useState } from "react";
// import Poste from "./component/Poste";
// import Table from "./componentRecrutement/Offres";
// import Card from "./component/Card";


// Import Icons
import {IoMdAdd} from "react-icons/io";
import {MdCompareArrows} from "react-icons/md";


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

<div className="h-100 d-flex flex-column ">
        <div className="row mx-0">
          <div className="col-lg-3 px-0">
            
          </div>
          <div className="col-lg-6 px-0">
          <h2 className="m-2 text-center"><MdCompareArrows /> Recrutement</h2>
          </div>
          <div className="col-lg-3 px-0 d-flex justify-content-end">
          <button
          onClick={add}
          className="btn btn-success rounded-0 mx-0 p-3"><IoMdAdd /></button>

        </div>
      </div>

      <div id="poste" className="w-100 custom_scrollbar mt-2 pr-1">
        {value.map((currentValue, index) => {
          return (
            <div className="poste">
              <h3>
                {index}
                {currentValue.title}
              </h3>
              <p>{currentValue.spec}</p>
              <div className="row mx-0">
                <div className="col-lg-6 px-0  w-100">
                <button
                onClick={suppr}
                className="btn btn-primary rounded-0">
                Modifier </button>
                </div>
                <div className="col-lg-6 px-0 w-100">
                <button
                onClick={suppr}
                className="btn btn-danger rounded-0">
                Supprimer </button>
                </div>
              </div>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recrutement;
