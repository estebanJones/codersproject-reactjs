import React, { useState } from "react";

// Import Icons
import {FaUsersCog} from "react-icons/fa";

const Equipe = ({ checkUserStatus: isOnline, onLogoutUser: onLogout }) => {

  let response = [
    {id: 1, username: 'remi'},
    {id: 2, username: 'jordan'}
  ];

  const [teammateTab, setteammateTab] = useState(response);



    return (
      <div className="h-100 d-flex flex-column ">
      <h2 className="m-2 text-center"><FaUsersCog /> Équipe</h2>
      <div className="">
      <ul>
      {teammateTab.map(teammate => { return <li> {teammate.username} </li> })}
        </ul>
        </div>
      </div>
    );
  
}

export default Equipe;
