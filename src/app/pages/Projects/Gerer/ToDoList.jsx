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

  const switchColumn = (index, columnTarget) => {

    if(columnTarget === "To-Do"){

      let rowToSwitch = todos[index];
      setDoings([
        ...doings,
        {
          title: rowToSwitch.title,
          importance: rowToSwitch.importance
        }
      ]);

      const rowToRemove = [...todos];
      rowToRemove.splice(index, 1);
      setTodos(rowToRemove);

    } else if(columnTarget === "Doing"){

      let rowToSwitch = doings[index];
      setDones([
        ...dones,
        {
          title: rowToSwitch.title,
          importance: rowToSwitch.importance
        }
      ]);

      const rowToRemove = [...doings];
      rowToRemove.splice(index, 1);
      setDoings(rowToRemove);

    }

  }

  const removeTask = (index, columnTarget) => {

    switch (columnTarget) {
      case "To-Do":
        const taskToDoRemove = [...todos];
        taskToDoRemove.splice(index, 1);
        setTodos(taskToDoRemove);
        break;
      case "Doing":
        const taskDoingRemove = [...doings];
        taskDoingRemove.splice(index, 1);
        setDoings(taskDoingRemove);
        break;
      case "Done":
        const taskDoneRemove = [...dones];
        taskDoneRemove.splice(index, 1);
        setDones(taskDoneRemove);
        break;
    
      default:
        break;
    }

  


  }


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
                <Column name="To-Do" tasks={todos} setDoingsState={setDoings} setSwitchColumn={switchColumn} weRemoveTask={removeTask}  />
                <Column name="Doing" tasks={doings} setDonesState={setDones} setSwitchColumn={switchColumn} weRemoveTask={removeTask} />
                <Column name="Done" tasks={dones} weRemoveTask={removeTask} />
      </div>
    </div>

  )
}

export default ToDoList;
