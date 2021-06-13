import React from 'react';
import SubmitButton from '../../../ButtonSection/SubmitBotton/SubmitButton';
import Footer from '../../../Footer/Footer';
import ContactSection from '../ContactSection/ContactSection';
import Map from '../Map/Map';

const Contact = () => {
    return (
        <div className='contact_section'>
            <ContactSection />
            <Map />
            <Footer />
        </div>
    );
};

export default Contact;