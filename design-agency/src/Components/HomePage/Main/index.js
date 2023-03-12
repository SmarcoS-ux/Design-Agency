import React from "react";
import './style.css';

const Main = (props) => {
    return(
        <section className={props.main_teme}>
            <div className="experiencia">
                <h2>Experiência de Trabalho</h2>
                <div className="border-style"></div>
                <p>Há mais de 10 anos no mercado de Branding, Design Gráfico, 
                   Criação de Sites e Marketing Digital, nos empenhando 
                   diariamente para entregar resultados que tragam impactos 
                   aos nosso clientes</p>
            </div> 
            <div className="cards">
                <div className="card">
                    <p id="ano-exp">JUNHO 2012 - 2015</p>
                    <h3><span>Web Designer</span></h3>
                    <p id="empresa">Pied Piper StartUp</p>
                    <p>Criação de Landing pages, sites institucionais
                       e E-commerces completamente personalizados e otimizados 
                       para buscadores.</p>
                </div>
                <div id="card-main" className="card"> 
                    <p id="ano-exp">AGOSTO 2016 - 2019</p>
                    <h3><span>Product Designer</span></h3> 
                    <p id="empresa">E Corp</p>
                    <p>Criação de modelos estratégicos e conversão identificando
                       o cliente e mapeando toda a sua jornada de compra.</p>
                </div>
                <div className="card">
                    <p id="ano-exp">JUNHO 2019 - 2021</p>
                    <h3><span>Digital Consulting</span></h3>
                    <p id="empresa">Arasaka Inc</p>
                    <p>Consultoria em estratégias digitais para todas as
                       etapas do ciclo do projeto, desde a definição inicial 
                       até a execução.</p>
                </div> 

            </div>
        </section>
    );
}

export default Main;