import React from 'react';
import { SkillLang, tools } from '../../assets/Data/icon';
import TechnoBar from './MySkill/TechnoBar';
import './SkillSection.scss';


const SkillSection = () => {
    return (
        <div className="skill_container">
            <div class="container skill_progress_bar">
                <div className="text-center">
                    <h2 class="contain_title text-dark">
                        My
                        <span className="text-white">Language</span>
                    </h2>
                </div>

                <div className="skill_overlay_bar mb-5">
                    {
                        SkillLang.map((data) =>
                            <div class="bar">
                                <svg>
                                    <circle cx='50%' cy='50%' r="50%"></circle>
                                </svg>
                                <h1><img src={data.icon} alt="" /><br />{data.pie}</h1>
                            </div>)
                    }
                </div>

                <TechnoBar />

                <div className="text-center mt-5">
                    <h2 class="contain_title text-dark">
                        My
                        <span className="text-white">Tools</span>
                    </h2>
                </div>
                <div className="skill_overlay_bar">
                    {
                        tools.map((data) =>
                            <div class="toolBar">
                                <svg>
                                    <circle cx='50%' cy='50%' r="50%"></circle>
                                </svg>
                                <h1><img src={data.icon} alt="" /><br />80%</h1>
                            </div>
                        )
                    }

                </div>
            </div>
        </div >
    );
};

export default SkillSection;