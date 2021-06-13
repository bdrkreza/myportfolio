import React from 'react';
import '../../../App.scss'
import './AboutSectionCard.css'
import img from '../../../assets/Image/about.png'
import ReadMore from '../../ButtonSection/ReadMore/ReadMore';
import { Link } from 'react-router-dom';
import ProjectButton from '../../ButtonSection/ProjectButton/ProjectButton';
const AboutSectionCard = () => {
    return (
        <div>
            <div className="text-center">
                <h2 class="contain_title">
                    <span>About Me</span>
                </h2>
            </div>
            <section class="container-fluid about_container">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="sub-text mt-5">
                                <h3>Let me Introduce Myself</h3>
                                <h2>ABOUT ME</h2>
                                <p>I am a freelance website designer and developer from Dhaka, Bangladesh. I create professional websites. I love art and always try to show unique views to the audience through my design.</p>
                            </div>
                            <div className="d-flex">
                                <Link to="/about">
                                    <ProjectButton />
                                </Link>
                                <Link to="/about">
                                    <ReadMore />
                                </Link>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div className='sub-list'>
                                <img src={img} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutSectionCard;