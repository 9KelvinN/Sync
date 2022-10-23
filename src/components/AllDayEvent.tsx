import "./AllDayEvent.css";
import CalendarEvent from "./CalendarEvent.tsx";
const AllDayEvent = (props: {
  calendarEvent: {
    cse312TaMeeting: string,
    num430Pm: string,
  },
  className?: string,
}) => {
  return (
    <div className={`all-day-event ${props.className || ""}`}>
      <CalendarEvent
        className="calendar-event-instance-1"
        {...props.calendarEvent}
      />
    </div>
  );
};
export default AllDayEvent;
