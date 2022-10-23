import "./CalendarSelect.css";
import checkbox from "../assets/checkbox.svg";
const CalendarSelect = (props: { myCalendar: string, className?: string }) => {
  return (
    <div className={`calendar-select ${props.className || ""}`}>
      <img className="checkbox" {...props.checkbox} src={checkbox} />
      <span className="my-calendar">{props.myCalendar || "My Calendar"}</span>
    </div>
  );
};
export default CalendarSelect;
