import React from 'react'
import './offers.css'
import exclusive_image from '../Assents/exclusive_image.png'

const Offers = () =>{
    return(
        <div className = 'offers'>
            <div className='offers-left'>
            <h1> Exclusivo</h1>
            <h1> Para Voce</h1>
            <p>  Ofertas Imperdiveis  </p>
            <button>Clique aqui</button>
        </div>
        <div className='offers-right'>
            <img src={exclusive_image} alt=""/>
        </div>
        </div>
    )
}

export default Offers