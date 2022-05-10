import React from 'react';
import Banner from './Banner';
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
        </div>
    );
};

export default Home;