import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroSection() {
  const heroRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    let mounted = true;

    const loadVanta = async () => {
      try {
        const mod = await import("vanta/dist/vanta.fog.min.js");

        const FOG =
          mod.default?.default ||
          mod.default ||
          mod;

        console.log("VANTA:", mod);
        console.log("FOG:", FOG);

        if (mounted && typeof FOG === "function") {
          vantaEffect.current = FOG({
            el: heroRef.current,
            THREE,

            mouseControls: true,
            touchControls: true,
            gyroControls: false,

            minHeight: 200.0,
            minWidth: 200.0,
highlightColor: 0x8CCF2E, // bright glow
midtoneColor: 0x5E8F2C,   // moss green
lowlightColor: 0x23441F,  // dark forest green
baseColor: 0x051826,      // deep blue-black

  blurFactor: 0.60,
  speed: 3.20,
  zoom: 0.80
          });
        }
      } catch (error) {
        console.error("Vanta Error:", error);
      }
    };

    loadVanta();

    const handleScroll = () => {
      const scrollY = window.scrollY;

      document.querySelector(".shape1")?.style.setProperty(
        "transform",
        `translateY(${scrollY * 0.08}px)`
      );

      document.querySelector(".shape2")?.style.setProperty(
        "transform",
        `translateY(-${scrollY * 0.12}px)`
      );

      document.querySelector(".shape3")?.style.setProperty(
        "transform",
        `translateY(${scrollY * 0.18}px)`
      );

      document.querySelector(".shape4")?.style.setProperty(
        "transform",
        `translateY(-${scrollY * 0.15}px)`
      );
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      mounted = false;

      window.removeEventListener("scroll", handleScroll);

      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero-section"
      className="hero-section"
    >
      <div className="shape shape1"></div>
      <div className="shape shape2"></div>
      <div className="shape shape3"></div>
      <div className="shape shape4"></div>

      <div className="container hero-content">
        <div className="hero-badge">
          CRAFTING DIGITAL EXPERIENCES DRIVE RESULTS
        </div>

        <h1>
          We Build Smart <span>Websites</span>
          <br />
          That Grow Business
        </h1>

        <div className="hero-btns">
          <a href="#" className="btn btn-contact">
            CONTACT AIVIDIA
          </a>

          <a href="#" className="btn btn-outline-custom">
            GET STARTED
          </a>
        </div>

        <p className="hero-text">
          Deploy mission-critical AI workloads on the world's most resilient
          distributed infrastructure. Zero latency. Infinite scale.
          Uncompromising security.
        </p>
      </div>
    </section>
  );
}