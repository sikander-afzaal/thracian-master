import "./styles/Roadmap.css";

const Roadmap = () => {
  return (
    <div id="roadmap" className="container roadmap-wrapp">
      {/* <div className="line line1"></div>
      <div className="line line2"></div> */}
      <div className="roadmap-div">
        <h2 className="title alte">ROADMAP</h2>
        <div className="roadmap-grid">
          <h3 className="alte road-title-1 active-title">Phase 1</h3>
          <h3 className="alte road-title-2">Phase 2</h3>
          <h3 className="alte road-title-3">Phase 3</h3>
          <div className="line-roadmap"></div>

          <div className="road-box roadbox-1">
            <ul>
              <li>Development & Testing</li>
              <li>NFT Minting</li>
              <li>Whitepaper release</li>
              <li>Secondary marketplaces</li>
            </ul>
          </div>
          <div className="road-box roadbox-2">
            <ul>
              <li>Map / Environment / Game beta release</li>
            </ul>
          </div>
          <div className="road-box roadbox-3">
            <ul>
              <li>Blockchain Valley Virtual Metaverse</li>
              <li>Thracian Tournaments</li>
              <li>Real Prices</li>
              <li>Much more…</li>
            </ul>
          </div>
          <div className="active-line-road">
            {" "}
            <img src="/roadmap-pointer.png" alt="" className="pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
