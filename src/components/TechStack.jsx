import { useEffect } from "react";

export default function TechStack() {
  useEffect(() => {
    // Ensure Bootstrap carousel works in React
    const bootstrap = window.bootstrap;
    if (bootstrap) {
      const el = document.querySelector("#techSlider");
      if (el) {
        new bootstrap.Carousel(el, {
          interval: 2500,
          ride: "carousel",
        });
      }
    }
  }, []);

  return (
    <section className="tech-stack">
      <div className="container">

        <div
          id="techSlider"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="2500"
        >

          <div className="carousel-inner">

            {/* =====================
                SLIDE 1
            ====================== */}
            <div className="carousel-item active">

              <div className="row flex-nowrap overflow-auto g-3 justify-content-lg-center">

                <div className="col-6 col-md-4 col-lg-2 margin-top">
                  <div className="tech-box">
                    <img src="/template-images/react.png" className="img-fluid" alt="React" />
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg-2 margin-top">
                  <div className="tech-box">
                    <img src="/template-images/node.png" className="img-fluid" alt="Node" />
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg-2 margin-top">
                  <div className="tech-box">
                    <img src="/template-images/aws.png" className="img-fluid" alt="AWS" />
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg-2 margin-top">
                  <div className="tech-box">
                    <img src="/template-images/js.png" className="img-fluid" alt="JavaScript" />
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg-2 margin-top">
                  <div className="tech-box">
                    <img src="/template-images/python.png" className="img-fluid" alt="Python" />
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg-2 margin-top">
                  <div className="tech-box">
                    <img src="/template-images/mysql.png" className="img-fluid" alt="MySQL" />
                  </div>
                </div>

              </div>
            </div>

            {/* =====================
                SLIDE 2
            ====================== */}
            <div className="carousel-item">

              <div className="row flex-nowrap overflow-auto g-3 justify-content-lg-center">

                <div className="col-6 col-md-4 col-lg-2 margin-top">
                  <div className="tech-box">
                    <img src="/template-images/android.png" className="img-fluid" alt="Android" />
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg-2 margin-top">
                  <div className="tech-box">
                    <img src="/template-images/php.png" className="img-fluid" alt="PHP" />
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg-2 margin-top">
                  <div className="tech-box">
                    <img src="/template-images/laravel.png" className="img-fluid" alt="Laravel" />
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg-2 margin-top">
                  <div className="tech-box">
                    <img src="/template-images/wordpress.png" className="img-fluid" alt="WordPress" />
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg-2 margin-top">
                  <div className="tech-box">
                    <img src="/template-images/mongodb.png" className="img-fluid" alt="MongoDB" />
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}