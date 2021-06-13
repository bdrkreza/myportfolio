import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ProjectLiveButton.css'
const ProjectLiveButton = () => {
    return (
        <div>
            <a href="/" class="animated-button2 text-decoration-none  mt-4">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Demo Live
                <FontAwesomeIcon className="ml-2" icon={faExternalLinkSquareAlt} />
            </a>
        </div>
    );
};

export default ProjectLiveButton;