import "./CalendarEvent.css";
const CalendarEvent = (props: {
  cse312TaMeeting: string,
  num430Pm: string,
  className?: string,
}) => {
  return (
    <div className={`calendar-event ${props.className || ""}`}>
      <div className="rectangle-18">
        <span className="cse-312-ta-meeting">
          {props.cse312TaMeeting || "CSE 312 TA Meeting"}
        </span>
        <span className="num-430-pm">{props.num430Pm || "4:30 PM"}</span>
      </div>
    </div>
  );
};
export default CalendarEvent;
