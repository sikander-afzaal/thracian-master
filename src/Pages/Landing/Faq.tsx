import "./styles/Faq.css";
import FaqTab from "../../Components/FaqTab/FaqTab";

const Faq = () => {
  const FAQS = [
    {
      question: "How long do you take to launch a project?",
      answer:
        "The Launch of the Thracian Village in Blockchain Valley Virtual’s metaverse is planned for Q3 2023",
    },
    {
      question: "What Blockchain will you use?",
      answer: "Solana",
    },
    {
      question: "How can i play?",
      answer: `To play , you need at least one NFT's from our collection. To obtain an NFT you can mint the NFT 
        through our dApp or purchase on the secondary marketplace NFT trade.`,
    },
  ];
  return (
    <div id="faq" className="container">
      <div className="faq-div">
        <h2 className="alte title">Frequently Asked Questions</h2>
        <div className="faqs">
          {FAQS.map((elem, idx) => {
            return <FaqTab {...elem} key={idx + "faq-tab"} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;
