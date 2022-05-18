import React, { useState } from 'react'
import "./Nabvar.scss"
import {AiOutlineLeft  } from "@react-icons/all-files/ai/AiOutlineLeft";
import { Link, useLocation, useParams } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const nav = location.pathname.slice(1);
    const [active,setActive] = useState("about");
  return (
    <div className='navbar__container'>
        <nav className="navbar">
            <div className="navbar__content">
                <AiOutlineLeft className='left__icon' />
                <a href="/" className='logo'>
                    <img src="https://app.gala.games/_nuxt/img/gala-logo_horizontal_white.8b0409c.png" alt="" />
                </a>
                <div className="spacer"></div>
                <div className="navbar__items">
                    <Link to="/">
                    <a  className={`${nav === "" ? "active" : ""}`}>
                        <span>About</span>
                    </a>
                    </Link>
                    <Link to="/store">
                    <a  className={`${nav === "store" ? "active" : ""}`}>
                        <span>Store</span>
                    </a>
                    </Link>
                    <Link to="/games">
                    <a className={`${nav === "games" ? "active" : ""}`}>
                        <span>Game</span>
                    </a>
                    </Link>
                    <Link to="/nodes">
                    <a  className={`${nav === "nodes" ? "active" : ""}`}>
                        <span>Nodes</span>
                    </a>
                    </Link>
                    <Link to="/gala">
                    <a className={`${nav === "gala" ? "active" : ""}`}>
                        <span>Get GALA</span>
                    </a>
                    </Link>
                    <Link to="/careers">
                    <a className={`${nav === "careers" ? "active" : ""}`}>
                        <span>Carrers</span>
                    </a>
                    </Link>
                </div>
                <div className="discord">
                    <img src="https://app.gala.games/_nuxt/img/Discord-Logo-White.28174a3.png" alt="" />
                    <span>Join Discord</span>
                </div>
                <div className="hidden__div"></div>
                <div className="auth__buttons">
                    <button className='btn register__btn'>Register</button>
                    <button className='btn login__btn'>Login</button>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar