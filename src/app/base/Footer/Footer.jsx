import React from "react";

// Import Modules
import NavigationFooter from "./NavigationFooter.jsx";
import { Link } from 'react-router-dom';


// Import Icons
import { GiNinjaHead } from 'react-icons/gi';
import { GoBell } from 'react-icons/go';
import { MdMessage } from 'react-icons/md';
import { FaUserFriends } from 'react-icons/fa';
import { GiBoltShield } from 'react-icons/gi';
import { FaProjectDiagram } from 'react-icons/fa';
import { GiGraduateCap } from 'react-icons/gi';
import { GiFist } from 'react-icons/gi';
import { GiMegaphone } from 'react-icons/gi';
import { FaPlaceOfWorship } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';





function Footer() {

    const displayModule = (props) => {

        var isOnline = props.isOnline;

        switch (module) {
            case "user-avatar":

                    if (isOnline === true){
                        return <img src="/img/avatars/avatar-footer.png" className="user-avatar mt-4" alt="img"/>
                    } else if (isOnline === false){
                        return <GiNinjaHead className="footerMiddleIcon" />
                    }

                
                break;

            case "bottom-nav":

                    if (isOnline){
                        return (
                            <div className="navRightFooter">

                                <NavigationFooter className="footerNavigationIcons" icon={<GoBell />} onClick={e => {
                                    props.toOpenModal("notifications");
                                }} />
                                <NavigationFooter className="footerNavigationIcons" icon={<MdMessage />} onClick={e => {
                                    props.toOpenModal("messages");
                                }} />
                                <NavigationFooter className="footerNavigationIcons" icon={<FaUserFriends />} onClick={e => {
                                    props.toOpenModal("friends");
                                }} />
                                <NavigationFooter className="footerNavigationIcons" icon={<GiBoltShield />} onClick={e => {
                                    props.toOpenModal("clan");
                                }} />
                            </div>
                            );

                    } else {
                        return (
                            <div className="navRightFooter ">
                                <div className="disabled w-100">
                                    <NavigationFooter className="footerNavigationIcons" icon={<GoBell />} />
                                    <NavigationFooter className="footerNavigationIcons" icon={<MdMessage />} />
                                    <NavigationFooter className="footerNavigationIcons" icon={<FaUserFriends />} />
                                    <NavigationFooter className="footerNavigationIcons" icon={<GiBoltShield />} />
                                </div>
                            </div>
                            );

                    }

            default:
                break;
        }
    }


        return (
            <footer>
                <div className="leftFooter">
                <nav>

                    <div className="breakingNews">
                    <GiMegaphone className="footerSocialIcons" />
                    <p>Ceci est le super texte d'essai de la Breaking news !</p>
                </div>
                    <div className="navLeftFooter">             
                    <Link to="/arene" className="footerNavigationIcons">
                        <NavigationFooter  icon={<FaPlaceOfWorship />} /></Link>
                    <Link to="/projets" className="footerNavigationIcons">
                        <NavigationFooter  icon={<FaProjectDiagram />} /></Link>
                    <Link to="/forum" className="footerNavigationIcons">
                        <NavigationFooter  icon={<GiGraduateCap />} /></Link>
                    <Link to="/quizz" className="footerNavigationIcons">
                        <NavigationFooter  icon={<GiFist />} /></Link>                       
                    </div>
                    </nav>

                </div>
                     <div className="middleFooter" >
                        {displayModule("user-avatar")}
                    
                    <div id="trapezoid_reverse"></div>
                </div>

                <div className="rightFooter">
                    <nav>
                        {displayModule("bottom-nav")}


                        <div className="w-50 d-row jc-end pr-2">
                            
                            <div className="d-row jc-center"><FaFacebookSquare className="footerSocialIcons pr-2 size-5" />
                            <FaTwitterSquare className="footerSocialIcons pr-2 size-5"  />
                            <FaLinkedin className="footerSocialIcons pr-2 size-5" />
                            <FaGithubSquare className="footerSocialIcons pr-2 size-5" />
                            </div>
                        </div>
                    </nav>
                </div>
            </footer>
        );
}

export default Footer;