import React from 'react'
import "./Projects.css";
import ProjectsCard from './ProjectsCard';


const Projects = () => {
  return (
    <section className="padding">
      <div className="Projects_text">
        <h2>
          Our <span>Projects</span>
        </h2>
        <p>
          Since inception, we at Dosh have provided our growing list of clients
          in the Education, Finance, Health and Agriculture industry with IT
          solutions focused on bringing their ideas to life. Our team comprises
          of developers, software engineers, data analyst, design thinkers and
          process analysts who are the best in their field, Our customers are
          our only priority; this is why we remain committed to delivering
          professional advice with the goal of making sure they get a high
          return on your investment.
        </p>
      </div>

      <div className="Projects_gallery">
        <div className="gallery_top">
          <div className="gallery_topic">
            <h3>Our Projects</h3>
            <p>We provide exclusive services for your business</p>
          </div>
          <div className="gallery_button">
            <span>Category:</span>
            <select name="" id="">
              <option value="">All</option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
        </div>
        
        <div className="project_card_container">
          <ProjectsCard />
        </div>
      </div>
    </section>
  );
}

export default Projects