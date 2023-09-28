import "./Footer.css"

const Footer = () => {
    return <footer className="footer" style={{backgroundImage : "url(/img/footer.png)"}}>
        <div className="redes">
            <a href="https://www.linkedin.com/in/erickleogs/">
                <img src="/img/linkedin.png" alt="LinkedIn"/>
            </a>
            <a href="https://github.com/ericklgs" >
                <img src="/img/github.png" alt="GitHub" />
            </a>
            <a href="https://www.google.com/" >
                <img src="/img/site.png" alt="Portafolio" />
            </a>
        </div>
        <img src="/img/Logo.png" alt="org" />
        <strong>Desarrollado por Erick</strong>
    </footer>

}

export default Footer