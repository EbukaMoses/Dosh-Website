import React from "react";
import "./WhatWeDo.css";
import WhatWeDoCard from "./WhatWeDoCard";
import {HomeWhatWeDdo} from "../../../../Data.js";
import Button from "../../Common/Button.jsx";

const WhatWeDo = () => {
  return (
    <section className="padding">
      <div className="whatwedo">
        <h2>What we do?</h2>
        <p>We provide exclusive services for your business</p>
        <br />
        <div className="card_section">
          {HomeWhatWeDdo.map((card) => {
            return (
              <WhatWeDoCard
                key={card.id}
                icon={card.icon}
                num={card.num}
                title={card.title}
                text={card.text}
                link={card.link}
              />
            );
          })}
        </div>
        <Button link="" title="View more" />
      </div>
    </section>
  );
};

export default WhatWeDo;
