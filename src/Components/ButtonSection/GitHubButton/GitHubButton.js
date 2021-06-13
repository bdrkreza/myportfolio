import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './GitHubButton.scss'
const GitHubButton = () => {
    return (
        <div className="d-flex ml-5 mt-2">
            <div class=" variation2 mr-5 pressed github_button">
                <a className="" target="_blank" href="https://github.com/bdrkreza/TribaRider">

                    <div class="github_icon text-center text-white">
                        <FontAwesomeIcon data-bs-toggle="tooltip" data-bs-placement="button" size="4x" icon={faGithub} />
                    </div>
                </a>
            </div>


            <div class="variation2 pressed github_button">
                <a href="https://github.com/bdrkreza/TribaRider" target="_blank" data-bs-toggle="tooltip" data-bs-placement="button">

                    <div class="github_icon text-center text-white" >
                        <FontAwesomeIcon size="4x" icon={faGithub} />
                    </div>
                </a>
            </div>
        </div>
    );
};

export default GitHubButton;