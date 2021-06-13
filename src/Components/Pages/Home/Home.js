import React from 'react';
import AboutSection from '../../AboutSection/AboutSection/AboutSection';
import ContactBanner from '../../ContactSection/ContactBanner/ContactBanner';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header/Header';
import ProjectSection from '../../ProjectSection/ProjectSection';
import Services from '../../Services/Services/Services';
import Testimonial from '../../Testimonial/Testimonial/Testimonial';
import TestimonialSection from '../../Testimonial/TestimonialSection/TestimonialSection';
import './Home.css'
const Home = () => {
    return (
        <div className="header">
            <Header />
            <AboutSection />
            <Services />
            <ProjectSection />
            <Testimonial />
            <ContactBanner />
            <Footer />
        </div>
    );
};

export default Home;