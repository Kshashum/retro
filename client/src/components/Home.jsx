import React from 'react'
import background from '../background.jpeg'
import './Home.css'
import Product from './Product'
const Home = () => {
    return (
        <div className="home">
            <div className="home_container">
            <img src={background} alt="background" className="home_image"/>
            <div className="home_row">
                <Product name={"Transformers DVD"}
                productid={1500}
                shortDescription={"Transformers: Revenge of the Fallen: Two-Movie Mega Collection [2 Discs] - Wproductidescreen - DVD"}
                price={"175"}
                />
                <Product name={"Transformers DVD"}
                productid={2500}
                shortDescription={"Transformers: Revenge of the Fallen: Two-Movie Mega Collection [2 Discs] - Wproductidescreen - DVD"}
                price={"175"}
                />
                <Product name={"Transformers DVD"}
                productid={3500}
                shortDescription={"Transformers: Revenge of the Fallen: Two-Movie Mega Collection [2 Discs] - Wproductidescreen - DVD"}
                price={"175"}
                />
            </div>
            <div className="home_row">
            <Product name={"Transformers DVD"}
                productid={4500}
                shortDescription={"Transformers: Revenge of the Fallen: Two-Movie Mega Collection [2 Discs] - Wproductidescreen - DVD"}
                price={"175"}
                />
            <Product name={"Transformers DVD"}
                productid={5500}
                shortDescription={"Transformers: Revenge of the Fallen: Two-Movie Mega Collection [2 Discs] - Wproductidescreen - DVD"}
                price={"175"}
                />
            <Product name={"Transformers DVD"}
                productid={6500}
                shortDescription={"Transformers: Revenge of the Fallen: Two-Movie Mega Collection [2 Discs] - Wproductidescreen - DVD"}
                price={"175"}
                />
            <Product name={"Transformers DVD"}
                productid={7500}
                shortDescription={"Transformers: Revenge of the Fallen: Two-Movie Mega Collection [2 Discs] - Wproductidescreen - DVD"}
                price={"175"}
                />
            </div>
            <div className="home_row">
            <Product name={"Transformers DVD"}
                productid={8500}
                shortDescription={"Transformers: Revenge of the Fallen: Two-Movie Mega Collection [2 Discs] - Wproductidescreen - DVD"}
                price={"175"}
                />
            <Product name={"Transformers DVD"}
                productid={9500}
                shortDescription={"Transformers: Revenge of the Fallen: Two-Movie Mega Collection [2 Discs] - Wproductidescreen - DVD"}
                price={"175"}
                />
            </div>
            </div>
        </div>
    )
}

export default Home
