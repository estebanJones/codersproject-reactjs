import React, { useState } from "react";
import { GiBroadsword } from "react-icons/gi";

function ToDoList2() {
  // const [card, setCard] = useState([]);
  const [columns, setColumns] = useState();
  const [inputTask, setInputTask] = useState("");

  var ind = 0;

  const addCard = () => {
    // console.log("dans addCard");
    // //copie du state de table
    // //index de la colonne concerner
    const columns_local = [...columns];
    const index_column = columns_local[ind].tasks;
    if (inputTask !== "") {
      index_column.push(inputTask);
    } else {
      console.log("push");
    }
    setInputTask("");
  };

  const right = () => {
    console.log("dans right");
    const columns_local = [...columns];
    // //index de la colonne concerner
    const index_column = columns_local[ind].tasks;

    console.log(index_column);

    if (columns_local.length >= ind) {
      ind += 1;
    } else {
    }

    console.log(ind);
  };
  const left = () => {
    console.log("dans left");

    // //copie du state de table
    const columns_local = [...columns];
    // //index de la colonne concerner
    const index_column = columns_local[ind].tasks;
    console.log(index_column);
    if (columns_local.length <= 0) {
      ind -= 1;
    } else {
    }

    console.log(ind);
  };

  const suppr = (indexcol, index) => {
    console.log("suppr" + index);
    const columns_local = [...columns];
    // console.log(columns_local[index].tasks);
    // console.log(columns_local[index].tasks[index]);
    console.log(
      "index colonne = " +
      columns_local[indexcol] +
      " task = " +
      columns_local[indexcol].tasks[index]
    );
    console.log("index colonne = " + indexcol);
    // var task_supp = columns_local[indexcol].tasks[index];
    // console.log("task a suppr " + task_supp);
    var taskSupr = columns_local[indexcol].tasks;
    console.log("task a suppr 2 " + taskSupr);
    // task_supp = "";
    taskSupr.splice(index, 1);
    // task_supp.splice(index, 1);
    // task_supp.
    // setInputTask(task_supp);
    setInputTask("");
  };

  return (
    <div className="w-100">
      <h1 className="d-flex justify-content-center">ToDoList</h1>
      <button
        onClick={() =>
          //appelle au click de la methde addCard avec pour parametre e et la colonne concerner
          addCard()
        }
        className="btn btn-success mr-2 ml-2"
      >
        <GiBroadsword />
      </button>
      <input
        type="text"
        value={inputTask}
        onChange={e => setInputTask(e.currentTarget.value)}
        maxLength="10"
        placeholder="poste"
        required
      />
      {/* <Table /> */}
      <div className="d-flex">
        {columns.map((column, indexcol) => {
          return (
            <div className="col-lg-4 colonne">
              {/* <h3 className="d-flex justify-content-center">{column.id}</h3> */}
              <h3>{indexcol}</h3>
              <h3 className="d-flex justify-content-center">{column.name}</h3>
              <div className="d-flex justify-content-center  d-flex flex-column">
                {column.tasks.map((task, index) => {
                  return (
                    <div className="d-flex justify-content-center flex-column">
                      <h4>{index}</h4>
                      <h4>{task}</h4>
                      <div className="d-flex">
                        <button className="col-lg-6" onClick={() => left()}>
                          -
                        </button>
                        <button className="col-lg-6" onClick={() => right()}>
                          +
                        </button>
                      </div>
                      <button onClick={() => suppr(indexcol, index)}>
                        supprimer
                      </button>
                    </div>
                  );
                })}
              </div>
              {/* {console.log(column.tasks)} */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ToDoList2;
