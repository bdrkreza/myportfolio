import React from 'react';
import Button from '../ContactButton/Button';
import './ContactBanner.css'
const ContactBanner = () => {
    return (
        <div className="contact-banner">
            <h2 class="contain_title">
                <span className="text-light">Contact Me</span>
            </h2>
            <div className="contact-section">
                <div class="section">
                    <div class="contact-body-content">
                        <div className="text-center mt-4">
                            <h2>Have a project in mind</h2>
                            <h4>Let me help you</h4>
                            <Button />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ContactBanner;