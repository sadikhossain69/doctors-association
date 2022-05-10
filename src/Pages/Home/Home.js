import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Footer from './Footer';
import Info from './Info'
import MakeAppoinment from './MakeAppoinment';
import Services from './Services';
import Testimonials from './Testimonials';
import Treatment from './Treatment';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Info/>
            <Services/>
            <Treatment/>
            <MakeAppoinment/>
            <Testimonials/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;