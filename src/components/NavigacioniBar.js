import { Outlet, Link } from "react-router-dom";
import React, { Component } from "react";

class NavigacioniBar extends Component {

    render(){
        return(
            <>
                <div className="w3-top">
                    <div className="w3-bar w3-card w3-animate-top w3-white" id="myNavbar">
                        <Link to="/" className="w3-bar-item w3-button"><i className="fa fa-user"></i> O MENI</Link>
                        <Link to="portfolio" className="w3-bar-item w3-button"><i className="fa fa-th"></i> PORTFOLIO</Link>
                        <Link to="kontakt" className="w3-bar-item w3-button"><i className="fa fa-envelope"></i> KONTAKT</Link>
                    </div>
                </div>

                <Outlet />
            </>
        );
    }
}

export default NavigacioniBar;
