import React from "react";

import Task from "./Task.jsx";

const Column = ({ tasks, name, setDoingsState, setDonesState, setSwitchColumn, weRemoveTask }) => {


    return (
        <div className="col-12 col-md-4">
            <h2 className="text-center">{name}</h2>
            <ul className="column__tasks">
            {
                tasks.map((task, index) => (


                    <Task

                        title={task.title}
                        priority={task.importance}
                        setDoingList={setDoingsState}
                        setDonesList={setDonesState}
                        switchColumn={setSwitchColumn}
                        taskIndex={index}
                        columnName={name}
                        removeTask={weRemoveTask}
                    />
                ))
            }
            </ul>
        </div>
    )
}

export default Column;