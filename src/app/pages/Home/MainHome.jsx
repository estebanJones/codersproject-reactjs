import React from "react";
import ArenaBlock from "./ArenaBlock";
import ConnexionBlock from "./ConnexionBlock";
import ProjectBlock from "./ProjectBlock";
import Header from "../../base/Header/Header.jsx";
import Footer from "../../base/Footer/Footer.jsx";

class MainHome extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <Header />
        <main className="bg_home">
          <div className="allBlock row w-100 d-flex justify-content-lg-around px-0 mx-0 col-lg-12">
            <ArenaBlock />
            <ConnexionBlock />
            <ProjectBlock />
          </div>
        </main>

        <Footer />
      </div>
    );
  }
}

export default MainHome;
