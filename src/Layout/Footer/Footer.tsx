import {
  faDiscord,
  faFacebook,
  faInstagram,
  faTelegram,
  faTiktok,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="container footer-wrap">
        <footer>
          <img src="/logo.png" alt="" />
          <div className="foot-links">
            <a href="/#hero">Home</a>
            <a href="/#about">About</a>
            <a href="/#collection">Collection</a>
            <a href="/#roadmap">Roadmap</a>
            <a href="/#team">Team</a>
            <a href="/#faq">FAQ</a>
          </div>
          <div className="social-footer">
            <h3 className="alte">Join the community</h3>
            <div className="foot-social-links">
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
          </div>
        </footer>
      </div>
      <div className="copy-div">
        <div>
          <p>
            Copyright © The Thracian powered by Blockchain Valley Virtual. All
            rights reserved
          </p>
          <div className="privacy-div">
            <a
              href="https://blockchainvalleyvirtual.io/terms-and-conditions/"
              target={"blank"}
            >
              Terms and Conditions
            </a>
            <a
              href="https://blockchainvalleyvirtual.io/privacy-policy/"
              target={"blank"}
            >
              Privacy Policy
            </a>
            <a
              href="https://blockchainvalleyvirtual.io/disclaimers/"
              target={"blank"}
            >
              Disclaimers
            </a>
            <a
              href="https://blockchainvalleyvirtual.io/cookie-policy/"
              target={"blank"}
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
