function contactbanner() {
  return (
<section className="contact-info ">
  <div className="container">
    <div className="row g-4">

      <div className="col-md-4">
        <div className="info-box text-center p-4 h-100">
          <div className="icon mb-3">
            <i className="bi bi-telephone-fill"></i>
          </div>
          <h6 className="text-uppercase small-title">Direct Voice</h6>
          <p className="mb-0 description">+91 8219634520</p>
        </div>
      </div>

      <div className="col-md-4">
        <div className="info-box text-center p-4 h-100">
          <div className="icon mb-3">
            <i className="bi bi-envelope-fill"></i>
          </div>
          <h6 className="text-uppercase small-title">Technical Uplink</h6>
          <p className="mb-0 description">pratimasharma46202@gmail.com</p>
        </div>
      </div>

      <div className="col-md-4">
        <div className="info-box text-center p-4 h-100">
          <div className="icon mb-3">
            <i className="bi bi-globe"></i>
          </div>
          <h6 className="text-uppercase small-title">Global Web</h6>
          <p className="mb-0 description">www.aividia.com</p>
        </div>
      </div>

    </div>
  </div>
</section>


  );
}

export default contactbanner;