import React from "react";

import Task from "./Task.jsx";

const Column = ({ tasks, name, setDoingsState, setDonesState }) => {

    return (
        <div className="col-12 col-md-4">
            <h2 className="text-center">{name}</h2>
            <ul className="column__tasks">
            {
                tasks.map(task => (
                    <Task

                        title={task.title}
                        priority={task.priority}
                        setDoingList={setDoingsState}
                        setDonesList={setDonesState}
                    />
                ))
            }
            </ul>
        </div>
    )
}

export default Column;