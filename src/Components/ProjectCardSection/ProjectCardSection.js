import React from 'react';
import './ProjectCardSection.scss'
import img from '../../assets/Image/greenctg.jpg'
import img2 from '../../assets/Image/cavinimg1.jpg'
import img3 from '../../assets/Image/cointracker.jpg'
import { useState } from 'react';
import ProjectCardItem from '../ProjectCardItem/ProjectCardItem';
const ProjectCardSection = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div className='project_Card_section'>
            <div class="container d-flex">
                <div class="card">
                    <a onClick={() => setModalShow(true)}>
                        <div class="box">
                            <img src={img} alt="" />
                            <h6 className="Read_more_details">Read More</h6>
                        </div>
                    </a>
                </div>
                <ProjectCardItem
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />


                <div class="card">
                    <a href="/">
                        <div class="box">
                            <img src={img3} alt="" />
                            <h6 className="Read_more_details">Read More</h6>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCardSection;