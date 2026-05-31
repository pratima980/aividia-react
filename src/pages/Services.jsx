import { useEffect } from "react";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import Servicemiddle from "../components/Services-middle";
import Servicesbanner from "../components/Service-bannner";

function Services() {
  useEffect(() => {
    document.title = "Services | Aividia";

    const metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Explore Aividia's services including AI solutions, custom web development, automation, digital transformation, cloud solutions, and technology consulting."
      );
    }
  }, []);

  return (
    <>
      <Navbar />
      <Servicesbanner />
      <Servicemiddle />
      <Footer />
    </>
  );
}

export default Services;