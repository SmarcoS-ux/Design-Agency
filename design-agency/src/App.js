import React, {useState} from 'react';
import './App.css';

import Header from './Components/Header/';
import Footer from './Components/Footer/';
import Main from './Components/HomePage/Main';
import Capa from './Components/HomePage/Capa';

function App() {

    let Tema_1 = "header_tema_1";
    let Tema_2 = "header_tema_2";

    let Tema_Capa_1 = "capa_1";
    let Tema_Capa_2 = "capa_2";

    let Tema_Main_1 = "main_1";
    let Tema_Main_2 = "main_2";

    let Tema_Footer_1 = "footer_1";
    let Tema_Footer_2 = "footer_2";

    let Button_1 = "button_1";
    let Button_2 = "button_2";

    const[tema, setTema] = useState(Tema_1);
    const[tema_capa, setTema_capa] = useState(Tema_Capa_1);
    const[tema_main, setTema_main] = useState(Tema_Main_1);
    const[tema_footer, setTema_Footer] = useState(Tema_Footer_1);
    const[button_teme, setButton_teme] = useState(Button_1);
    

    function mudarTema(){
        if(tema == Tema_1){
            setTema(Tema_2);
            setButton_teme(Button_2);
            setTema_capa(Tema_Capa_2);
            setTema_main(Tema_Main_2);
            setTema_Footer(Tema_Footer_2);
        }else{
            setTema(Tema_1);
            setButton_teme(Button_1);
            setTema_capa(Tema_Capa_1);
            setTema_main(Tema_Main_1);
            setTema_Footer(Tema_Footer_1);
        }
    }

    return(
        <div className="App">
            <header>
                <Header
                    tema={tema}
                    button_teme={button_teme}
                    mudarTema={mudarTema}/>
            </header>
            <main>
                <Capa
                    capa_teme={tema_capa}/>
                <Main
                    main_teme={tema_main}/>
            </main>
            <footer>
                <Footer
                    footer_teme={tema_footer}/>
            </footer>
        </div>
    );
}

export default App;
