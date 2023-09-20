import React from 'react';
import About from '../Component/About/About';
import Contact from '../Component/Contact/Contact';
import Home from '../Component/Home/Home';
import Services from '../Component/Services/Services';
import Solution from '../Component/Solution/Solution';
import ScrollToTop from "react-scroll-to-top";
// import OurProduct from '../Component/OurProduct/OurProduct';
// import './Homepage.css';


const Homepage = () => {
    return (
        <div>
               <Home/>
            <About/> 
            <Solution/>
            <Services/>
            <Contact/>
            <ScrollToTop
            smooth
            color='White'
            style={{
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                alignItems:"center",
                height:36,
                background:'#002933',
                hover:"#fff"
            }}/>
        </div>
    );
};

export default Homepage;