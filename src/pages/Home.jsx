import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Home() {
  useEffect(() => {
    document.title = "Aividia | AI Solutions, Web Development & Automation";

    const metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Aividia delivers AI solutions, custom web development, automation, digital transformation, and innovative technology services to help businesses grow."
      );
    }
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <TechStack />
      <Services />
      <Testimonial />
      <CTA />
      <Footer />
    </>
  );
}

export default Home;