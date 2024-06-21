// import React from 'react';
import './Navbar.css';
import logo from '../Assets/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass, faUser, faChevronDown, faCartShopping ,faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';
import { humburger, first, sec} from '../Script/script';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';



const Navbar = () => {

    const {getTotalCartItems} = useContext(ShopContext);

    return (
        <>
        <header>
            <nav className='navbar' id='nav'>
                <div className='nav-links'>
                    <img src={logo} alt='' className='logo'/> 
                    <h2 className='logo-text'><span>GAMING</span> ACCESSORIES</h2>
                </div>
                <i className="fa-solid fa-bars menu-toggle"/>

                <div className="nav-bar">
                        <div className="search-box">
                            <input className="search-txt" type="text" placeholder="Type to Search"/>
                            <a href="#" className="search-btn"><FontAwesomeIcon icon={faMagnifyingGlass} /></a>
                        </div>

                        <ul className='nav' id='link-sec'>
                            <li><Link to='/'>Home</Link></li>
                            <li>
                                <div className='font-logo' onClick={first}>
                                    <div className='a'><FontAwesomeIcon icon={faUser} style={{marginRight: 5}}/>Flackooo 
                                    <FontAwesomeIcon icon={faChevronDown} style={{marginLeft: 5}}/></div>
                                    <div className='nav-cart-count'>{getTotalCartItems()}</div>
                                </div>

                                <ul className="first-nav-nav">
                                    <li><Link to='/Profile'><FontAwesomeIcon icon={faUser} style={{marginRight: 5}}/> Profile</Link></li>
                                    <li><Link to='/Cart'><FontAwesomeIcon icon={faCartShopping} style={{marginRight: 5}}/> Cart</Link>
                                    <div className='nav-sec-cart-count'>{getTotalCartItems()}</div></li>
                                    <li><Link to='/Login'><div className="logout" id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} style={{marginRight: 5}}/>Login</div></Link></li>
                                </ul>        
                            </li>
                        </ul>

                        <ul className="nav">
                            <li>
                                <div className="sec-font-logo" onClick={sec}>
                                    <div className='a'><FontAwesomeIcon icon={faProductHunt} style={{marginRight: 5}} /> Product List
                                        <FontAwesomeIcon icon={faChevronDown} style={{marginLeft: 5}}/>
                                    </div>
                                </div>
                                <ul className="sec-nav-nav">
                                    <li className=""><Link to='/Keyboard'>Keyboard</Link></li>
                                    <li className=""><Link to='/Headset'>Headset</Link></li>
                                    <li className=""><Link to='/Mouse'>Mouse</Link></li>
                                    <li className=""><Link to='/PsController'>PS Controller</Link></li>
                                    <li className=""><Link to='/Microphone'>Microphone</Link></li>
                                </ul>
                            </li>
                        </ul>
                </div>

                <div className="humburger" onClick={humburger}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </nav>
        </header>

        <div className="nav-bar">
            <ul className="link-container">
            <li className=""><a href=""><Link to='/Keyboard'>Keyboard</Link></a></li>
                <li className=""><a href=""><Link to='/Headset'>Headset</Link></a></li>
                <li className=""><a href="" ><Link to='/Mouse'>Mouse</Link></a></li>
                <li className=""><a href=""><Link to='/PsController'>PS Controller</Link></a></li>
                <li className=""><a href=""><Link to='/Microphone'>Microphone</Link></a></li>
            </ul>
        </div>
        </>
    );
}

export default Navbar