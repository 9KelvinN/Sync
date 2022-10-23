import "./TypeSelectionmeetup.css";
import ellipse51 from "../assets/ellipse51.svg";
const TypeSelectionmeetup = (props: {
  meetup: string,
  ellipse51: string,
  spqpkpzrfcaek: string,
  className?: string,
}) => {
  return (
    <div className={`type-selectionmeetup ${props.className || ""}`}>
      <div className="flex-container-8">
        <img className="ellipse-51" src={props.ellipse51 || ellipse51} />
        <div className="cat-absolute-container">
          {props.spqpkpzrfcaek || "\u{1F91D}"}
        </div>
      </div>
      <span className="meetup">{props.meetup || "meetup"}</span>
    </div>
  );
};
export default TypeSelectionmeetup;
