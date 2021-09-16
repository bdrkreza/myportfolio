import React from 'react';
import AboutHeader from '../../AboutHeader/AboutHeader';
import ContactBanner from '../../ContactSection/ContactBanner/ContactBanner';
import Footer from '../../Footer/Footer';
import SkillSection from '../../SkillSection/SkillSection';
import './About.scss';


const About = () => {
    return (
        <div className="about_section">
            <AboutHeader />
            <SkillSection />
            <ContactBanner />
            <Footer />
        </div>
    );
};

export default About;