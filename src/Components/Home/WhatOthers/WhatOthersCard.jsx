import React from "react";

const WhatOthersCard = ({ open, testimony, close, img, name, title }) => {
  return (
    <div className="WhatOthersCard">
      <div className="body">
        <img src={open} alt="" className="open" /> <br />
        <p className="testimony">{testimony}</p>
        <img src={close} alt="" className="close" />
      </div>
      <div className="WhatOthersfooter">
        <img src={img} alt="" />
        <div className="content">
          <h6 className="name">{name}</h6>
          <p className="position">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default WhatOthersCard;
