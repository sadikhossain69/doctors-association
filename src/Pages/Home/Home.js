import React from 'react';
import Banner from './Banner';
import Info from './Info'
import Services from './Services';
import Treatment from './Treatment';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Info/>
            <Services/>
            <Treatment/>
        </div>
    );
};

export default Home;