import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';

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
                                            <li><Link href="">Home</Link></li>
                                            <li><Link href="">About</Link></li>
                                            <li><Link href="">Projects</Link></li>
                                            <li><Link href="">Contact</Link></li>
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
                                <a href="/">
                                    <i class="fa fa-linkedin"></i>
                                </a>
                                <a href="/">
                                    <i class="fa fa-github-square"></i>
                                </a>
                                <a href="/">
                                    <i class="fa fa-facebook"></i>
                                </a>
                                <a href="/">
                                    <i class="fa fa-twitter"></i>
                                </a>
                                <a href="/">
                                    <i class="fa fa-youtube"></i>
                                </a>
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