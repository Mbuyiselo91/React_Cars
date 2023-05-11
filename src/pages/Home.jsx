import React from 'react'
import Header from '../components/Header'
import Slide from '../components/Slide'
import Card from '../components/Card'
// import MultCards from '../components/MultCards'
import Video from '../assets/Video'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Header/>
        <Slide/>
        <Card/>
        {/* <MultCards/> */}
        <Video/>
        <Footer/>
        </div>
      
  )
}

export default Home