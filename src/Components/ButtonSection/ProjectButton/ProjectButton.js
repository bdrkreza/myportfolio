import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectButton.css'
const ProjectButton = () => {
    return (
        <div>
            <div class="Read_more">
                <button class="Read_more_btn">
                    <svg width="150px" height="50px" viewBox="0 0 180 60" class="Read_more_border">
                        <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
                        <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
                    </svg>
                    <Link to="/project">
                        <span className="read_more_btn">Project</span>
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default ProjectButton;