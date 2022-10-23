import "./Header.css";
import profilePicture from "../assets/profilePicture.svg";
import Button from "./Button.tsx";
const Header = (props: {
  calendar: string,
  sync: string,
  profilePicture: {
    mask: string,
    border: string,
  },
  button: {
    text: string,
  },
  className?: string,
}) => {
  return (
    <div className={`header ${props.className || ""}`}>
      <span className="sync">{props.sync || "sync"}</span>
      <span className="calendar">{props.calendar || "calendar"}</span>
      <Button className="button-instance-1" {...props.button} />
      <img
        className="profile-picture"
        {...props.profilePicture}
        src={profilePicture}
      />
    </div>
  );
};
export default Header;
