import React, { useState } from "react";


// Import base Theme
import Header from "../../base/Header/Header.jsx"
import Footer from "../../base/Footer/Footer.jsx"



// Import Pages
import MainArene from "./MainArene.jsx";


function Arene(props) {

    const [currentTab, setCurrentTab] = useState("home");

    const changePage = (tab) => {
        setCurrentTab({ currentTab: tab });

    }

    const displayPage = () => {

        if (currentTab === "home") {
            return (
                <MainArene onChangeTab={changePage} isOnline={props.checkUserStatus} />
            )
        } else if (currentTab === "arene") {
            return (
                <div></div>    
            )
        } else if (currentTab === "projects") {
            return (
                <div></div>
            )
        }
    }

        return (
            <div id="wrapper" class="bg_arene">
                <Header onChangePage={changePage} isOnline={props.checkUserStatus} />
                <main>
                    {displayPage()}

                </main>
                <Footer onChangePage={changePage} onChangeRoute={changePage} isOnline={props.checkUserStatus} />
            </div>
        );
}

export default Arene;