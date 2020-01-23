import React, { useState } from "react";

// Import Icons
import { GiBroadsword } from "react-icons/gi";

// Import Components
import ModalToDo from "./componenToDoList/ModalToDo";
import Column from "./componenToDoList/Column";


const ToDoList = () => {

  const [todos, setTodos] = useState([]);

const [doings, setDoings] = useState([]);

const [dones, setDones] = useState([]);

  const addCard = (title, importance) => {

    setTodos([
      ...todos,
      {
        title: title,
        importance: importance
      }]
    )
 

  };


  return (
    <div className="h-100 d-flex flex-column">
      <div className="row mx-0">
          <div className="col-lg-3 px-0">
            
          </div>
          <div className="col-lg-6 px-0">
          <h2 className="m-2 text-center"><GiBroadsword /> To-Do List</h2>
          </div>
          <div className="col-lg-3 px-0 d-flex justify-content-end">
          <ModalToDo 

          ajouterOffre={addCard}

          />

        </div>
      </div>
      <div className="row mx-0">
                <Column name="To-Do" tasks={todos} setDoingsState={setDoings}  />
                <Column name="Doing" tasks={doings} setDonesState={setDones} />
                <Column name="Done" tasks={dones} />
      </div>
    </div>

  )
}

export default ToDoList;
