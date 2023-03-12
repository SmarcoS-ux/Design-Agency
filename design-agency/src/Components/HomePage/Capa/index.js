import React from "react";
import './style.css';

const Capa = (props) => {
    return(
        <div className={props.capa_teme}>
            <div id="image-post_light">
                <img src="/assets/banner.png" alt="Post" title="Post"/>
            </div>
            <div className="title-post">
                <p>BRANDINO / UI /UX / TECNOLOGIA</p>
                <h1>Agência de Branding 
                    <br/>
                    <span id="span-title">e Design Digital</span> 
                </h1>
            </div>
        </div> 
    );
}

export default Capa; 