import React from 'react';
import './App.css';

import Header from './Components/Header/';
import Footer from './Components/Footer/';
import Main from './Components/HomePage/Main';
import Capa from './Components/HomePage/Capa';
import SectionCards from './Components/HomePage/SectionCards';

function App() {
    return (
        <div className="App">
            <header>
                <Header/>
            </header>
            <main>
                <Capa/>
            </main>
            <footer>

            </footer>
        </div>
    );
}

export default App;
