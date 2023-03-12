import "./styles/About.css";
import Button from "../../Components/Button/Button";

const About = () => {
  return (
    <div id="about" className="container about-wrapp">
      <img src="/about-bg.webp" alt="" className="about-bg" />
      {/* <div className="line line1"></div>
      <div className="line line2"></div> */}

      <div className="about-div">
        <div className="left-about">
          <h2 className="alte">About Us</h2>
          <p>
            In the southeast of Europe lived a mysterious people known as the
            Thracians. They used a language related to Indo-European. There are
            competing hypotheses about the origins of the Thracians: some
            believe they were the area's original inhabitants, while others link
            them to the tribes of West Asia. Still others argue that the
            Thracians emerged from the blending of indigenous peoples in
            southeastern Europe and migrant tribes from Asia (Scythians). There
            is no doubt that the Thracians had a profound impact on the
            evolution of European culture. It is believed that many aspects of
            Greek and Roman mythology and religious practices owe much to
            Thracian beliefs and rituals, which were influential on both Greek
            and Roman cultures.
          </p>
          <div className="btn-div">
            <a href="/whitepaper.pdf" target={"blank"}>
              <Button cta text="WHITEPAPER" width={160} height={55} />
            </a>
            <a href="/deck.pdf" target={"blank"}>
              <Button cta text="PRESENTATION DECK" width={220} height={55} />
            </a>
          </div>
        </div>
        <img src="/about.webp" alt="" />
      </div>
    </div>
  );
};

export default About;
