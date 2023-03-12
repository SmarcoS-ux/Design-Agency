import React, {useState} from "react";
import './style.css';

const Header = (props) => {
    return(
        <header className={props.tema}>
            <div className="div-logo">
                <img src="/assets/logo.png" alt="Logo-Empresa" title="Logo-Empresa"/>
            </div>
            <div className="div-nav">
                <button className={props.button_teme} onClick={props.mudarTema}></button>
            </div>
        </header>
    ); 
}

export default Header;