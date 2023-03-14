import "./Button.css";

type btnProps = {
  cta?: boolean;
  text: string;
  width: number;
  height: number;
};

const Button = ({ cta, text, width, height, ...rest }: btnProps) => {
  return cta ? (
    <button
      style={{ width: width, height: height }}
      className="cta-btn"
      {...rest}
    >
      <div>{text}</div>
    </button>
  ) : (
    <button
      {...rest}
      style={{ width: width, height: height }}
      className="transparent"
      {...rest}
    >
      {text}
    </button>
  );
};

export default Button;
