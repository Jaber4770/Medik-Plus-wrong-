import React from 'react';
import Appointment from '../Appointment/Appointment';
import ServiceBanner from '../ServiceBanner/ServiceBanner';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const h = () => {
    return (
        <div>
            <ServiceBanner></ServiceBanner>
            <Services></Services>
            <Appointment></Appointment>
            <Testimonials></Testimonials>
        </div>
    );
};

export default h;