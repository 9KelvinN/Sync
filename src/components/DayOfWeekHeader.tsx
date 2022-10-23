import "./DayOfWeekHeader.css";
const DayOfWeekHeader = (props: {
  dateNum: string,
  dateName: string,
  className?: string,
}) => {
  return (
    <div className={`day-of-week-header ${props.className || ""}`}>
      <span className="date-name">{props.dateName || "Wednesday"}</span>
      <span className="date-num">{props.dateNum || "26"}</span>
    </div>
  );
};
export default DayOfWeekHeader;
