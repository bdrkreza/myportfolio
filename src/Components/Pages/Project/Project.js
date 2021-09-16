import React from "react";
import projectData from "../../../assets/Data/projectData";
import Footer from "../../Footer/Footer";
import ProjectCardItem from "../../ProjectCardItem/ProjectCardItem";
import ProjectTopSection from "../../ProjectTopSection/ProjectTopSection";
import "./project.css";

const Project = () => {
  return (
    <div className="bg-dark">
      <section class="project-section">
        <ProjectTopSection />
        <div className="">
          {projectData.map((data) => (
            <ProjectCardItem data={data} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Project;
