import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Clientbanner from "../components/client-banner";
import Clientmiddle from "../components/client-middle";

function Clients() {
  useEffect(() => {
    document.title = "Our Clients | Aividia";

    const metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Explore Aividia's valued clients and successful partnerships across AI, web development, automation, and digital transformation projects."
      );
    }
  }, []);

  return (
    <>
      <Navbar />
      <Clientbanner />
      <Clientmiddle />
      <Footer />
    </>
  );
}

export default Clients;