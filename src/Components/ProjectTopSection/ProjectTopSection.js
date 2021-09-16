import React from "react";
import "./ProjectTopSection.scss";
export default function ProjectTopSection() {
  return (
    <div className="project-top-section">
      <div className="project-banner">
        <div>
          <h2 class="contain_title">
            <span className="text-light">Our Project</span>
          </h2>
        </div>
        <div class="project_content_section">
            <div class="top_frame">
              <a href="#" class="top_btn">
                <i class="fas fa-backward"></i>
                <h5>All</h5>
              </a>
              <a href="#" class="top_btn">
                <i class="fas fa-play"></i>
            <h4>web</h4>
              </a>
              <a href="#" class="top_btn">
                <i class="fas fa-forward"></i>
                <h4>app</h4>
              </a>
            </div>
          </div>
        </div>
      </div>
  );
}
