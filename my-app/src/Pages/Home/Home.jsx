import React from 'react'
import Navbar from './Components/navbar';
import Content from './Components/content';
import Carousel from './Components/Carousel/Carousel';
import Footer from './Components/Footer/Footer';
import "./Home.css"


export default function Home() {
    return (
        <>
        <Navbar/>
        <Content/>
        {/* <Carousel/> */}
        <Footer/>
        </>
    )
}
