import React, { Component } from "react";

class Footer extends Component {
    render(){
        return(
            <footer className="w3-center w3-black w3-padding-64 w3-opacity w3-hover-opacity-off">
                <a href="#naVrh" className="w3-button w3-light-grey"><i className="fa fa-arrow-up w3-margin-right"></i>Na vrh</a>
                <div className="w3-xlarge w3-section">
                    <i className="fa fa-facebook-official w3-hover-opacity w3-padding"></i>
                    <i className="fa fa-instagram w3-hover-opacity w3-padding"></i>
                    <i className="fa fa-snapchat w3-hover-opacity w3-padding"></i>
                    <i className="fa fa-pinterest-p w3-hover-opacity w3-padding"></i>
                    <i className="fa fa-twitter w3-hover-opacity w3-padding"></i>
                    <i className="fa fa-linkedin w3-hover-opacity w3-padding"></i>
                </div>
                <p>Powered by <a href="https://99designs.com/profiles/kovacev" title="Nenad Kovacev" target="_blank" className="w3-hover-text-green">Nenad Kovacev</a></p>
            </footer>
        );
    }
}

export default Footer;