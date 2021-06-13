import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper/core';
import './Testimonial.scss'
import 'swiper/swiper-bundle.min.css';
import testimonial from '../../../assets/Data/testimonials';
import TestimonialCard from '../TestimonialCard/TestimonialCard';

SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Testimonial() {

    return (

        <div className="container">
            <h2 class="contain_title text-center">
                <br />

                <span>Testimonials</span>
                <h5 className="text-center"> see what our clients say about us </h5>
            </h2>

            <div className="projects__allItems">
                <Swiper
                    spaceBetween={30} centeredSlides={true} autoplay={{
                        "delay": 2500,
                        "disableOnInteraction": false
                    }} pagination={{
                        "clickable": true
                    }} navigation={true} className="swiper-slide"
                >
                    {testimonial.map((status) => {
                        console.log(status)

                        return (
                            <SwiperSlide key={status.id}>
                                <TestimonialCard status={status} />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>

    );
}
