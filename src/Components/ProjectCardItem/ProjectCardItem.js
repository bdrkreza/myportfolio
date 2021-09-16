import React, { useState } from 'react';
import projectData from '../../assets/Data/projectData';
import { feature, tools } from '../../assets/Data/tools';
import GitHubButton from '../ButtonSection/GitHubButton/GitHubButton';
import ProjectLiveButton from '../ButtonSection/ProjectLiveButton/ProjectLiveButton';
import './ProjectCardItem.scss';


const ProjectCardItem = (props) => {
    const [selectedIgm, setSelectedIgm] = useState(projectData[0].img)
    return (
        <div className="project_container">
            <section class="project container-fluid mb-5">
                <div className='row'>
                    <div className='col-lg-6 col-md-12 col-sm-12'>
                        <div class="project__photo">
                            <div class="photo-container">
                                <div class="photo-main">
                                    <img src={selectedIgm} alt="green apple slice" />
                                </div>
                                <div class="photo-album">
                                    <div className="row">
                                {
                                            projectData.map((data, index) => (
                                                <div className="col">
                                                    <img src={data.img} alt="green apple"
                                                        style={{ border: selectedIgm === data.img ? "2px solid #0a183d" : "" }}
                                                        key={index}
                                                        onClick={() => setSelectedIgm(data.img)}
                                                    />
                                                </div>
                                            ))
                                        }

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 col-sm-12 mt-4">
                        <div class="project_info">
                            <div className="feature_outline">
                               <div className="project_title">
                               <h1>Project Information</h1>
                                <ul>
                                    <p>Title : tribaRider web-Application</p>
                                    <p>Technical Used :
                                        <span className="project_btn" >
                                            {
                                                tools.map((tool) =>
                                                    <button type="button" class=" project_btn btn btn-outline-secondary btn-sm">
                                                        {tool.name}
                                                    </button>
                                                )
                                            }
                                        </span>
                                    </p>
                                </ul>
                               </div>
                            </div>

                            <div className="d-flex">
                                <ProjectLiveButton />
                                <GitHubButton />
                            </div>

                            <div className="feature_outline feature_outline_pressed">
                                <div class="description project_description">
                                    <h3>FEATURE</h3>
                                    <ul>
                                        {
                                            feature.map((feature) => <li>{feature.feature}</li>)
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default ProjectCardItem;