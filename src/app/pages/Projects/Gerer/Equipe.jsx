import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Import Icons
import { FaUsersCog } from "react-icons/fa";

// Import Images
import logo from "../../../../img/avatars/avatar-footer.png";

const Equipe = ({ checkUserStatus: isOnline, onLogoutUser: onLogout }) => {

  const [teammateTab, setteammateTab] = useState([])
  const { id } = useParams();


  useEffect(() => {
    fetch('http://127.0.0.1:8000/teammate/show_all', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        projectId: id,
      })
    })
      .then(res => res.json())
      .then(data => { setteammateTab(data) })
  }, [])



  const suppr = (index) => {
    const teamMateCopy = [...teammateTab];
    teamMateCopy.splice(index, 1);
    setteammateTab(teamMateCopy);
  };



  return (
    <div className="h-100 d-flex flex-column ">
      <h2 className="m-2 text-center h-15"><FaUsersCog /> Équipe</h2>

      <ul className="row mx-0 h-85 custom_scrollbar">

        {teammateTab.map((teammate, index) => {
          return (
            <div className="col-lg-2 px-0 pr-1 h-25">
              <li id={teammate.id} className="block-dark-hover d-flex flex-column justify-content-center h-100 px-2">
                <img src={logo} className="h-50 w-25 mx-auto img-fluid img-circle p-2" />
                <h6 className="text-center h-25 d-flex flex-column justify-content-center">

                  {teammate.username}</h6>
                <h6 className="text-center h-25 d-flex flex-column justify-content-center">

                  {teammate.role}</h6>
                <button onClick={(e) => suppr(index)} className="btn btn-danger w-100 mx-0 rounded-0">Expulser</button>
              </li>
            </div>
          )


        })}

      </ul>

    </div>
  );

}

export default Equipe;
