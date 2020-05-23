// App.js
import React, { Component } from "react";
import FullNavBar from "./components/structure/navbar/NavBar";
import Footer from "./components/structure/footer/Footer";
import RouteList from "./components/Routes/Routes";
import PartnersBloc from "./components/structure/partnersBloc/PartnersBloc";
class App extends Component {
  render() {
    return (
      <>
        <FullNavBar />
        <RouteList />
        <PartnersBloc />
        <Footer />
      </>
    );
  }
}

export default App;
