import React from 'react';
import AboutBanner from '../AboutBanner/AboutBanner';
import Doctors from '../Doctors/Doctors';
import Gym from '../Gym/Gym';
import Pharmacy from '../Pharmacy/Pharmacy';

const AboutUs = () => {
    return (
        <div>
            <AboutBanner></AboutBanner>
            <Doctors></Doctors>
            <Gym></Gym>
            <Pharmacy></Pharmacy>
        </div>
    );
};

export default AboutUs;