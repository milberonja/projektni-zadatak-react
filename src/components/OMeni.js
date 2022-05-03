import React, { Component } from "react";
import Header from "./Header";

class OMeni extends Component {
    render(){
        return( <>
            <Header />
            <div className="w3-content w3-container w3-padding-64" id="about">
                <h3 className="w3-center">ABOUT ME</h3>
                <p className="w3-center"><em>I sam pasionirani dizajner</em></p>
                <p>Dizajn je nesto u cemu jako uzivam. Za mene je dizajniranje jako izazovno, a najvise uzivam kada zavrsim dizajn u punoj paleti boja sa velikim
                    brojem elemenata u sebi i setim se da je na pocetku postojao samo beli papir i ideja koja je sada otelotvorena. Dizajniranje je u proporcionalnoj
                    srazmeri sa mastom, i tu je bukvalno samo nebo granica. Do pre nepune godine verovao sam da nepostoji nista izazovnije i nista sto moze tako
                    da me zaokupi kao dizajniranje. Medjutim...
                </p>
                <div className="w3-row">
                    <div className="w3-col m6 w3-center w3-padding">
                    <p><b><i className="fa fa-user w3-margin-right"></i>Nenad Kovacev</b></p><br/>
                    <img src="./img/slikaNK.jpg" className="w3-round w3-image w3-opacity w3-hover-opacity-off" alt="Photo of Me" width="400" height="300" />
                    </div>

                    <div className="w3-col m6 w3-hide-small w3-padding-large">
                    <p>... Prevario sam se. Na ovim poslediplomskim studijama otkrio sam draz programiranja, tu dinamiku koja "ozivljava sliku" i "pokrece masinu".
                        Odusevljen sam mogunostima koje poseduju programski jezici kao sto su Java, JavaSript, React ... <br/><br/>Uvideo sam da moj dizajn nije dobio kraj
                        vec je nasao svoj produzetak. Zelja mi je da se posvetim Beck End programiranju i time nadogradim vec postojece znanje koje imam u dizajnu.<br/><br/>
                        Verujem da ce mi JavaScript-ova biblioteka, React, pomoci u tome jer ima tako mnogo mogucnosti da UX/UI ucini profesionalnijim.<br/><br/>React
                        je programski jezik koji je zahtevan, ali nije tezak, zato se valja potruditi oko njega i prihvatiti sve benefite koje pruza. Njegovo najjace
                        oruzje je virtualni DOM koji omogucava brze tranzicije sa "stranice na stranicu", a u stvari medjusobne zamene komponenti na jednoj stranici 
                        sto u stvari i cini SPA - Single Page Application.   
                    </p>
                    </div>
                </div>
                <p className="w3-large w3-center w3-padding-16">Vestine kojima raspolazem:</p>
                <p className="w3-wide"><i className="fa fa-camera"></i>Dizajn</p>
                <div className="w3-light-grey">
                    <div className="w3-container w3-padding-small w3-dark-grey w3-center" style={{width: "90%"}}>90%</div>
                </div>
                <p className="w3-wide"><i className="fa fa-photo"></i>LESS</p>
                <div className="w3-light-grey">
                    <div className="w3-container w3-padding-small w3-dark-grey w3-center" style={{width: "85%"}}>85%</div>
                </div>
                <p className="w3-wide"><i className="fa fa-laptop"></i>React</p>
                <div className="w3-light-grey">
                    <div className="w3-container w3-padding-small w3-dark-grey w3-center" style={{width: "75%"}}>75%</div>
                </div>
                <p className="w3-wide"><i className="fa fa-laptop"></i>JavaScript</p>
                <div className="w3-light-grey">
                    <div className="w3-container w3-padding-small w3-dark-grey w3-center" style={{width: "65%"}}>65%</div>
                </div>
                <p className="w3-wide"><i className="fa fa-laptop"></i>Java</p>
                <div className="w3-light-grey">
                    <div className="w3-container w3-padding-small w3-dark-grey w3-center" style={{width: "55%"}}>55%</div>
                </div>
            </div>
            <div className="w3-row w3-center w3-dark-grey w3-padding-16">
                <div className="w3-quarter w3-section">
                    <span className="w3-xlarge">14+</span><br/>
                    Partnera
                </div>
                <div className="w3-quarter w3-section">
                    <span className="w3-xlarge">55+</span><br/>
                    Zavrsenih Projekata
                </div>
                <div className="w3-quarter w3-section">
                    <span className="w3-xlarge">89+</span><br/>
                    Zadovoljnih Klijenata
                </div>
                <div className="w3-quarter w3-section">
                    <span className="w3-xlarge">150+</span><br/>
                    Poslovnih Sastanaka
                </div>
            </div>
        </>
        );
    }
}

export default OMeni;