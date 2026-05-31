function Testimonial() {
  return (
    <section className="testimonial-section">

        <div className="container">

            <div id="testimonialSlider" className="carousel slide" data-bs-ride="carousel">

                <div className="carousel-inner">



                    <div className="carousel-item active">

                        <div className="testimonial-card text-center">

                            <div className="quote-icon">

                            </div>

                            <h2>
                            "Neural Core's architecture has fundamentally redefined our approach to global data distribution."
                        </h2>

                            <div className="divider"></div>

                            <div className="client-img">
                                <img src="template-images/client.png" alt=""/>
                            </div>

                            <h4>Lorem Ipsum</h4>

                            <span>CEO • AI COMPANY</span>

                        </div>

                    </div>


                   
                    <div className="carousel-item">

                        <div className="testimonial-card text-center">

                            <div className="quote-icon">

                            </div>

                            <h2>
                            "AIVIDIA transformed our digital ecosystem with futuristic AI-driven development."
                        </h2>

                            <div className="divider"></div>

                            <div className="client-img">
                                <img src="template-images/client.png" alt=""/>
                            </div>

                            <h4>John Carter</h4>

                            <span>FOUNDER • TECH STARTUP</span>

                        </div>

                    </div>


                  

                    <div className="carousel-item">

                        <div className="testimonial-card text-center">

                            <div className="quote-icon">

                            </div>

                            <h2>
                            "Their UI/UX and intelligent automation solutions elevated our entire brand identity."
                        </h2>

                            <div className="divider"></div>

                            <div className="client-img">
                                <img src="template-images/client.png" alt=""/>
                            </div>

                            <h4>Sarah Smith</h4>

                            <span>DIRECTOR • DIGITAL AGENCY</span>

                        </div>

                    </div>

                </div>



               


               

               

            </div>

        </div>

    </section>
  );
}

export default Testimonial;