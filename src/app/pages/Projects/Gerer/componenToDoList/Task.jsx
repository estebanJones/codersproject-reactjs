import React from "react";

// Import Icons
import { GiBroadsword } from "react-icons/gi";

const Task = ({ title, priority, setDoingsList, setDonesList }) => {

    const validate = (state, title, priority) => {

        if(state === "doing"){

            setDoingsList([
                ...
                {
                    title: title,
                    importance: priority
                }
            ])


        } else if (state === "done"){

        }

    }

    return (
        <li className="task block-dark-hover p-2 ">
            <div className="row mx-0">
                <div className="col-lg-8 px-0 d-flex flex-column justify-content-center">
                    <p className="mb-0">{title}</p>
                </div>
                <div className="col-lg-1 px-0">
                {priority}
                </div>
                <div className="col-lg-3 px-0">
                    <div className="row mx-0">
                    <div className="col-6 px-0">
                        <button className="btn btn-success rounded-0 mx-0" onClick={() => validate("doing", title, priority)} ><GiBroadsword /></button>
                    </div>
                    <div className="col-6 px-0">
                        <button className="btn btn-danger rounded-0 mx-0" onClick={() => validate("done", title, priority)} ><GiBroadsword /></button>
                    </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default Task;