import React, { useState } from "react";
import Table from "./componenToDoList/Table";

// Import Icons
import { GiBroadsword } from "react-icons/gi";
import { FaTasks } from "react-icons/fa";


function ToDoList() {
  const [cardCount, setCardCount] = useState(0);
  const [columns, setColumns] = useState(
    [
      {
        id: 1,
        name: "À faire",
        tasks: []
      },
      {
        id: 2,
        name: "En cours",
        tasks: []
      },
      {
        id: 3,
        name: "Fait",
        tasks: []
      }
    ]
  )

  // const onClickAddCard = () => {
  //   const idColumn = columns[0].id;
  //   setCardCount(cardCount + 1);

  //   const newCard = {
  //     id: cardCount,
  //     content: 
  //   }
  //   console.log(idColumn);
  // }

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

export default ToDoList;
