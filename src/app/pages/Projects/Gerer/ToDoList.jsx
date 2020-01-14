import React from "react";
import Table from "./componenToDoList/Table";

// Import Icons
import {GiBroadsword} from "react-icons/gi";
import {FaTasks} from "react-icons/fa";


class ToDoList extends React.Component {
  state = {};
  render() {
    return (
      <div className="h-100 d-flex flex-column ">
        <div className="row mx-0">
          <div className="col-lg-3 px-0">
            
          </div>
          <div className="col-lg-6 px-0">
          <h2 className="m-2 text-center"><FaTasks /> To-Do List</h2>
          </div>
          <div className="col-lg-3 px-0 d-flex justify-content-end">
          <button
            onClick={e => {
              //appelle au click de la methde addCard avec pour parametre e et la colonne concerner
              this.props.onClickAddCard();
            }}
            className="btn btn-success rounded-0 mr-2 ml-2"
          >
            <GiBroadsword />
          </button>
          </div>
        </div>
      
        <Table />

      </div>
    );
  }
}

export default ToDoList;
