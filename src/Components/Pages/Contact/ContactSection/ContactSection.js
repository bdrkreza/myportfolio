import { faFacebookSquare, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarked, faMapMarkedAlt, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import SubmitButton from '../../../ButtonSection/SubmitBotton/SubmitButton';
import './ContactSection.css'
const ContactSection = () => {
    return (
        <>
            <div className='contact-container'>
                <div className="mt-5">
                    <div className="contact_heading">
                        <h1 className="text-dark text-center">get in touch</h1>
                        <h1 class="section-header">CONTACT</h1>
                    </div>
                    <section id="contact">
                        <div class=" row">
                            <div className=" col-lg-6 col-md-12 col-sm-12">
                                <form class="contact-form" role="form">
                                    <div class="contact-box">
                                        <div class="c-inputs">
                                            <form>
                                                <input type="text" placeholder="Full Name" />
                                                <input type="email" placeholder="Example@gmail.com" />
                                                <textarea name="message" placeholder="Write Message"></textarea>
                                                <br />
                                                <button>SEND</button>

                                            </form>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className="col-lg-6 col-md-12 col-sm-12">

                                <div class="direct-contact-container">
                                    <div className="row">
                                        <div>
                                            <ul class="contact-list">
                                                <li class="list-item">
                                                    <FontAwesomeIcon size="2x" icon={faMapMarker} />
                                                    <span class="contact-text place">Dhaka, Bangladesh</span>
                                                </li>

                                                <li class="list-item">
                                                    <FontAwesomeIcon size="lg" icon={faPhone} />
                                                    <span class="contact-text phone">
                                                        <a href="tel:1-212-555-5555" title="Give me a call">
                                                            (+088) 01789380336</a>
                                                    </span>
                                                </li>

                                                <li class="list-item">
                                                    <FontAwesomeIcon size="lg" icon={faEnvelope} />
                                                    <span class="contact-text gmail">
                                                        <a href="mailto:#" title="Send me an email">rkreza2020@gmail.com</a>
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                        <hr />

                                        <ul class="social-media-list">
                                            <li><a href="#" target="_blank" class="contact-icon">
                                                <FontAwesomeIcon size="lg" icon={faGithub} /> </a>
                                            </li>
                                            <li><a href="#" target="_blank" class="contact-icon">
                                                <FontAwesomeIcon size="lg" icon={faLinkedin} />
                                            </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank" class="contact-icon">
                                                    <FontAwesomeIcon size="lg" icon={faFacebookSquare} />
                                                </a>
                                            </li>
                                            <li><a href="#" target="_blank" class="contact-icon">
                                                <FontAwesomeIcon size="lg" icon={faInstagram} />
                                            </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default ContactSection;