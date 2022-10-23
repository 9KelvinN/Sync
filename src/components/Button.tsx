import "./Button.css";
const Button = (props: { text: string, className?: string }) => {
  return (
    <div className={`button ${props.className || ""}`}>
      <div className="rectangle-2-1">
        <span className="text">{props.text || "+ new"}</span>
      </div>
    </div>
  );
};
export default Button;
