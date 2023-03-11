import "./Button.css";

type btnProps = {
  cta?: boolean;
  text: string;
  width: number;
  height: number;
};

const Button = ({ cta, text, width, height }: btnProps) => {
  return cta ? (
    <button style={{ width: width, height: height }} className="cta-btn">
      <div>{text}</div>
    </button>
  ) : (
    <button style={{ width: width, height: height }} className="transparent">
      {text}
    </button>
  );
};

export default Button;
