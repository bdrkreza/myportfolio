import React from 'react';
import './ProjectSideBar.scss'

const ProjectSideBar = () => {
    return (
        <div>
            <div class="container project_sideBar">
                <div class="heading">
                    <h1></h1>
                </div>
                <div className="project_overlay">
                    <div class="buttons">
                        <nav class="legend">
                            <label for="status-1">Tip 1</label>
                            <label for="status-2">Tip 2</label>
                            <label for="status-3">Tip 3</label>
                        </nav>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProjectSideBar;