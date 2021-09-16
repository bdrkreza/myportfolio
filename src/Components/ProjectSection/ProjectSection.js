import React from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import projectData from '../../assets/Data/projectData';
import ProjectItem from './ProjectItem';
import './ProjectSection.css';



SwiperCore.use([Navigation]);
export default function ProjectSection() {
  return (
    <div className="project-section">
      <div className="container">
        <h2 class="contain_title text-center">
          <h5 className="text-center text-white">
            some of my recent works
          </h5>
          <span className="text-secondary">PROJECTS</span>
        </h2>
        <div className="projects__allItems ">
          <div class="overlay">
            <Swiper
              spaceBetween={15}
              slidesPerView={1}
              navigation
              breakpoints={{
                // when window width is >= 640px
                640: {
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 2,
                },
                // when window width is >= 1200px
                1200: {
                  slidesPerView: 3,
                },
              }}
            >
              {projectData.map((projectData, index) => {
                if (index >= 5) return;
                return (
                  <SwiperSlide key={projectData.id}>
                    <ProjectItem data={projectData} />
                  </SwiperSlide>

                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>

  );
}
