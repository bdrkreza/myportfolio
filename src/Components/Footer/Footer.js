import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
import { faFacebookSquare, faGithubSquare, faInstagramSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <>
            <footer className="footer_section mt-5">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 col-lg-7 order-lg-2">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="footer-widget">
                                        <h2>Important Links</h2>
                                        <ul>
                                            <li><Link to="/home">Home</Link></li>
                                            <li><Link to="/about">About</Link></li>
                                            <li><Link to="/project">Projects</Link></li>
                                            <li><Link to="/contact">Contact</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="footer-widget">
                                        <h2>Contact Info</h2>
                                        <ul>
                                            <li><a href="/">+8801632020202</a></li>
                                            <li><a href="/">rkreza2020@gamil.com</a></li>
                                            <li><a href="/">Indira Road,Tejgaon,Dhaka</a></li>
                                            <li><a href="/">Bangladesh</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-5 order-lg-1">
                            <h1>Rezaul Karim</h1>
                            <p>A freelance web designer and developer from Chittagong, Bangladesh. I always make websites that have unique designs and also has a good performance rate.</p>
                            <img src="img/logo.png" alt="" />
                            <div class="social-links">
                                <ul class="social-media-list">
                                    <a href="https://www.linkedin.com/in/rkreza2020/" target="_blank" class="contact-icon">
                                        <li>
                                            <a href="">
                                                <FontAwesomeIcon size="lg" icon={faGithubSquare} />
                                            </a>
                                        </li>
                                    </a>

                                    <a href="https://github.com/bdrkreza" target="_blank" rel="noopener noreferrer">
                                        <li>
                                            <a href="" target="_blank" class="contact-icon">
                                                <FontAwesomeIcon size="lg" icon={faLinkedin} />
                                            </a>
                                        </li>
                                    </a>
                                    <a href="https://www.facebook.com/bdrkreza" target="_blank" rel="noopener noreferrer">
                                        <li>
                                            <a href="" target="_blank" class="contact-icon">
                                                <FontAwesomeIcon size="lg" icon={faFacebookSquare} />
                                            </a>
                                        </li>
                                    </a>
                                    <li><a href="#" target="_blank" class="contact-icon">
                                        <FontAwesomeIcon size="lg" icon={faInstagramSquare} />
                                    </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div class="copyright text-center py-3">
                Copyright &copy;All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="/" target="_blank">RK</a>
            </div>
        </>
    );
};

export default Footer;