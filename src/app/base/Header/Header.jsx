import React from "react";


// Import Modules
import { Link } from 'react-router-dom';

// Import Icons
import { FaCog } from 'react-icons/fa';
import { FaQuestionCircle } from 'react-icons/fa';
import { IoMdLogOut } from 'react-icons/io';

function Header() {

    const logoutUser = e => {

        console.log("Bien dans le Home !");
        this.props.onLogoutUser();
    }

    const displayModule = (module) => {

        let isOnline = this.props.isOnline;

        switch (module) {
            case "user-experience":
                if (isOnline === true) {
                        return (
                            <div className="d-column jc-center h-100">
                                <h3 className="text-center">Component d'expérience user à créer</h3>
                            </div>
                        );
                }else if (isOnline === false) {
                        return (
                            <div>loool</div>
                         );
                        break;
                }
            case "right-buttons":
                if (isOnline == false) {
                    return (
                        <div className="buttonsHeaderDrop">
                        <FaQuestionCircle className="headerRightIcons" />
                        <FaCog className="headerRightIcons" />
                        <IoMdLogOut className="headerRightIcons" onClick={this.logoutUser} />
                    </div>
                    );

                }else {
                    return (
                        <div className="buttonsHeaderDrop"> </div>);
                }
         }



        return (
            <header>
                <div className="leftHeader">
                    {this.displayModule("user-experience")}
                </div>

                <div className="middleHeader">
                    <Link to="/" className="link-logo"><img src="/img/logo.png" className="logo-main" alt="img"/> </Link>
                    <div id="trapezoid"></div>
                </div>

                <div className="rightHeader">
                    <nav>
                        <ul>
                            <li onClick={e => {this.props.onChangeTab("home")}}>Les Coders</li>
                            <li onClick={e => {this.props.onChangeTab("arene")}}>Les Clans</li>
                        </ul>

                        {this.displayModule("right-buttons")}
                    </nav>
                </div>
            </header>
        )
    



}

export default Header;