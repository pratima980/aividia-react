import { useEffect } from "react";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import ABOUTBANNER from "../components/About-banner";
import Aboutmiddle from "../components/About-middle";
import Process from "../components/Process";
import Team from "../components/Team";

function About() {
  useEffect(() => {
    document.title = "About Us | Aividia";

    const metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Learn about Aividia, our mission, expert team, development process, and commitment to delivering innovative AI, web, and digital solutions."
      );
    }
  }, []);

  return (
    <>
      <Navbar />
      <ABOUTBANNER />
      <Aboutmiddle />
      <Process />
      <Team />
      <Footer />
    </>
  );
}

export default About;