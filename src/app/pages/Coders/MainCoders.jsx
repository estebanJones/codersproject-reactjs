import React from "react";

// Import Structure
import Header from "../../base/Header/Header.jsx";
import Footer from "../../base/Footer/Footer.jsx";

// Import MDB React
import { MDBInput } from "mdbreact";

// Import Icons
import { AiFillFilter } from "react-icons/ai";
import { MdLocationSearching } from "react-icons/md";

// Import Images
import logo from "../../../img/avatars/avatar-footer.png";


function MainCoders(props) {

  var isOnline = props.checkUserStatus;
  var onLogout = props.onLogoutUser;


  return (
    <div id="wrapper">
      <Header 
          checkUserStatus={isOnline}
          onLogoutUser={onLogout} />
      <main className="bg_home">
        <div className="allBlock row w-100 d-flex justify-content-lg-around px-0 mx-0 col-lg-12">

        <div className="col-lg-3 ">
<div id="searchUserBar" className="h-25 pb-2">
<div className="block-dark h-100">
    <h4 className="pt-2 text-center" ><MdLocationSearching className="mb-1" /> Chercher un Codeur</h4>
<MDBInput hint="Entrez un nom d'utilisateur" type="text" containerClass="mt-0 pt-4 w-75 mx-auto" className="text-center text-white" />
</div>
</div>
<div className="h-75">
<div className="block-dark h-100 ">
<h4 className="pt-2 text-center" ><AiFillFilter className="mb-1" /> Filtrer les Résultats</h4>
</div>
</div>
            </div>

            <div className="col-lg-9  pl-0 pr-2">
                <div id="mainUsersResult" className="block-dark custom_scrollbar">
            <div className="  row mx-0 d-flex ">
            {/* Single Result */}
            <div className="col-3 pl-0 pr-1 pb-1">
            <div className="row mx-0 single-list-result block-dark-hover">
            <div className="d-flex justify-content-center col-3">
            <img src={logo} className="h-75 my-auto d-flex justify-content-center" />
            </div>
            <div className="d-flex flex-column justify-content-center col-9">
            <div class="row mx-auto pt-3">
                <div class="col-2">
  
                </div>
                <div class="col-10">
                <h5 className="pb-2">Roman</h5>
                </div>
            </div>
            </div>
            
        </div></div>
            {/* End of Single Result */}
            {/* Single Result */}
            <div className="col-3 pl-0 pr-1 pb-1">
            <div className="row mx-0 single-list-result block-dark-hover">
            <div className="d-flex justify-content-center col-3">
            <img src={logo} className="h-75 my-auto d-flex justify-content-center" />
            </div>
            <div className="d-flex flex-column justify-content-center col-9">
            <div class="row mx-auto pt-3">
                <div class="col-2">
  
                </div>
                <div class="col-10">
                <h5 className="pb-2">Roman</h5>
                </div>
            </div>
            </div>
            
        </div></div>
            {/* End of Single Result */}
            {/* Single Result */}
            <div className="col-3 pl-0 pr-1 pb-1">
            <div className="row mx-0 single-list-result block-dark-hover">
            <div className="d-flex justify-content-center col-3">
            <img src={logo} className="h-75 my-auto d-flex justify-content-center" />
            </div>
            <div className="d-flex flex-column justify-content-center col-9">
            <div class="row mx-auto pt-3">
                <div class="col-2">
  
                </div>
                <div class="col-10">
                <h5 className="pb-2">Roman</h5>
                </div>
            </div>
            </div>
            
        </div></div>
            {/* End of Single Result */}
            {/* Single Result */}
            <div className="col-3 pl-0 pr-1 pb-1">
            <div className="row mx-0 single-list-result block-dark-hover">
            <div className="d-flex justify-content-center col-3">
            <img src={logo} className="h-75 my-auto d-flex justify-content-center" />
            </div>
            <div className="d-flex flex-column justify-content-center col-9">
            <div class="row mx-auto pt-3">
                <div class="col-2">
  
                </div>
                <div class="col-10">
                <h5 className="pb-2">Roman</h5>
                </div>
            </div>
            </div>
            
        </div></div>
            {/* End of Single Result */}
            {/* Single Result */}
            <div className="col-3 pl-0 pr-1 pb-1">
            <div className="row mx-0 single-list-result block-dark-hover">
            <div className="d-flex justify-content-center col-3">
            <img src={logo} className="h-75 my-auto d-flex justify-content-center" />
            </div>
            <div className="d-flex flex-column justify-content-center col-9">
            <div class="row mx-auto pt-3">
                <div class="col-2">
  
                </div>
                <div class="col-10">
                <h5 className="pb-2">Roman</h5>
                </div>
            </div>
            </div>
            
        </div></div>
            {/* End of Single Result */}
            {/* Single Result */}
            <div className="col-3 pl-0 pr-1 pb-1">
            <div className="row mx-0 single-list-result block-dark-hover">
            <div className="d-flex justify-content-center col-3">
            <img src={logo} className="h-75 my-auto d-flex justify-content-center" />
            </div>
            <div className="d-flex flex-column justify-content-center col-9">
            <div class="row mx-auto pt-3">
                <div class="col-2">
  
                </div>
                <div class="col-10">
                <h5 className="pb-2">Roman</h5>
                </div>
            </div>
            </div>
            
        </div></div>
            {/* End of Single Result */}
            {/* Single Result */}
            <div className="col-3 pl-0 pr-1 pb-1">
            <div className="row mx-0 single-list-result block-dark-hover">
            <div className="d-flex justify-content-center col-3">
            <img src={logo} className="h-75 my-auto d-flex justify-content-center" />
            </div>
            <div className="d-flex flex-column justify-content-center col-9">
            <div class="row mx-auto pt-3">
                <div class="col-2">
  
                </div>
                <div class="col-10">
                <h5 className="pb-2">Roman</h5>
                </div>
            </div>
            </div>
            
        </div></div>
            {/* End of Single Result */}
            {/* Single Result */}
            <div className="col-3 pl-0 pr-1 pb-1">
            <div className="row mx-0 single-list-result block-dark-hover">
            <div className="d-flex justify-content-center col-3">
            <img src={logo} className="h-75 my-auto d-flex justify-content-center" />
            </div>
            <div className="d-flex flex-column justify-content-center col-9">
            <div class="row mx-auto pt-3">
                <div class="col-2">
  
                </div>
                <div class="col-10">
                <h5 className="pb-2">Roman</h5>
                </div>
            </div>
            </div>
            
        </div></div>
            {/* End of Single Result */}
            {/* Single Result */}
            <div className="col-3 pl-0 pr-1 pb-1">
            <div className="row mx-0 single-list-result block-dark-hover">
            <div className="d-flex justify-content-center col-3">
            <img src={logo} className="h-75 my-auto d-flex justify-content-center" />
            </div>
            <div className="d-flex flex-column justify-content-center col-9">
            <div class="row mx-auto pt-3">
                <div class="col-2">
  
                </div>
                <div class="col-10">
                <h5 className="pb-2">Roman</h5>
                </div>
            </div>
            </div>
            
        </div></div>
            {/* End of Single Result */}
            {/* Single Result */}
            <div className="col-3 pl-0 pr-1 pb-1">
            <div className="row mx-0 single-list-result block-dark-hover">
            <div className="d-flex justify-content-center col-3">
            <img src={logo} className="h-75 my-auto d-flex justify-content-center" />
            </div>
            <div className="d-flex flex-column justify-content-center col-9">
            <div class="row mx-auto pt-3">
                <div class="col-2">
  
                </div>
                <div class="col-10">
                <h5 className="pb-2">Roman</h5>
                </div>
            </div>
            </div>
            
        </div></div>
            {/* End of Single Result */}
            {/* Single Result */}
            <div className="col-3 pl-0 pr-1 pb-1">
            <div className="row mx-0 single-list-result block-dark-hover">
            <div className="d-flex justify-content-center col-3">
            <img src={logo} className="h-75 my-auto d-flex justify-content-center" />
            </div>
            <div className="d-flex flex-column justify-content-center col-9">
            <div class="row mx-auto pt-3">
                <div class="col-2">
  
                </div>
                <div class="col-10">
                <h5 className="pb-2">Roman</h5>
                </div>
            </div>
            </div>
            
        </div></div>
            {/* End of Single Result */}
            {/* Single Result */}
            <div className="col-3 pl-0 pr-1 pb-1">
            <div className="row mx-0 single-list-result block-dark-hover">
            <div className="d-flex justify-content-center col-3">
            <img src={logo} className="h-75 my-auto d-flex justify-content-center" />
            </div>
            <div className="d-flex flex-column justify-content-center col-9">
            <div class="row mx-auto pt-3">
                <div class="col-2">
  
                </div>
                <div class="col-10">
                <h5 className="pb-2">Roman</h5>
                </div>
            </div>
            </div>
            
        </div></div>
            {/* End of Single Result */}
            {/* Single Result */}
            <div className="col-3 pl-0 pr-1 pb-1">
            <div className="row mx-0 single-list-result block-dark-hover">
            <div className="d-flex justify-content-center col-3">
            <img src={logo} className="h-75 my-auto d-flex justify-content-center" />
            </div>
            <div className="d-flex flex-column justify-content-center col-9">
            <div class="row mx-auto pt-3">
                <div class="col-2">
  
                </div>
                <div class="col-10">
                <h5 className="pb-2">Roman</h5>
                </div>
            </div>
            </div>
            
        </div></div>
            {/* End of Single Result */}
            {/* Single Result */}
            <div className="col-3 pl-0 pr-1 pb-1">
            <div className="row mx-0 single-list-result block-dark-hover">
            <div className="d-flex justify-content-center col-3">
            <img src={logo} className="h-75 my-auto d-flex justify-content-center" />
            </div>
            <div className="d-flex flex-column justify-content-center col-9">
            <div class="row mx-auto pt-3">
                <div class="col-2">
  
                </div>
                <div class="col-10">
                <h5 className="pb-2">Roman</h5>
                </div>
            </div>
            </div>
            
        </div></div>
            {/* End of Single Result */}
            {/* Single Result */}
            <div className="col-3 pl-0 pr-1 pb-1">
            <div className="row mx-0 single-list-result block-dark-hover">
            <div className="d-flex justify-content-center col-3">
            <img src={logo} className="h-75 my-auto d-flex justify-content-center" />
            </div>
            <div className="d-flex flex-column justify-content-center col-9">
            <div class="row mx-auto pt-3">
                <div class="col-2">
  
                </div>
                <div class="col-10">
                <h5 className="pb-2">Roman</h5>
                </div>
            </div>
            </div>
            
        </div></div>
            {/* End of Single Result */}
            {/* Single Result */}
            <div className="col-3 pl-0 pr-1 pb-1">
            <div className="row mx-0 single-list-result block-dark-hover">
            <div className="d-flex justify-content-center col-3">
            <img src={logo} className="h-75 my-auto d-flex justify-content-center" />
            </div>
            <div className="d-flex flex-column justify-content-center col-9">
            <div class="row mx-auto pt-3">
                <div class="col-2">
  
                </div>
                <div class="col-10">
                <h5 className="pb-2">Roman</h5>
                </div>
            </div>
            </div>
            
        </div></div>
            {/* End of Single Result */}
            {/* Single Result */}
            <div className="col-3 pl-0 pr-1 pb-1">
            <div className="row mx-0 single-list-result block-dark-hover">
            <div className="d-flex justify-content-center col-3">
            <img src={logo} className="h-75 my-auto d-flex justify-content-center" />
            </div>
            <div className="d-flex flex-column justify-content-center col-9">
            <div class="row mx-auto pt-3">
                <div class="col-2">
  
                </div>
                <div class="col-10">
                <h5 className="pb-2">Roman</h5>
                </div>
            </div>
            </div>
            
        </div></div>
            {/* End of Single Result */}
            {/* Single Result */}
            <div className="col-3 pl-0 pr-1 pb-1">
            <div className="row mx-0 single-list-result block-dark-hover">
            <div className="d-flex justify-content-center col-3">
            <img src={logo} className="h-75 my-auto d-flex justify-content-center" />
            </div>
            <div className="d-flex flex-column justify-content-center col-9">
            <div class="row mx-auto pt-3">
                <div class="col-2">
  
                </div>
                <div class="col-10">
                <h5 className="pb-2">Roman</h5>
                </div>
            </div>
            </div>
            
        </div></div>
            {/* End of Single Result */}
            {/* Single Result */}
            <div className="col-3 pl-0 pr-1 pb-1">
            <div className="row mx-0 single-list-result block-dark-hover">
            <div className="d-flex justify-content-center col-3">
            <img src={logo} className="h-75 my-auto d-flex justify-content-center" />
            </div>
            <div className="d-flex flex-column justify-content-center col-9">
            <div class="row mx-auto pt-3">
                <div class="col-2">
  
                </div>
                <div class="col-10">
                <h5 className="pb-2">Roman</h5>
                </div>
            </div>
            </div>
            
        </div></div>
            {/* End of Single Result */}
            {/* Single Result */}
            <div className="col-3 pl-0 pr-1 pb-1">
            <div className="row mx-0 single-list-result block-dark-hover">
            <div className="d-flex justify-content-center col-3">
            <img src={logo} className="h-75 my-auto d-flex justify-content-center" />
            </div>
            <div className="d-flex flex-column justify-content-center col-9">
            <div class="row mx-auto pt-3">
                <div class="col-2">
  
                </div>
                <div class="col-10">
                <h5 className="pb-2">Roman</h5>
                </div>
            </div>
            </div>
            
        </div></div>
            {/* End of Single Result */}
            {/* Single Result */}
            <div className="col-3 pl-0 pr-1 pb-1">
            <div className="row mx-0 single-list-result block-dark-hover">
            <div className="d-flex justify-content-center col-3">
            <img src={logo} className="h-75 my-auto d-flex justify-content-center" />
            </div>
            <div className="d-flex flex-column justify-content-center col-9">
            <div class="row mx-auto pt-3">
                <div class="col-2">
  
                </div>
                <div class="col-10">
                <h5 className="pb-2">Roman</h5>
                </div>
            </div>
            </div>
            
        </div></div>
            {/* End of Single Result */}
            {/* Single Result */}
            <div className="col-3 pl-0 pr-1 pb-1">
            <div className="row mx-0 single-list-result block-dark-hover">
            <div className="d-flex justify-content-center col-3">
            <img src={logo} className="h-75 my-auto d-flex justify-content-center" />
            </div>
            <div className="d-flex flex-column justify-content-center col-9">
            <div class="row mx-auto pt-3">
                <div class="col-2">
  
                </div>
                <div class="col-10">
                <h5 className="pb-2">Roman</h5>
                </div>
            </div>
            </div>
            
        </div></div>
            {/* End of Single Result */}
            {/* Single Result */}
            <div className="col-3 pl-0 pr-1 pb-1">
            <div className="row mx-0 single-list-result block-dark-hover">
            <div className="d-flex justify-content-center col-3">
            <img src={logo} className="h-75 my-auto d-flex justify-content-center" />
            </div>
            <div className="d-flex flex-column justify-content-center col-9">
            <div class="row mx-auto pt-3">
                <div class="col-2">
  
                </div>
                <div class="col-10">
                <h5 className="pb-2">Roman</h5>
                </div>
            </div>
            </div>
            
        </div></div>
            {/* End of Single Result */}
            {/* Single Result */}
            <div className="col-3 pl-0 pr-1 pb-1">
            <div className="row mx-0 single-list-result block-dark-hover">
            <div className="d-flex justify-content-center col-3">
            <img src={logo} className="h-75 my-auto d-flex justify-content-center" />
            </div>
            <div className="d-flex flex-column justify-content-center col-9">
            <div class="row mx-auto pt-3">
                <div class="col-2">
  
                </div>
                <div class="col-10">
                <h5 className="pb-2">Roman</h5>
                </div>
            </div>
            </div>
            
        </div></div>
            {/* End of Single Result */}
            {/* Single Result */}
            <div className="col-3 pl-0 pr-1 pb-1">
            <div className="row mx-0 single-list-result block-dark-hover">
            <div className="d-flex justify-content-center col-3">
            <img src={logo} className="h-75 my-auto d-flex justify-content-center" />
            </div>
            <div className="d-flex flex-column justify-content-center col-9">
            <div class="row mx-auto pt-3">
                <div class="col-2">
  
                </div>
                <div class="col-10">
                <h5 className="pb-2">Roman</h5>
                </div>
            </div>
            </div>
            
        </div></div>
            {/* End of Single Result */}
            {/* Single Result */}
            <div className="col-3 pl-0 pr-1 pb-1">
            <div className="row mx-0 single-list-result block-dark-hover">
            <div className="d-flex justify-content-center col-3">
            <img src={logo} className="h-75 my-auto d-flex justify-content-center" />
            </div>
            <div className="d-flex flex-column justify-content-center col-9">
            <div class="row mx-auto pt-3">
                <div class="col-2">
  
                </div>
                <div class="col-10">
                <h5 className="pb-2">Roman</h5>
                </div>
            </div>
            </div>
            
        </div></div>
            {/* End of Single Result */}
            {/* Single Result */}
            <div className="col-3 pl-0 pr-1 pb-1">
            <div className="row mx-0 single-list-result block-dark-hover">
            <div className="d-flex justify-content-center col-3">
            <img src={logo} className="h-75 my-auto d-flex justify-content-center" />
            </div>
            <div className="d-flex flex-column justify-content-center col-9">
            <div class="row mx-auto pt-3">
                <div class="col-2">
  
                </div>
                <div class="col-10">
                <h5 className="pb-2">Roman</h5>
                </div>
            </div>
            </div>
            
        </div></div>
            {/* End of Single Result */}
            

        
</div></div>
            </div>

        </div>
      </main>

      <Footer isOnline={props.checkUserStatus} />
    </div>
  );

}

export default MainCoders;
