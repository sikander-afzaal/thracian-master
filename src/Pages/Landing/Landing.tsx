import Header from "../../Layout/Header/Header";
import Footer from "../../Layout/Footer/Footer";
import About from "./About";
import Blockchain from "./Blockchain";
import Faq from "./Faq";
import Features from "./Features";
import Hero from "./Hero";
import Nft from "./Nft";
import Roadmap from "./Roadmap";
import Trailer from "./Trailer";
import Bvv from "./Bvv";

const Landing = () => {
  return (
    <>
      <Header />
      <div>
        <Hero />
        <About />
        <Trailer />
        <Nft />
        <Features />
        <Blockchain />
        <Roadmap />
        <Bvv />
        <Faq />
      </div>
      <Footer />
    </>
  );
};

export default Landing;
