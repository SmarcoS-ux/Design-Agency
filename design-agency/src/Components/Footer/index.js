import React from "react";
import './style.css';

const Footer = (props) => {
    return(
        <footer className={props.footer_teme}>
            <div className="footer-logo">
                <img src="/assets/logo.png" alt="Logo da Empresa" title="Logo ds Empresa"/>
                <p>Ajudamos a criar uma personalidade digital construindo 
                   sua marca no ambiente onlineutilizando estratégias, ferramentas
                   e tecnologias personalizadas. 
                </p>
            </div> 
            <div className="redes-sociais">  
                <a href="https://www.facebook.com/" target="blank"><img src="/assets/facebook.png" alt="Facebook" title="Facebook" /></a>
                <a href="https://twitter.com/" target="blank"><img src="/assets/twitter.png" alt="Twitter" title="Twitter" /></a>
                <a href="https://www.linkedin.com/" target="blank"><img src="/assets/linkedin.png" alt="LinkeIn" title="LinkeId" /></a>
                <a href="https://dribbble.com/" target="blank"><img src="/assets/dribble.png" alt="Dribble" title="Dribble" /></a>
                <a href="https://www.behance.net/" target="blank"><img src="/assets/behance.png" alt="Behance" title="Behance" /></a> 
                <a href="https://www.google.com/intl/pt-BR/account/about/" target="blank"><img src="/assets/google-plus.png" alt="Google+" title="Google+" /></a>
            </div>        
            <div className="copyright">
                <p>Copyright 2023 @ <span>Marcos André</span></p>
            </div>
        </footer>
    );
}

export default Footer;