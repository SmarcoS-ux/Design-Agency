import React from "react";
import './style.css';

const Capa = (props) => {
    return(
        <footer className="capa">
            <div className={props.capa_teme}>
                <img src="/assets/banner.png" alt="Post" title="Post"/>
            </div>
            <div className="title">
                <p>BRANDINO / UI /UX / TECNOLOGIA</p>
                <h1>Agência de Branding
                    <br/>
                    <span>e Design Digital</span>
                </h1>
            </div>
        </footer>
    );
}

export default Capa;