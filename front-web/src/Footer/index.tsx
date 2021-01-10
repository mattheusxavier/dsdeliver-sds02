import './styles.css'

import { ReactComponent as Instagram } from './instagram.svg'
import { ReactComponent as Linkedin } from './linkedin.svg'
import { ReactComponent as Youtube } from './youtube.svg'

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.ssd.com" target="_new">
                    <Instagram/>
                </a>
                <a href="https://www.ssd.com" target="_new">
                    <Linkedin/>
                </a>
                <a href="https://www.ssd.com" target="_new">
                    <Youtube/>
                </a>
            </div>
        </footer>
    )
}

export default Footer