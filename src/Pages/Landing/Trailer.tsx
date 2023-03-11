import "./styles/Trailer.css";

const Trailer = () => {
  return (
    <div className="container trailer-wrapp">
      <video src="/trailer.mp4" playsInline autoPlay muted loop />
      <div className="trailer-div">
        <p className="alte">
          Traditional Thracian Games (equivalent to the Greek Olympics) were
          held in a variety of warrior disciplines such as running while fully
          armored, javelin throwing, archery, chariot racing, boxing, wrestling,
          and more in order to determine the finest fighters and present them
          with the Golden Laurels (gold gilded oak leaves).
        </p>
      </div>
    </div>
  );
};

export default Trailer;
