import React from "react";
import ARROW from "/images/arrow.png";
import PEBBLES from "/images/Pebbles.png";

const ProjectsCard = () => {
  return (
    <div className="project_card flex">
      <div className="project_img">
        <img src={PEBBLES} alt="" />
      </div>

      <div className="project_footer flex">
        <div className="project_footer_content">
          <h6>Pebbles Signature </h6>
          <p>Corporate Website</p>
        </div>

        <div className="project_footer_btn">
          <span>
            Go to website <img src={ARROW} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
