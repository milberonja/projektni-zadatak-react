import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavigacioniBar from "./components/NavigacioniBar";
import OMeni from "./components/OMeni";
import Portfolio from "./components/Portfolio";
import Kontakt from "./components/Kontakt";
import Footer from "./components/Footer";

class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <div id="naVrh"></div>
        <Routes>
          <Route path="/" element={<NavigacioniBar />}>
            <Route index element={<OMeni />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="kontakt" element={<Kontakt />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
