import Button from "../../Components/Button/Button";
import "./styles/Bvv.css";

const Bvv = () => {
  return (
    <div id="bvv" className="container">
      <div className="bvv-div">
        {/* <h2 className="alte title">Blockchain Valley Virtual</h2> */}
        <img src="/bvv-logo.png" className="bvv-logo" alt="" />
        <p>
          Blockchain Valley Virtual is a mixed reality metaverse ecosystem, with
          a state-of-the-art, fully immersive virtual 3D world. Empowering
          people, artists, and communities to experience and achieve more.
        </p>
        <a href="https://blockchainvalleyvirtual.io/" target={"blank"}>
          <Button cta text="More Info" width={150} height={50} />
        </a>
        <img src="/bvv.png" alt="" className="bvv-cover" />
      </div>
    </div>
  );
};

export default Bvv;
