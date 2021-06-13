
import React from 'react';
import './MySkill.scss'
import { SkillLang, technology, tools } from "../../../assets/Data/icon";
const MySkill = () => {
    return (
        <>
            <div className="skill_section">
                <div className="text-center">
                    <h2 class="contain_title text-dark">
                        My
                        <span>SKill</span>
                    </h2>
                </div>
                <div class="skill_overlay">
                    <div class="social-overlap process-scetion">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-md-10">
                                    <div class="social-bar">
                                        <div class="social-icons mb-3 text-center">
                                            <div className=" d-flex language_section">
                                                <h3>Language</h3>
                                                {
                                                    SkillLang.map((skill) =>
                                                        <div className="language_icon">
                                                            <a href="/" target="_blank" class="slider-nav-item">
                                                                <img src={skill.icon} alt="" />
                                                            </a>
                                                            <p >{skill.name}</p>
                                                        </div>
                                                    )
                                                }
                                            </div>

                                            <div className="d-flex language_section">
                                                <h3>Technical</h3>
                                                {
                                                    technology.map((tech) =>
                                                        <div>
                                                            <a href="/" target="_blank" class="slider-nav-item">
                                                                <img src={tech.icon} alt="" />

                                                            </a>
                                                            <p>{tech.name}</p>
                                                        </div>
                                                    )
                                                }
                                            </div>

                                            <div className="d-flex language_section">
                                                <h3>Tools</h3>
                                                {
                                                    tools.map((tool) =>
                                                        <div className="ml-5">
                                                            <a href="/" target="_blank" class="slider-nav-item">
                                                                <img src={tool.icon} alt="" />

                                                            </a>
                                                            <p>{tool.name}</p>
                                                        </div>
                                                    )
                                                }
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </>
    );
};

export default MySkill;