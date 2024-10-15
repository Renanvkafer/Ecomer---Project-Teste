import React from 'react'
import './NewsLetter.css'

const NewsLetters = () => {
    return (
        <div className="newsletter-container">
            <div className="newsletter-content">
            <div className="newsletter">
                <h1>Promoções especiais</h1>
                <p>Se inscreva para receber promoções</p>
                <div>
                    <input type="email" placeholder="seu email"/>
                    <button>Se inscreva</button>
                </div>
            </div>
        </div>
        </div>     

    )
}

export default NewsLetters
