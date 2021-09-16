
import React from 'react';
import bootstrapt from '../../../assets/tools/bootstrapt.png';
import MongoDB from '../../../assets/tools/mongodb.png';
import node from '../../../assets/tools/node.png';
import react from '../../../assets/tools/react.png';
import redux from '../../../assets/tools/redux.png';
import './TechnoBar.scss';


const TechnoBar = () => {
    return (
        <>
            <div className="text-center">
                <h2 class="contain_title text-dark">
                    My
                    <span className="text-white">Technology</span>
                </h2>
            </div>
            <div className="skill_overlay_bar">
                <div class="barr">
                    <svg>
                        <circle cx='50%' cy='50%' r="50%"></circle>
                    </svg>
                    <h1><img src={bootstrapt} alt="" /><br />80%</h1>
                </div>
                <div class="barr">
                    <svg>
                        <circle cx='50%' cy='50%' r="50%"></circle>
                    </svg>
                    <h1><img src={react} alt="" /><br />60%</h1>
                </div>
                <div class="barr">
                    <svg>
                        <circle cx='50%' cy='50%' r="50%"></circle>
                    </svg>
                    <h1><img src={node} alt="" /><br />30%</h1>
                </div>
                <div class="barr">
                    <svg>
                        <circle cx='50%' cy='50%' r="50%"></circle>
                    </svg>
                    <h1><img src={MongoDB} alt="" /><br />50%</h1>
                </div>
                <div class="barr">
                    <svg>
                        <circle cx='50%' cy='50%' r="50%"></circle>
                    </svg>
                    <h1><img src={redux} alt="" /><br />30%</h1>
                </div>
            </div>
        </>
    );
};

export default TechnoBar;