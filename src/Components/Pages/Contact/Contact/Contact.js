import React from 'react';
import Footer from '../../../Footer/Footer';
import ContactFrom from '../ContactForm/ContactForm';
import Map from '../Map/Map';

const Contact = () => {
    return (
        <div className='contact_section'>
            <ContactFrom />
            <Map />
            <Footer />
        </div>
    );
};

export default Contact;