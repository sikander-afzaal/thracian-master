import "./NftBox.css";

type MainProps = {
  img: string;
  poster: string;
};

function NftBox({ img, poster }: MainProps) {
  return (
    <div className="wrapper-character">
      <video playsInline={true} autoPlay muted loop src={img} poster={poster} />
    </div>
  );
}

export default NftBox;
