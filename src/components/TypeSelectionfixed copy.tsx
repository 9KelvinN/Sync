import "./TypeSelectionfixed.css";
import ellipse5 from "../assets/ellipse5.svg";
const TypeSelectionfixed = (props: {
  ghpnbyzybzfpl: string,
  flex: string,
  ellipse5: string,
  className?: string,
}) => {
  return (
    <div className={`type-selectionfixed-1 ${props.className || ""}`}>
      <div className="flex-container-10">
        <img className="ellipse-5" src={props.ellipse5 || ellipse5} />
        <div className="cat-absolute-container-2">
          {props.ghpnbyzybzfpl || "\u{1F64C}"}
        </div>
      </div>
      <span className="flex">{props.flex || "flex"}</span>
    </div>
  );
};
export default TypeSelectionfixed;
