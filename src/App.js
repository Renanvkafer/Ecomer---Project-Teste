import Navbar from "./components/navbar/Navbar";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from "./pages/loja";
import ShopCategory from "./pages/lojacategorias";
import Product from "./pages/produtos";
import React from "react";
import LoginSignup from "./pages/loginsetup";
import Cart from "./pages/Cart";
import Footer from "./components/Footer/Footer";
import men_banner from "./components/Assents/banner_mens.png"
import womem_banner from "./components/Assents/banner_women.png"
import kid_banner from "./components/Assents/banner_kids.png"


function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Shop/>}/>
                    <Route path='/Homem' element={<ShopCategory banner={men_banner} category="men"/>}/>
                    <Route path='/Mulher' element={<ShopCategory banner={womem_banner} category="women"/>}/>
                    <Route path='/Kids' element={<ShopCategory banner = {kid_banner} category="kid"/>}/>
                    <Route path='/Produtos' element={<Product/>}/>
                    <Route path='/:productId' element={<Product/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path="/login" element={<LoginSignup/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
