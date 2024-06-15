import React from "react";
import Banner from "./Banner";
import WhyUs from "./WhyUs";
import ContactUs from "./ContactUs";
import About from "./About";

const MainSection = () => {
  return (
    <main>
      <Banner />
      <About />
      <WhyUs />
      <div id="contact">
        <ContactUs />
      </div>
    </main>
  );
};

export default MainSection;
