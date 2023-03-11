import "./styles/Blockchain.css";

const Blockchain = () => {
  return (
    <div className="container">
      <div className="blockchain-div">
        <h2 className="title alte">Built on the Solana Blockchain</h2>
        <p className="sub">
          Combining gaming with blockchain technology, it's now possible to
          provide a way for gamers to be rewarded for doing what they love,
          playing games.
        </p>
        <div className="blockchain-row">
          <div className="blockchain-box">
            <h3 className="alte">DEFI</h3>
            <p>
              We can use blockchain-based economic models with decentralized
              finance. As a result, players are able to participate in economies
              managed by the community and earn tokens as they play. With, the
              community also has a say in what gets updated and improved upon.
            </p>
          </div>
          <div className="blockchain-box">
            <h3 className="alte">Ownership</h3>
            <p>
              Players can now fully control their virtual possessions thanks to
              Blockchain technology. In the standard model of gaming, all assets
              belong to the game's creators. All blockchain assets, such as NFTs
              and tokens obtained, are freely transferable between players.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blockchain;
