// import React from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGoogle, faYoutube, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Footer.css';


const Footer = () => {
    return (
        <>
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h1 className="logo-text"><span>Gaming</span> Accessories</h1>
                    <p>
                        Unite gamers of diverse backgrounds to achieve their potential together in play. Through innovative technology and exceptional experiences, we can push boundaries to create a world without limits.
                        </p>
                        <div className="contact">
                            <span><FontAwesomeIcon icon={faPhone} /> &nbsp; 0966-410-0021</span>
                            <span><FontAwesomeIcon icon={faEnvelope} /> &nbsp; rovicvillaueva15@gmail.com</span>
                        </div>
                        <div className="socials">
                            <Link to='/Social'><FontAwesomeIcon icon={faFacebook}/></Link>
                            <Link to='/Social'><FontAwesomeIcon icon={faTwitter}/></Link>
                            <Link to='/Social'><FontAwesomeIcon icon={faGoogle}/></Link>
                            <Link to='/Social'><FontAwesomeIcon icon={faYoutube}/></Link>
                            <Link to='/Social'><FontAwesomeIcon icon={faLinkedin}/></Link>

                        </div>
                    </div>
                            <div className="footer-section contact-form">
                        <h2>Contact us</h2>
                        <form action="index.html" method="POST">
                            <div className="contact-us">
                                <input type="email" className="text-input contact-input" placeholder="Your Email Address"/>
                                <textarea name="message" className="message-text contact-input" placeholder="Your Message"></textarea>
                            </div>
                            <div className="send-button">
                                <button className="btn btn-big contact-btn"><FontAwesomeIcon icon={faEnvelope} style={{marginRight: 5}}/>Send</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>copyright &copy;2024 Gaming Accessories.</p>
                </div>
        </footer>
        </>
    )
}

export default Footer