import NftBox from "../../Components/NftBox/NftBox";
import "./styles/Nft.css";

const Nft = () => {
  return (
    <div id="collection" className="container">
      <div className="nft-div">
        <h2 className="alte title">THE Thracians</h2>
        <p className="sub">Some Random examples of our collection</p>
        <div className="nft-grid">
          <NftBox img="/nft-imgs/nft1.mp4" poster="/nft-imgs/poster.png" />{" "}
          <NftBox img="/nft-imgs/nft2.mp4" poster="/nft-imgs/poster.png" />{" "}
          <NftBox img="/nft-imgs/nft3.mp4" poster="/nft-imgs/poster.png" />{" "}
          <NftBox img="/nft-imgs/nft4.mp4" poster="/nft-imgs/poster.png" />{" "}
        </div>
      </div>
    </div>
  );
};

export default Nft;
