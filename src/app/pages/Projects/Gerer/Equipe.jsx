import React, { useState } from "react";

// Import Icons
import {FaUsersCog} from "react-icons/fa";

// Import Images
import logo from "../../../../img/avatars/avatar-footer.png";

const Equipe = ({ checkUserStatus: isOnline, onLogoutUser: onLogout }) => {

  let response = [
    {id: 1, username: 'remi'},
    {id: 2, username: 'jordan'}
  ];

  const [teammateTab, setteammateTab] = useState(response);

    const supprimerTeamMate = (e, indexTeamMate) => {


      
      //   const index_teammate =  teammateTab.findIndex(teammate => {teammate.id = indexTeamMate });


      // teammateTab.splice(index_teammate, 1);

    }



    return (
      <div className="h-100 d-flex flex-column ">
      <h2 className="m-2 text-center h-15"><FaUsersCog /> Équipe</h2>

      <ul className="row mx-0 h-85 custom_scrollbar">
      
      {teammateTab.map(teammate => {
        return (
          <div className="col-lg-2 px-0 pr-1 h-25">
            <li id={teammate.id} className="block-dark-hover d-flex flex-column justify-content-center h-100 px-2">
              <img src={logo} className="h-50 w-25 mx-auto img-fluid img-circle p-2" />
              <h6 className="text-center h-25 d-flex flex-column justify-content-center">
                
                {teammate.username}</h6>
              <button onClick={(e) => supprimerTeamMate(e, teammate.id)} className="btn btn-danger w-100 mx-0 rounded-0">Expulser</button>
            </li> 
        </div>
        )
        
        
        })}
      
        </ul>
      
      </div>
    );
  
}

export default Equipe;
