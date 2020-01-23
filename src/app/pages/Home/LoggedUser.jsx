import React, { useState } from "react";

// Import Images
import userAvatar from "../../../img/avatars/avatar.png";

function LoggedUser() {
const username = localStorage.getItem("userName");

  return (
    <div className="col-lg-3 px-0 d-flex flex-column text-center justify-content-center">
      <div className="d-flex justify-content-center">
        <img src={userAvatar} className="w-100 d-none d-lg-block" alt="img"/>
      </div>
      <div className="d-flex justify-content-center">

        <h2 className="mt-3 d-none d-lg-block">{username}</h2>
      </div>
    </div>
  );
}

export default LoggedUser;
