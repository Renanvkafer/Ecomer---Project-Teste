import React from 'react';
import Hero from "../components/Hero/hero"
import Popular from "../components/popular/Popular"
import NewCollections from "../components/NewCollection/NewCollections"
import NewLetters from "../components/NewsLetter/NewLetters"

const Shop = () =>{
    return(
        <div>
          <Hero/>
          <Popular/>
          <NewCollections />
            <NewLetters/>     
            </div>
            
            
    )
}

export default Shop