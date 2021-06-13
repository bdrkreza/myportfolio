import React, { useState } from 'react';
import './ProjectCardItem.scss'
import projects from '../../assets/Data/projects';
import { feature, tools } from '../../assets/Data/tools';
import ProjectLiveButton from '../ButtonSection/ProjectLiveButton/ProjectLiveButton';
import GitHubButton from '../ButtonSection/GitHubButton/GitHubButton';
import { Modal } from 'react-bootstrap';

const ProjectCardItem = (props) => {
    const [selectedIgm, setSelectedIgm] = useState(projects[0].img)
    return (
        <div className="project_container">
            <section class="project col-10">
                <div className='row'>
                    <div className='col-lg-6 col-md-12 col-sm-12'>
                        <div class="project__photo">
                            <div class="photo-container">
                                <div class="photo-main">
                                    <img src={selectedIgm} alt="green apple slice" />
                                </div>
                                <div class="photo-album">
                                    <div className="photo_img row">
                                        {
                                            projects.map((data, index) => (
                                                <div className="col-sm-12 col-md-4 col-lg-3">
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

                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div class="project_info">
                            <div className="project_title">
                                <h1>Project Information</h1>
                                <ul>
                                    <p>Title : tribaRider web-Application</p>
                                    <p>Technical Used :
                                        <span>
                                            {
                                                tools.map((tool) =>
                                                    <button type="button" class="btn btn-outline-secondary btn-sm">
                                                        {tool.name}
                                                    </button>
                                                )
                                            }
                                        </span>
                                    </p>

                                </ul>

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