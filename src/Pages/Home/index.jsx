import React from 'react'
import About from '../../Components/About/About'
import Avantages from '../../Components/Advantages/Avantages'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Inner from '../../Components/Inner/Inner'
import Recipes from '../../Components/Recipes/Recipes'
import TakeAwey from '../../Components/TakeAwey/TakeAwey'
import Testimonial from '../../Components/Testimonial/Testimonial'

const Home = () => {
  return (
   <>
     <Header/>
    <Inner/>
    <About/>
    <Avantages/>
    <Recipes/>
    <TakeAwey/>
    <Testimonial/>
    <Footer/>
   </>
  )
}

export default Home