import React from "react";

// Import Icons
import { TiCancel } from "react-icons/ti";
import { GoCheck } from "react-icons/go";
import { GiBattery25, GiBattery50, GiBattery100 } from "react-icons/gi";

const Task = ({ title, priority, setDoingsList, setDonesList, switchColumn, taskIndex, columnName, removeTask }) => {

    const showPriority = () => {

        switch (priority) {
            case "low":
                return <GiBattery25 className="text-success" />
                break;
        
            case "medium":
                return <GiBattery50 className="text-warning" />
                break;
        
            case "hard":
                return <GiBattery100 className="text-danger"  />
                break;
        
            default:
                break;
        }

    }


    return (
        <li className="task block-dark-hover p-2 ">
            <div className="row mx-0">
            <div className="col-lg-1 px-0 d-flex flex-column justify-content-center">
                {showPriority()}
                </div>
                <div className="col-lg-8 px-0 d-flex flex-column justify-content-center">
                    <p className="mb-0 text-center">{title}</p>
                </div>
                <div className="col-lg-3 px-0">
                    <div className="row mx-0">
                    <div className="col-6 px-0">
                        <button className="btn btn-success rounded-0 mx-0" onClick={() => switchColumn(taskIndex, columnName)} ><GoCheck /></button>
                    </div>
                    <div className="col-6 px-0">
                        <button className="btn btn-danger rounded-0 mx-0" onClick={() => removeTask(taskIndex, columnName)} ><TiCancel /></button>
                    </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default Task;