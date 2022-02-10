import React from 'react';
import ContactBanner from '../ContactBanner/ContactBanner';
import FAQ from '../FAQ/FAQ';
import Helpline from '../Helpline/Helpline';
import OnlineTips from '../OnlineTips/OnlineTips';

const ContactUs = () => {
    return (
        <div>
            <ContactBanner></ContactBanner>
            <Helpline></Helpline>
            <OnlineTips></OnlineTips>
            <FAQ></FAQ>
        </div>
    );
};

export default ContactUs;