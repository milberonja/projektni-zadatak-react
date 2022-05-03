import React, { Component } from "react";

class Portfolio extends Component {
    uvecajSliku(element) {
        document.getElementById("img01").src = element.src;
        document.getElementById("modal01").style.display = "block";
    }
    zatvoriProzor(){
        let modal01 = document.getElementById("modal01");
        modal01.style.display='none';
    }
    render(){
        return(
            <>
                <div className="bgimg-2 w3-display-container w3-opacity-min">
                    <div className="w3-display-middle">
                        <span className="w3-xxlarge w3-text-white w3-wide"></span>
                    </div>
                    <img src="./img/portfolio.jpg" style={{width: "100%"}} /> 
                </div>

                <div className="w3-content w3-container w3-padding-64" id="portfolio">
                    <h3 className="w3-center">MOJI DOSADASNJI RADOVI</h3>
                    <p className="w3-center"><em>Evo samo nekih od skorasnjih radova/projekata.</em></p><br/>

                    <div className="w3-row-padding w3-center">
                        <div className="w3-col m3">
                            <img src="./img/slika1.jpg" style={{width: "100%"}} onClick={(event)=>{this.uvecajSliku(event.target)}} className="w3-hover-opacity" />
                        </div>
                        <div className="w3-col m3">
                            <img src="./img/slika2.jpg" style={{width: "100%"}} onClick={(event)=>{this.uvecajSliku(event.target)}} className="w3-hover-opacity" />
                        </div>
                        <div className="w3-col m3">
                            <img src="./img/slika3.jpg" style={{width: "100%"}} onClick={(event)=>{this.uvecajSliku(event.target)}} className="w3-hover-opacity" />
                        </div>
                        <div className="w3-col m3">
                            <img src="./img/slika4.jpg" style={{width: "100%"}} onClick={(event)=>{this.uvecajSliku(event.target)}} className="w3-hover-opacity" />
                        </div>
                    </div>

                    <div className="w3-row-padding w3-center w3-section">
                        <div className="w3-col m3">
                            <img src="./img/slika5.jpg" style={{width: "100%"}} onClick={(event)=>{this.uvecajSliku(event.target)}} className="w3-hover-opacity" />
                        </div>
                        <div className="w3-col m3">
                            <img src="./img/slika6.jpg" style={{width: "100%"}} onClick={(event)=>{this.uvecajSliku(event.target)}} className="w3-hover-opacity" />
                        </div>
                        <div className="w3-col m3">
                            <img src="./img/slika7.jpg" style={{width: "100%"}} onClick={(event)=>{this.uvecajSliku(event.target)}} className="w3-hover-opacity" />
                        </div>
                        <div className="w3-col m3">
                            <img src="./img/slika8.jpg" style={{width: "100%"}} onClick={(event)=>{this.uvecajSliku(event.target)}} className="w3-hover-opacity" />
                        </div>
                    </div>
                </div>

                <div id="modal01" className="w3-modal w3-black" onClick={this.zatvoriProzor}>
                    <span className="w3-button w3-large w3-black w3-display-topright" title="Close Modal Image"><i className="fa fa-remove"></i></span>
                    <div className="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
                        <img id="img01" className="w3-image" />
                    </div>
                </div>
            </>
        );
    }
}

export default Portfolio;