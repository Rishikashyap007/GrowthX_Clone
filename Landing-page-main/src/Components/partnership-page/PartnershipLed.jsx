import { useState } from "react";
import Partnership from "./components/partnership";
import FAQ from "./components/faq";

import "./PartnershipLed.css";
import Footer from "./components/footer";
import Session from "./components/session";
import Testinomial from "./components/testimonial";
import VideoPlayer from "./components/videoplayer";
import Hero from "./components/herosection";
import Content from "./components/content";

function App() {

  return (

    <>
      <Partnership />
        <Session />
        <Testinomial />
        <Hero/>
        <VideoPlayer />
         <Content />
         <FAQ />
         {/* <Footer /> */}
    </>
  );
}

export default App;
