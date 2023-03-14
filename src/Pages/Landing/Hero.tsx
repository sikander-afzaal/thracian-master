import "./styles/Hero.css";
import Button from "../../Components/Button/Button";
import {
  faDiscord,
  faFacebook,
  faInstagram,
  faTelegram,
  faTiktok,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
declare global {
  interface Window {
    show_creatify_popup: any; // 👈️ turn off type checking
  }
}
const Hero = () => {
  return (
    <div id="hero" className="container hero-wrap">
      <div className="hero-div">
        <img src="/logo.png" alt="" />
        <p>
          <span>The Thracian</span> <br /> where nft's and history collide
        </p>
        <p>A collection of 10000 unique pieces</p>
        <div className="btn-div">
          <Link to={"/mint"} style={{ textDecoration: "none" }}>
            <Button width={160} height={50} text="MINT NFT" cta />
          </Link>
          <button
            onClick={() => window.show_creatify_popup()}
            style={{ width: "160px", height: "50px" }}
            className="cta-btn"
          >
            <div>Buy With Card</div>
          </button>
        </div>
        <div className="social-hero">
          <a href="https://discord.com/invite/cCrRc6GQjH" target={"blank"}>
            <FontAwesomeIcon icon={faDiscord} />
          </a>
          <a href="https://t.me/+liSvF8KYTQc2Mzc0" target={"blank"}>
            <FontAwesomeIcon icon={faTelegram} />
          </a>
          <a href="https://twitter.com/thethraciannft" target={"blank"}>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.instagram.com/thraciannft/" target={"blank"}>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.tiktok.com/@thethraciannft" target={"blank"}>
            <FontAwesomeIcon icon={faTiktok} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100089785235682"
            target={"blank"}
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
        <p>We Accept Credit card payments</p>
      </div>
    </div>
  );
};

export default Hero;
