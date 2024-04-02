import React from 'react'
import Navbar from './Compnents/Navbar/Navbar'
import Hero from './Compnents/Hero/Hero'
import Programs from './Compnents/Programs/Programs'
import Title from './Compnents/Tilte/Title'
import About from './Compnents/About/About'
import Campus from './Compnents/Campus/Campus'
import Testimonial from './Compnents/Testimoials/Testimonial'
import Contact from './Compnents/Contact/Contact'
import Footer from './Compnents/Footer/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTilte='Our PROGRAM' title='What We Offer'/>
      <Programs/>
      <About/>
      <Title subTilte='Gallery' title='Campus Photos'/>
      <Campus/>
      <Title subTilte='TESTIMONIALS' title='What Student Says'/>
      <Testimonial/>
      <Title subTilte='Contact Us' title='Get in Touch'/>
      <Contact/>
      <Footer/>
      </div>
    </div>
  )
}

 export default App