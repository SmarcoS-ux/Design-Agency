import React, {useState} from "react";
import './style.css';

const Header = (props) => {

    let Tema_1 = "header_tema_1";
    let Tema_2 = "header_tema_2";

    let Button_1 = "button_1";
    let Button_2 = "button_2";

    const[tema, setTema] = useState(Tema_1);
    const[button_teme, setButton_teme] = useState(Button_1);

    function mudarTema(){
        if(tema == Tema_1){
            setTema(Tema_2);
            setButton_teme(Button_2);
        }else{
            setTema(Tema_1);
            setButton_teme(Button_1);
        }
    }


    return(
        <footer className={tema}>
            <div className="div-logo">
                <img src="/assets/logo.png" alt="Logo-Empresa" title="Logo-Empresa"/>
            </div>
            <div className="div-nav">
                <button className={button_teme} onClick={mudarTema}></button>
            </div>
        </footer>
    );
}

export default Header;