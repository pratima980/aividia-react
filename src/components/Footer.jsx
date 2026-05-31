import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function Footer() {

  useEffect(() => {
    const ring = document.querySelector(".cursor-ring");
    const dot = document.querySelector(".cursor-dot");

    if (!ring || !dot) return;

    // Ring animation
    const handleMouseMove = (e) => {
      ring.animate(
        {
          left: `${e.clientX}px`,
          top: `${e.clientY}px`,
        },
        {
          duration: 300,
          fill: "forwards",
        }
      );

      dot.style.left = e.clientX + 1 + "px";
      dot.style.top = e.clientY + 1 + "px";
    };

    // Hover effect
    const items = document.querySelectorAll("a, button");

    const handleEnter = () => ring.classList.add("active");
    const handleLeave = () => ring.classList.remove("active");

    items.forEach((item) => {
      item.addEventListener("mouseenter", handleEnter);
      item.addEventListener("mouseleave", handleLeave);
    });

    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup (VERY IMPORTANT)
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);

      items.forEach((item) => {
        item.removeEventListener("mouseenter", handleEnter);
        item.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  useEffect(() => {
  const existingScript = document.querySelector(
    'script[src*="dialogflow-console/fast/messenger/bootstrap.js"]'
  );

  if (!existingScript) {
    const script = document.createElement("script");
    script.src =
      "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
    script.async = true;

    document.body.appendChild(script);
  }
}, []);
  return (
    <footer className="footer-section">

      <div className="container">
        <div className="row g-5">

          {/* Column 1 */}
          <div className="col-lg-4 col-sm-6">

            <img
              src="/template-images/Aividia-Logo.png"
              className="footer-logo"
              alt="Aividia"
            />

            <p className="footer-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>

            <div className="footer-contact">

              <div className="footer-contact-item">

                <div className="contact-icon">
                  <a href="#">
                    <img src="/template-images/call.png" alt="Call" />
                  </a>
                </div>

                <p>+91 8219634520</p>

              </div>

              <div className="footer-contact-item">

                <div className="contact-icon">
                  <a href="#">
                    <img src="/template-images/message.png" alt="Email" />
                  </a>
                </div>

                <p>pratimasharma462002@gmail.com</p>

              </div>

            </div>

          </div>

          {/* Column 2 */}
          <div className="col-lg-2 col-sm-6">
            <h4 className="footer-title">Quick Links</h4>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About AIVIDIA</NavLink></li>
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink to="/clients">Client Success</NavLink></li>
              <li><NavLink to="/contact">Contact AIVIDIA</NavLink></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-lg-3 col-sm-6">
            <h4 className="footer-title">Our Services</h4>
            <ul>
              <li><a href="#">Custom Software Development</a></li>
              <li><a href="#">Web & Mobile Applications</a></li>
              <li><a href="#">API Development</a></li>
              <li><a href="#">UI/UX Focused Development</a></li>
              <li><a href="#">E-Commerce AI Agents</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="col-lg-3 col-sm-6">
            <h4 className="footer-title">Subscribe</h4>

            <p className="subscribe-text">
              Subscribe to stay tuned updates and latest updates.
            </p>

           <form
  action="https://formspree.io/f/xvzynbvw"
  method="POST"
>
  <input
    type="email"
    name="email"
    className="form-control"
    placeholder="Enter your email"
    required
  />

  <button type="submit" className="btn subscribe-btn">
    CONTACT AIVIDIA
  </button>
</form>
          </div>

        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <hr />
        <div className="container">
          <div className="footer-bottom-wrapper">

            <div className="copyright-text">
              © 2026 AIVIDIA. ALL RIGHTS RESERVED.
            </div>

            <div className="social-icons">
              <a href="#"><span>f</span></a>
              <a href="#"><span>t</span></a>
              <a href="#"><span>in</span></a>
            </div>

          </div>
        </div>
      </div>

      {/* Custom Cursor */}
      <div className="cursor-ring"></div>
      <div className="cursor-dot"></div>
<df-messenger
  intent="WELCOME"
  chat-title="aiviasist"
  agent-id="07ecd723-af6f-4669-8d6a-29418886697a"
  language-code="en"
  chat-icon="https://res.cloudinary.com/dwfc3cbiv/image/upload/v1780212904/ChatGPT_Image_May_31__2026__01_01_55_PM-removebg-preview_ik7h56.png"
></df-messenger>
    </footer>
  );
}

export default Footer;