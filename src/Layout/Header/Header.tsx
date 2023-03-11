import "./Header.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const [headerToggle, setHeaderToggle] = useState(false);
  const [headerScroll, setHeaderScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        setHeaderScroll(true);
      } else {
        setHeaderScroll(false);
      }
    });
  }, []);

  return (
    <div
      className="container header-wrapp"
      style={{ background: headerScroll ? "#0c0a08" : "transparent" }}
    >
      <header>
        <div className="left-header">
          <img src="/logo.png" alt="" />
          <div className={`inner-header ${headerToggle ? "active-nav" : ""}`}>
            <nav>
              <ScrollLink
                activeClass="active-link"
                to="hero"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onClick={() => setHeaderToggle(false)}
              >
                Home
              </ScrollLink>
              <ScrollLink
                activeClass="active-link"
                to="about"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onClick={() => setHeaderToggle(false)}
              >
                About
              </ScrollLink>
              <ScrollLink
                activeClass="active-link"
                to="collection"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onClick={() => setHeaderToggle(false)}
              >
                Collection
              </ScrollLink>
              <ScrollLink
                activeClass="active-link"
                to="roadmap"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onClick={() => setHeaderToggle(false)}
              >
                Roadmap
              </ScrollLink>
              <ScrollLink
                activeClass="active-link"
                to="bvv"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onClick={() => setHeaderToggle(false)}
              >
                BVV
              </ScrollLink>
              <ScrollLink
                activeClass="active-link"
                to="faq"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onClick={() => setHeaderToggle(false)}
              >
                FAQ
              </ScrollLink>
            </nav>
            <div className="right-header">
              {/* <div>
                <div className="sign-div">
                  <a href="#" className="sign-up-btn">
                    Sign Up
                  </a>
                  <Button width={112} height={50} text="Login" />
                </div>

                <Button width={160} cta height={50} text="Play Demo" />
              </div> */}
            </div>
          </div>
          <FontAwesomeIcon
            style={{ color: headerToggle ? "var(--light-green)" : "white" }}
            onClick={() => setHeaderToggle((prev) => !prev)}
            icon={headerToggle ? faXmark : faBars}
          />
        </div>
      </header>
      {headerToggle && (
        <div onClick={() => setHeaderToggle(false)} className="overlay"></div>
      )}
    </div>
  );
};

export default Header;
