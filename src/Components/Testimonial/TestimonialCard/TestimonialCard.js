import React from 'react';
import ProjectImg from '../../../assets/Image/projectImg.png';
import './TestimonialCard.css'

export default function TestimonialCard({ status }) {
    const { desc, name, designation } = status
    return (
        <div className="testimonial_section">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-sm-12">
                        <div class="owl-carousel">
                            <div class="testimonial">
                                <div class="pic">
                                    <img src={ProjectImg} />
                                </div>
                                <h3 class="testimonial-title">
                                    <a href="#">{name}</a>
                                    <small className="text-secondary">-{designation}</small>
                                </h3>
                                <div class="testimonial-content">
                                    <p>{desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
