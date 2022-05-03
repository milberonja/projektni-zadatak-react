import React, { Component } from "react";

class Kontakt extends Component {
    constructor(props){
        super(props);
        this.state = {name: "", email: "", message: ""};
    }
    onChangeHandler = (event) => {
        let ime = event.target.name;
        let vrednost = event.target.value;
        this.setState({[ime]: vrednost});
    }
    onSubmitHandler(event){
        event.preventDefault();
        let odgovor1 = document.getElementById("odgovor1");
        let odgovor2 = document.getElementById("odgovor2");
        let odgovor3 = document.getElementById("odgovor3");

        odgovor1.style.display='block';
        odgovor2.style.display='block';
        odgovor3.style.display='block';

    }
    render(){
        return(
            <>
                <div className="bgimg-3 w3-display-container w3-opacity-min">
                    <div className="w3-display-middle">
                        <span className="w3-xxlarge w3-text-white w3-wide"></span>
                    </div>
                    <img src="./img/contactMe.jpg" style={{width: "100%"}} /> 
                </div>

                <div className="w3-content w3-container w3-padding-64" id="contact">
                    <h3 className="w3-center">GDE SE NALAZIM</h3>
                    <p className="w3-center"><em>Ocekujem tvoj feedback!</em></p>

                    <div className="w3-row w3-padding-32 w3-section">
                        <div className="w3-col m4 w3-container">
                            <img src="./img/mapa.jpg" className="w3-image w3-round" style={{width: "100%"}} />
                        </div>
                        <div className="w3-col m8 w3-panel">
                            <div className="w3-large w3-margin-bottom">
                                <i className="fa fa-map-marker fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Novi Sad, Srbija<br/>
                                <i className="fa fa-phone fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Phone: +381 63 1234567<br/>
                                <i className="fa fa-envelope fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Email: mail@mail.com<br/>
                            </div>
                            <p>Navrati na kafu <i className="fa fa-coffee"></i>, ili mi ostavi poruku:</p>
                            <form onSubmit={this.onSubmitHandler}>
                                <div className="w3-row-padding" style={{margin: "0 -16px 8px -16px"}}>
                                    <div className="w3-half">
                                        <input className="w3-input w3-border" type="text" placeholder="Name" required name="name" onChange={this.onChangeHandler} />
                                    </div>
                                    <div className="w3-half">
                                        <input className="w3-input w3-border" type="text" placeholder="Email" required name="email" onChange={this.onChangeHandler} />
                                    </div>
                                </div>
                                <input className="w3-input w3-border" type="text" placeholder="Message" required name="message" onChange={this.onChangeHandler} />
                                <button className="w3-button w3-black w3-right w3-section" type="submit">
                                    <i className="fa fa-paper-plane"></i> POSALJI PORUKU
                                </button>
                            </form>
                        </div>
                    </div>

                    <h3 className="w3-center" id="odgovor1" style={{display: "none"}}>ZDRAVO {this.state.name}, DRAGO MI JE STO SI MI SE OBRATIO.</h3>
                    <p className="w3-center"><b id="odgovor2" style={{display: "none"}}>Cim pre budem mogao pisem ti na tvoj mejl: {this.state.email}</b></p>
                    <p className="w3-center w3-text-red"><i id="odgovor3" style={{display: "none"}}>Da je ovo komercijalna aplikacija tvoj tekst: <b>{this.state.message},</b> sa ostalim podacima (Ime i Email) bio bi snimljen u neku od relacionih baza</i></p>
                </div>
            </>
        );
    }
}

export default Kontakt;