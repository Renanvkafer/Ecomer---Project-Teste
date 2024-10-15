import React from 'react';
import './navbar.css';
import logo from '../Assents/logo.png';
import cart_icon from '../Assents/cart_icon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [menu,setMenu] = React.useState("shop");
    return (
        <div className="navbar">
            <div className='nav-logo'>
                <img src={logo} alt="Logo da loja" />
                <p></p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => {
                    setMenu("loja");
                }}>
                    <Link to="/">Loja</Link>
                    {menu === "loja" ? <h/> : <></>}
                </li>
                <li onClick={() => {

                    setMenu("Homem");
                }}>
                    <Link to="/home"> Homem </Link>
                     {menu === "Homem" ? <h/> : <></>}
                </li>
                <li onClick={() => {
                    setMenu("Mulher");
                }}>
                    <Link to="/Mulher"> Mulher</Link>
                    {menu === "Mulher" ? <h/> : <></>}
                </li>
                <li onClick={() => {
                    setMenu("Kids");
                }}>
                    <Link to="/Kids"> Kids</Link>
                     {menu === "Kids" ? <h/> : <></>}
                </li>

            </ul>
            <div className="nav-login-cart">
                <Link to="/login">
                    <button>Login</button>
                </Link>
                <Link to="/cart"><img src={cart_icon} alt="Ícone do carrinho"/></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    );
}

export default Navbar;
