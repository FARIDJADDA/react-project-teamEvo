// App.js
import React, { Component } from "react";
import Footer from "./components/structure/footer/Footer";
import RouteList from "./components/Routes/Routes";
import PartnersBloc from "./components/structure/partnersBloc/PartnersBloc";
class App extends Component {
  render() {
    return (
      <>
        <RouteList />
        <PartnersBloc />
        <Footer />
      </>
    );
  }
}

export default App;
