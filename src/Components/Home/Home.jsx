import React from "react";
// import Navbar from "../Common/Navbar/Navbar";
import "./Home.css"
import Hero from "./Hero/Hero";
import WhoWeAre from "./WhoWeAre/WhoWeAre";
import WhatWeDo from "./WhatWeDo/WhatWeDo";
import OurProjects from "./OurProjects/OurProjects";
import WhatOthers from "./WhatOthers/WhatOthers";

const Home = () => {
  return (
    <>
        <Hero />
        <WhoWeAre />
        <WhatWeDo />
        <OurProjects />
        <WhatOthers />
    </>
  );
};

export default Home;
