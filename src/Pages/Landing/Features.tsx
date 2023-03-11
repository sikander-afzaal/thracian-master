import "./styles/Features.css";

const Features = () => {
  return (
    <div className="container feat-wrap">
      <div className="feature-div">
        <h2 className="title alte">PERKS</h2>
        <p className="sub">
          Holders of the Thracian NFT are eligible for many perks in the
          Blockchain Valley Virtual metaverse:
        </p>
        <div className="feature-row">
          <ul>
            <li>Limited edition Blockchain Valley Founders badge</li>
            <li>
              Recurring special NFT drops (clothes, accessories, items etc…)
            </li>
            <li>
              Access to the Thracian Village in Blockchain Valley Virtual
              Metaverse
            </li>
            <li>Discounts on virtual assets</li>
            <li>More superpowers added over time</li>
            <li>Win real prizes</li>
          </ul>
          <img src="/perk-img.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Features;
