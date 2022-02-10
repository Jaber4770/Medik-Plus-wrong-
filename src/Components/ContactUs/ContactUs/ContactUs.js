import React from 'react';
import FAQ from '../FAQ/FAQ';
import Helpline from '../Helpline/Helpline';
import OnlineTips from '../OnlineTips/OnlineTips';

const ContactUs = () => {
    return (
        <div>
            <Helpline></Helpline>
            <OnlineTips></OnlineTips>
            <FAQ></FAQ>
        </div>
    );
};

export default ContactUs;