function contactform() {
  return (

<section className="contact-form-section ">
  <div className="container">
    <div className="row align-items-center g-5">

      <div className="col-lg-4">
        <span className="section-tag">Communication Uplink</span>

        <h2 className="display-4 fw-bold mt-3 contact">
          CONTACT <span className="text-green">AIVIDIA</span>
        </h2>

        <p className="mt-4 text-light-gray">
          Establish a secure encrypted channel with our architectural
          nodes. Global systems engineers standing by for deployment
          protocols.
        </p>
      </div>

      <div className="col-lg-8">
        <div className="form-box p-4 p-lg-5">

         <form action="https://formspree.io/f/mdajvlwr" method="POST">
  <div className="row g-4">

    <div className="col-md-6">
      <label className="form-label custom-label">
        Identity Name
      </label>
      <input
        type="text"
        name="name"
        className="form-control custom-input"
        placeholder="Name"
        required
      />
    </div>

    <div className="col-md-6">
      <label className="form-label custom-label">
        Secure Email
      </label>
      <input
        type="email"
        name="email"
        className="form-control custom-input"
        placeholder="Email"
        required
      />
    </div>

    <div className="col-12">
      <label className="form-label custom-label">
        Inquiry Protocol
      </label>

      <select
        name="service"
        className="form-select custom-input"
        defaultValue=""
        required
      >
        <option value="" disabled>
          Inquiry about
        </option>
        <option value="Web Development">Web Development</option>
        <option value="Mobile Applications">Mobile Applications</option>
        <option value="UI/UX Design">UI/UX Design</option>
        <option value="Cloud Services">Cloud Services</option>
      </select>
    </div>

    <div className="col-12">
      <label className="form-label custom-label">
        Transmission Data
      </label>

      <textarea
        rows="6"
        name="message"
        className="form-control custom-input"
        placeholder="Enter technical requirements..."
        required
      ></textarea>
    </div>

    <div className="col-12">
      <button type="submit" className="btn submit-btn w-100">
        SUBMIT INQUIRY
      </button>
    </div>

  </div>
</form>
        </div>
      </div>

    </div>
  </div>
</section>
  );
}

export default contactform;