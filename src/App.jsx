import { useState } from "react";
import Home from "./componenets/Home";
import Services from "./componenets/Services";
import About from "./componenets/About";
import WhatWeDo from "./componenets/WhatWeDo";
import WhyChoseUs from "./componenets/WhyChoseUs";
import HowItWorks from "./componenets/HowItWorks";
import CallToAction from "./componenets/CallToAction";

import "./App.css";
import Portfolio from "./componenets/Portfolio";

function App() {
  return (
    <>
      <Home />
      <About />
      <Services />
      <WhatWeDo />
      <WhyChoseUs />
      <Portfolio />
      <HowItWorks />
      <CallToAction />
    </>
  );
}

export default App;
