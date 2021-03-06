import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import TipAndNews from '../RecentTipAndNews/TipAndNews';
import Services from '../Services/Services';
import SpecializedDoctors from '../SpecializedDoctors/SpecializedDoctors';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SpecializedDoctors></SpecializedDoctors>
            <Services></Services>
            <Contact></Contact>
            <TipAndNews></TipAndNews>
        </div>
    );
};

export default Home;