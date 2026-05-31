function contactmap() {
  return (

<section className="global-map-section ">
  <div className="container">

    <div className="mb-5">
      <h2 className="display-4 fw-bold global">
        GLOBAL <span className="text-green">MAP</span>
      </h2>

      <p className="map-subtitle">
        Live telemetry of physical server cluster locations.
      </p>
    </div>

    <div className="map-wrapper position-relative">
      <img
        src="template-images/map.png"
        alt="World Map"
        className="img-fluid w-100 rounded"
      />

      <span className="map-dot dot-1"></span>
      <span className="map-dot dot-2"></span>
      <span className="map-dot dot-3"></span>

     
    </div>

  </div>
</section>
  );
}

export default contactmap;