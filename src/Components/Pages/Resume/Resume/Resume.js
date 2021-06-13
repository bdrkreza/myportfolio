import React from 'react';
import './Resume.css'
import profile from '../../../../assets/Image/profile2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMap } from '@fortawesome/free-regular-svg-icons';
import { faBook, faGamepad, faMapMarker, faMobile, faMobileAlt, faMusic } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faGithubSquare, faLinkedin, faPagelines, faWeebly } from '@fortawesome/free-brands-svg-icons';
const Resume = () => {
    return (
        <div className="resume_section">
            <div class="resume">
                <div class="resume_left">
                    <div class="resume_profile">
                        <img src={profile} alt="profile_pic" />
                    </div>
                    <div class="resume_content">
                        <div class="resume_item resume_info">
                            <div class="title">
                                <p class="bold h2">Rezaul Karim</p>
                                <p class="regular h5">Web Designer & developer</p>
                            </div>
                            <ul>
                                <li>
                                    <div class="icon">
                                        <i class="fas fa-map-signs">
                                            <FontAwesomeIcon size="lg" icon={faMapMarker} />
                                        </i>
                                    </div>
                                    <div class="data">
                                        Tesgaon, Dhaka <br /> Bangladesh
                                    </div>
                                </li>
                                <li>
                                    <div class="icon">
                                        <i class="fas fa-mobile-alt">
                                            <FontAwesomeIcon size="lg" icon={faMobileAlt} />
                                        </i>
                                    </div>
                                    <div class="data">
                                        (+088) 01789380336
                                    </div>
                                </li>
                                <li>
                                    <div class="icon">
                                        <i class="fas fa-envelope">
                                            <FontAwesomeIcon size="lg" icon={faEnvelope} />
                                        </i>
                                    </div>
                                    <div class="data">
                                        rkreza2020@gmail.com
                                    </div>
                                </li>
                                <li>
                                    <div class="icon">
                                        <i class="fab fa-weebly">
                                            <FontAwesomeIcon size="lg" icon={faWeebly} />
                                        </i>
                                    </div>
                                    <div class="data">
                                        <a target='_blank' href="https://rezulkarim.netlify.app/">www.rezaulKarim.com</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="resume_item resume_skills">
                            <div class="title">
                                <p class="bold">skill's</p>
                            </div>
                            <ul>
                                <li>
                                    <div class="skill_name">
                                        HTML
                                    </div>
                                    <div class="skill_progress">
                                        <span style={{ width: '80%' }}></span>
                                    </div>
                                    <div class="skill_per">80%</div>
                                </li>
                                <li>
                                    <div class="skill_name">
                                        CSS
                                    </div>
                                    <div class="skill_progress">
                                        <span style={{ width: '80%' }}></span>
                                    </div>
                                    <div class="skill_per">70%</div>
                                </li>
                                <li>
                                    <div class="skill_name">
                                        SASS
                                    </div>
                                    <div class="skill_progress">
                                        <span style={{ width: '30%' }}></span>
                                    </div>
                                    <div class="skill_per">30%</div>
                                </li>
                                <li>
                                    <div class="skill_name">
                                        JS
                                    </div>
                                    <div class="skill_progress">
                                        <span style={{ width: '50%' }}></span>
                                    </div>
                                    <div class="skill_per">50%</div>
                                </li>
                                <li>
                                    <div class="skill_name">
                                        React
                                    </div>
                                    <div class="skill_progress">
                                        <span style={{ width: '68%' }}></span>
                                    </div>
                                    <div class="skill_per">60%</div>

                                </li>
                                <li>
                                    <div class="skill_name">
                                        node js
                                    </div>
                                    <div class="skill_progress">
                                        <span style={{ width: '40%' }}></span>
                                    </div>
                                    <div class="skill_per">40%</div>
                                </li>
                                <li>
                                    <div class="skill_name">
                                        mongo DB
                                    </div>
                                    <div class="skill_progress">
                                        <span style={{ width: '50%' }}></span>
                                    </div>
                                    <div class="skill_per">50%</div>

                                </li>
                                <li>
                                    <div class="skill_name">
                                        React native
                                    </div>
                                    <div class="skill_progress">
                                        <span style={{ width: '40%' }}></span>
                                    </div>
                                    <div class="skill_per">40%</div>

                                </li>
                            </ul>
                        </div>
                        <div class="resume_item resume_social">
                            <div class="title">
                                <p class="bold">Social</p>
                            </div>
                            <ul>
                                <li>
                                    <div class="icon">
                                        <i class="fab fa-linkedin">
                                            <FontAwesomeIcon size="lg" icon={faLinkedin} />
                                        </i>
                                    </div>
                                    <div class="data">
                                        <p class="semi-bold">Linkedin</p>
                                        <a target="_blank" href="https://www.linkedin.com/in/rkreza2020/">
                                            <p>bdrkreza@linkedin</p>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div class="icon">
                                        <i class="square">
                                            <FontAwesomeIcon size="lg" icon={faGithubSquare} />
                                        </i>
                                    </div>
                                    <div class="data">
                                        <p class="semi-bold">Github</p>
                                        <a target="_blank" href="https://github.com/bdrkreza">
                                            <p>bdrkreza@Github</p>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div class="icon">
                                        <i class="fab-square">
                                            <FontAwesomeIcon size="lg" icon={faFacebookSquare} />
                                        </i>
                                    </div>
                                    <div class="data">
                                        <p class="semi-bold">Facebook</p>
                                        <a target="_blank" href="https://www.facebook.com/bdrkreza">
                                            <p>dbrkreza@facebook</p>
                                        </a>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div class="resume_right">
                    <div class="resume_item resume_about">
                        <div class="title">
                            <p class="bold">About us</p>
                        </div>
                        <p>To work in the IT sector of different local or multinational software
                            companies of Bangladesh as Front End Developer and grow rapidly with
                            latest technology and increasing responsibilities.</p>
                    </div>
                    {/* <div class="resume_item resume_work">
                        <div class="title">
                            <p class="bold">Work Experience</p>
                        </div>
                        <ul>
                            <li>
                                <div class="date">2013 - 2015</div>
                                <div class="info">
                                    <p class="semi-bold"></p>
                                    <p></p>
                                </div>
                            </li>
                            <li>
                                <div class="date">2015 - 2017</div>
                                <div class="info">
                                    <p class="semi-bold"></p>
                                    <p></p>
                                </div>
                            </li>
                            <li>
                                <div class="date">2017 - Present</div>
                                <div class="info">
                                    <p class="semi-bold"></p>
                                    <p></p>
                                </div>
                            </li>
                        </ul>
                    </div> */}
                    <div class="resume_item resume_education">
                        <div class="title">
                            <p class="bold">Education</p>
                        </div>
                        <ul>
                            <li>
                                <div class="date">2015 - 2019</div>
                                <div class="info">
                                    <p class="semi-bold">Bachelors of Computer Science & Engineering (BSc in CSE)</p>
                                    <p>Dhaka International University <br /> Dhaka</p>
                                </div>
                            </li>
                            <li>
                                <div class="date">2010 - 2014</div>
                                <div class="info">
                                    <p class="semi-bold">(Diploma) in computer science and engineering</p>
                                    <p>National Polytechnic Institute<br /> Dhaka</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="resume_item resume_hobby">
                        <div class="title">
                            <p class="bold">Hobby</p>
                        </div>
                        <ul>
                            <li>
                                <i class="fas fa-book">
                                    <FontAwesomeIcon size="lg" icon={faBook} />
                                </i>
                            </li>
                            <li><i class="fas fa-gamepad">
                                <FontAwesomeIcon size="lg" icon={faGamepad} />
                            </i></li>
                            <li><i class="fas fa-music">
                                <FontAwesomeIcon size="lg" icon={faMusic} />
                            </i></li>
                            <li><i class="fab fa-pagelines">
                                <FontAwesomeIcon size="lg" icon={faPagelines} />
                            </i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;