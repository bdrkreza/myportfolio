import React from 'react';
import './MyResume.css'
const MyResume = () => {
    return (
        <div className="myresume_section">
            <article class="resume-wrapper text-center position-relative">
                <div class="resume-wrapper-inner mx-auto text-left bg-white shadow-lg">
                    <header class="resume-header pt-4 pt-md-0">
                        <div class="media flex-column flex-md-row">
                            <img class="mr-3 img-fluid picture mx-auto" src="assets/images/profile.jpg" alt="" />
                            <div class="media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0">
                                <div class="primary-info">
                                    <h1 class="name mt-0 mb-1 text-white text-uppercase text-uppercase">Mohamed Hegazi</h1>
                                    <div class="title mb-3">Civil Engineer, M.A.Sc, P.Eng.</div>
                                    <ul class="list-unstyled">
                                        <li class="mb-2"><a href="#"><i class="far fa-envelope fa-fw mr-2" data-fa-transform="grow-3"></i>mo.hegazi@gmail.com</a></li>
                                        <li><a href="#"><i class="fas fa-mobile-alt fa-fw mr-2" data-fa-transform="grow-6"></i>+1 519 722 7494</a></li>
                                    </ul>
                                </div>
                                <div class="secondary-info ml-md-auto mt-2">
                                    <ul class="resume-social list-unstyled">
                                        <li class="mb-3"><a href="#"><span class="fa-container text-center mr-2"><i class="fab fa-linkedin-in fa-fw"></i></span>linkedin.com/in/mohegazi</a></li>

                                        <li><a href="#"><span class="fa-container text-center mr-2"><i class="fas fa-globe"></i></span>yourwebsite.com</a></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </header>
                    <div class="resume-body p-5">
                        <section class="resume-section summary-section mb-5">
                            <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Career Summary</h2>
                            <div class="resume-section-content">
                                <p class="mb-0">A licensed Professional Engineer and project and task manager, I have received my Masters of Applied Science in Civil Engineering from the University of Waterloo. I work with State and Municipal clients to help them manage their pavement and infrastructure assets. I have been involved in a variety of pavement and infrastructure asset management projects. <br /><br /> This is done through developing investigational scopes of work, as well as geotechnical and structural analysis, design and cost analysis. I help clients estimate quantities for construction, evaluate the current state of their infrastructure, and assess future maintenance and rehabilitation budget allocations. I develop client-specific recommendations for roadway construction and maintenance.
          </p>
                            </div>
                        </section>
                        <div class="row">
                            <div class="col-lg-9">
                                <section class="resume-section experience-section mb-5">
                                    <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Work Experience</h2>
                                    <div class="resume-section-content">
                                        <div class="resume-timeline position-relative">
                                            <article class="resume-timeline-item position-relative pb-5">

                                                <div class="resume-timeline-item-header mb-2">
                                                    <div class="d-flex flex-column flex-md-row">
                                                        <h3 class="resume-position-title font-weight-bold mb-1">Pavement Management Engineer</h3>
                                                        <div class="resume-company-name ml-auto">Stantec Consulting</div>
                                                    </div>
                                                    <div class="resume-position-time">2018 - Present</div>
                                                </div>
                                                <div class="resume-timeline-item-desc">
                                                    <p>Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel.</p>
                                                    <h4 class="resume-timeline-item-desc-heading font-weight-bold">Achievements:</h4>
                                                    <p>Praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                                                    <ul>
                                                        <li>Lorem ipsum dolor sit amet, 80% consectetuer adipiscing elit.</li>
                                                        <li>At vero eos et accusamus et iusto odio dignissimos.</li>
                                                        <li>Blanditiis praesentium voluptatum deleniti atque corrupti.</li>
                                                        <li>Maecenas tempus tellus eget.</li>
                                                    </ul>
                                                    <h4 class="resume-timeline-item-desc-heading font-weight-bold">Skills used:</h4>
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item"><span class="badge badge-primary badge-pill">Project Management</span></li>
                                                        <li class="list-inline-item"><span class="badge badge-primary badge-pill">Client Relationship Management</span></li>
                                                        <li class="list-inline-item"><span class="badge badge-primary badge-pill">Prediction Modeling</span></li>
                                                        <li class="list-inline-item"><span class="badge badge-primary badge-pill">Software Implementation</span></li>
                                                        <li class="list-inline-item"><span class="badge badge-primary badge-pill">Engineering Consulting</span></li>
                                                        <li class="list-inline-item"><span class="badge badge-primary badge-pill">Consulting</span></li>
                                                    </ul>
                                                </div>

                                            </article>

                                            <article class="resume-timeline-item position-relative pb-5">

                                                <div class="resume-timeline-item-header mb-2">
                                                    <div class="d-flex flex-column flex-md-row">
                                                        <h3 class="resume-position-title font-weight-bold mb-1">Lead Software Implementation Specialist</h3>
                                                        <div class="resume-company-name ml-auto">Stantec Consulting</div>
                                                    </div>
                                                    <div class="resume-position-time">2014 - 2018</div>
                                                </div>
                                                <div class="resume-timeline-item-desc">
                                                    <p>Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel.</p>
                                                    <h4 class="resume-timeline-item-desc-heading font-weight-bold">Achievements</h4>
                                                    <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                                                    <h4 class="resume-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item"><span class="badge badge-primary badge-pill">React</span></li>
                                                        <li class="list-inline-item"><span class="badge badge-primary badge-pill">Redux</span></li>
                                                        <li class="list-inline-item"><span class="badge badge-primary badge-pill">Django</span></li>
                                                        <li class="list-inline-item"><span class="badge badge-primary badge-pill">Webpack</span></li>
                                                        <li class="list-inline-item"><span class="badge badge-primary badge-pill">HTML/SASS</span></li>
                                                        <li class="list-inline-item"><span class="badge badge-primary badge-pill">MySQL</span></li>
                                                    </ul>
                                                </div>

                                            </article>

                                            <article class="resume-timeline-item position-relative pb-5">

                                                <div class="resume-timeline-item-header mb-2">
                                                    <div class="d-flex flex-column flex-md-row">
                                                        <h3 class="resume-position-title font-weight-bold mb-1">Co-Founder & Lead Developer</h3>
                                                        <div class="resume-company-name ml-auto">To-do Lists</div>
                                                    </div>
                                                    <div class="resume-position-time">2012 - 2014</div>
                                                </div>
                                                <div class="resume-timeline-item-desc">
                                                    <p>Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec.</p>
                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
                                                    <h4 class="resume-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item"><span class="badge badge-primary badge-pill">Django</span></li>
                                                        <li class="list-inline-item"><span class="badge badge-primary badge-pill">JavaScript</span></li>
                                                        <li class="list-inline-item"><span class="badge badge-primary badge-pill">Node.js</span></li>
                                                        <li class="list-inline-item"><span class="badge badge-primary badge-pill">Require.js</span></li>
                                                        <li class="list-inline-item"><span class="badge badge-primary badge-pill">HTML/SASS</span></li>
                                                    </ul>
                                                </div>

                                            </article>

                                            <article class="resume-timeline-item position-relative">

                                                <div class="resume-timeline-item-header mb-2">
                                                    <div class="d-flex flex-column flex-md-row">
                                                        <h3 class="resume-position-title font-weight-bold mb-1">Web Developer <small class="text-muted">(Intern)</small></h3>
                                                        <div class="resume-company-name ml-auto">Amazon</div>
                                                    </div>
                                                    <div class="resume-position-time">2011 - 2012</div>
                                                </div>
                                                <div class="resume-timeline-item-desc">
                                                    <p>Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum.</p>
                                                    <h4 class="resume-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item"><span class="badge badge-primary badge-pill">Ruby on Rails</span></li>
                                                        <li class="list-inline-item"><span class="badge badge-primary badge-pill">jQuery</span></li>
                                                        <li class="list-inline-item"><span class="badge badge-primary badge-pill">HTML/LESS</span></li>
                                                        <li class="list-inline-item"><span class="badge badge-primary badge-pill">MongoDB</span></li>
                                                    </ul>
                                                </div>

                                            </article>


                                        </div>






                                    </div>
                                </section>
                            </div>
                            <div class="col-lg-3">
                                <section class="resume-section skills-section mb-5">
                                    <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Skills &amp; Tools</h2>
                                    <div class="resume-section-content">
                                        <div class="resume-skill-item">
                                            <h4 class="resume-skills-cat font-weight-bold">Frontend</h4>
                                            <ul class="list-unstyled mb-4">
                                                <li class="mb-2">
                                                    <div class="resume-skill-name">Angular</div>
                                                    <div class="progress resume-progress">
                                                        <div class="progress-bar theme-progress-bar-dark" role="progressbar" style={{ width: '98%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </li>
                                                <li class="mb-2">
                                                    <div class="resume-skill-name">React</div>
                                                    <div class="progress resume-progress">
                                                        <div class="progress-bar theme-progress-bar-dark" role="progressbar" style={{ width: "94%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </li>
                                                <li class="mb-2">
                                                    <div class="resume-skill-name">JavaScript</div>
                                                    <div class="progress resume-progress">
                                                        <div class="progress-bar theme-progress-bar-dark" role="progressbar" style={{ width: "96%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </li>

                                                <li class="mb-2">
                                                    <div class="resume-skill-name">Node.js</div>
                                                    <div class="progress resume-progress">
                                                        <div class="progress-bar theme-progress-bar-dark" role="progressbar" style={{ width: "92%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </li>
                                                <li class="mb-2">
                                                    <div class="resume-skill-name">HTML/CSS/SASS/LESS</div>
                                                    <div class="progress resume-progress">
                                                        <div class="progress-bar theme-progress-bar-dark" role="progressbar" style={{ width: "96%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <div class="resume-skill-item">
                                            <h4 class="resume-skills-cat font-weight-bold">Backend</h4>
                                            <ul class="list-unstyled">
                                                <li class="mb-2">
                                                    <div class="resume-skill-name">Python/Django</div>
                                                    <div class="progress resume-progress">
                                                        <div class="progress-bar theme-progress-bar-dark" role="progressbar" style={{ width: "95%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </li>
                                                <li class="mb-2">
                                                    <div class="resume-skill-name">Ruby/Rails</div>
                                                    <div class="progress resume-progress">
                                                        <div class="progress-bar theme-progress-bar-dark" role="progressbar" style={{ width: "92%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </li>
                                                <li class="mb-2">
                                                    <div class="resume-skill-name">PHP</div>
                                                    <div class="progress resume-progress">
                                                        <div class="progress-bar theme-progress-bar-dark" role="progressbar" style={{ width: "86%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </li>
                                                <li class="mb-2">
                                                    <div class="resume-skill-name">WordPress/Shopify</div>
                                                    <div class="progress resume-progress">
                                                        <div class="progress-bar theme-progress-bar-dark" role="progressbar" style={{ width: "82%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <div class="resume-skill-item">
                                            <h4 class="resume-skills-cat font-weight-bold">Others</h4>
                                            <ul class="list-inline">
                                                <li class="list-inline-item"><span class="badge badge-light">DevOps</span></li>
                                                <li class="list-inline-item"><span class="badge badge-light">Code Review</span></li>
                                                <li class="list-inline-item"><span class="badge badge-light">Git</span></li>
                                                <li class="list-inline-item"><span class="badge badge-light">Unit Testing</span></li>
                                                <li class="list-inline-item"><span class="badge badge-light">Wireframing</span></li>
                                                <li class="list-inline-item"><span class="badge badge-light">Sketch</span></li>
                                                <li class="list-inline-item"><span class="badge badge-light">Balsamiq</span></li>
                                                <li class="list-inline-item"><span class="badge badge-light">WordPress</span></li>
                                                <li class="list-inline-item"><span class="badge badge-light">Shopify</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>
                                <section class="resume-section education-section mb-5">
                                    <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Education</h2>
                                    <div class="resume-section-content">
                                        <ul class="list-unstyled">
                                            <li class="mb-2">
                                                <div class="resume-degree font-weight-bold">M.A.Sc in Civil Engineering</div>
                                                <div class="resume-degree-org">University of Waterloo</div>
                                                <div class="resume-degree-time">2014</div>
                                            </li>
                                            <li>
                                                <div class="resume-degree font-weight-bold">B.A.Sc Civil Engineering, Management Science Option</div>
                                                <div class="resume-degree-org">University of Waterloo</div>
                                                <div class="resume-degree-time">2011</div>
                                            </li>
                                        </ul>
                                    </div>
                                </section>
                                <section class="resume-section reference-section mb-5">
                                    <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Awards</h2>
                                    <div class="resume-section-content">
                                        <ul class="list-unstyled resume-awards-list">
                                            <li class="mb-2 pl-4 position-relative">
                                                <i class="resume-award-icon fas fa-trophy position-absolute" data-fa-transform="shrink-2"></i>
                                                <div class="resume-award-name">Award Name Lorem</div>
                                                <div class="resume-award-desc">Award desc goes here, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo.</div>
                                            </li>
                                            <li class="mb-0 pl-4 position-relative">
                                                <i class="resume-award-icon fas fa-trophy position-absolute" data-fa-transform="shrink-2"></i>
                                                <div class="resume-award-name">Award Name Ipsum</div>
                                                <div class="resume-award-desc">Award desc goes here, ultricies nec, pellentesque.</div>
                                            </li>
                                        </ul>
                                    </div>
                                </section>
                                <section class="resume-section language-section mb-5">
                                    <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Language</h2>
                                    <div class="resume-section-content">
                                        <ul class="list-unstyled resume-lang-list">
                                            <li class="mb-2"><span class="resume-lang-name font-weight-bold">English</span> <small class="text-muted font-weight-normal">(Native)</small></li>
                                            <li class="mb-2 align-middle"><span class="resume-lang-name font-weight-bold">Arabic</span> <small class="text-muted font-weight-normal">(Professional)</small></li>

                                        </ul>
                                    </div>
                                </section>
                                <section class="resume-section interests-section mb-5">
                                    <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Interests</h2>
                                    <div class="resume-section-content">
                                        <ul class="list-unstyled">
                                            <li class="mb-1">Aviation</li>
                                            <li class="mb-1">Photography</li>
                                            <li class="mb-1">Cinematography</li>
                                            <li class="mb-1">Cooking</li>
                                        </ul>
                                    </div>
                                </section>

                            </div>
                        </div>
                    </div>


                </div>
            </article>


        </div>
    );
};

export default MyResume;