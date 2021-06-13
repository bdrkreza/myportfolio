import React from 'react';
import ItemSlider from '../../../ProjectCardItem/ItemSlider';
import ProjectCardItem from '../../../ProjectCardItem/ProjectCardItem';
import ProjectCardSection from '../../../ProjectCardSection/ProjectCardSection';
import Footer from '../../../Footer/Footer'
import './ProjectCard.scss'
import projects from '../../../../assets/Data/projects';

const ProjectCard = () => {
    return (
        <div className="">
            <section class="c-section">
                <div class="Project_title">
                    <div className="c-section__title">
                        Our
                        <span>Project</span>
                    </div>
                </div>
                <div className="c-services">
                    {
                        projects.map((data) => <ProjectCardItem data={data} />)
                    }
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default ProjectCard;