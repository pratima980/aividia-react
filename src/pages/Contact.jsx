import { useEffect } from "react";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import Contactmap from "../components/Conatct-map";
import Contactbanner from "../components/Contact-banner";
import Contactinfo from "../components/Contact-info";
import Contactform from "../components/Contact-form";

function Home() {
  useEffect(() => {
    document.title = "Contact Us | Aividia";

    const metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Get in touch with Aividia for AI solutions, web development, automation, digital transformation, and business growth services."
      );
    }
  }, []);

  return (
    <>
      <Navbar />
      <Contactbanner />
      <Contactinfo />
      <Contactform />
      <Contactmap />
      <Footer />
    </>
  );
}

export default Home;