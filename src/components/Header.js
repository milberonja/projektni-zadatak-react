import React, { Component } from "react";

class Header extends Component {
    render(){
        
        return(
            <div className="bgimg-1 w3-display-container w3-opacity-min" id="home" > 
                <div className="w3-display-middle" style={{whiteSpace: 'nowrap'}} >
                    <span className="w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity w3-hide-small">MOJE BOLJE JA</span>
                </div>
                <img src="./img/naslovna.jpg" style={{width: "100%"}} />
            </div>
        );
    }
}

export default Header;

