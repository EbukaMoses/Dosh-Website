import React from "react";
import "./WhatOthers.css";
import { Testimony } from "../../../../Data.js";
import WhatOthersCard from "./WhatOthersCard.jsx";

const WhatOthers = () => {
  return (
    <section className="WhatOthers padding">
      <div className="WhatOthers2">
        <h1>What Others Have To Say</h1>
        <p>We provide exclusive services for your business</p>

        <div className="cardSection">
          {Testimony.map((card) => {
            return (
              <WhatOthersCard
                key={card.id}
                open={card.open}
                testimony={card.testimony}
                close={card.close}
                img={card.img}
                name={card.name}
                title={card.title}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatOthers;
