import "./WeeklyCalendar.css";
import dayOfWeek4 from "../assets/dayOfWeek4.svg";
import dayOfWeek5 from "../assets/dayOfWeek5.svg";
import dayOfWeek1 from "../assets/dayOfWeek1.svg";
import dayOfWeek3 from "../assets/dayOfWeek3.svg";
import dayOfWeek6 from "../assets/dayOfWeek6.svg";
import dayOfWeek from "../assets/dayOfWeek.svg";
import dayOfWeek2 from "../assets/dayOfWeek2.svg";
import DayOfWeekHeader from "./DayOfWeekHeader.tsx";
import DateLabelsWithLin from "./DateLabelsWithLin.tsx";
const WeeklyCalendar = (props: {
  dayOfWeek2: {},
  dayOfWeekHeader: {
    dateNum: string,
    dateName: string,
  },
  dayOfWeekHeader4: {
    dateNum: string,
    dateName: string,
  },
  dayOfWeek: {},
  dayOfWeek3: {},
  dayOfWeekHeader1: {
    dateNum: string,
    dateName: string,
  },
  dayOfWeekHeader3: {
    dateNum: string,
    dateName: string,
  },
  dayOfWeekHeader6: {
    dateNum: string,
    dateName: string,
  },
  dayOfWeekHeader2: {
    dateNum: string,
    dateName: string,
  },
  dayOfWeek5: {},
  dayOfWeek4: {},
  dayOfWeekHeader5: {
    dateNum: string,
    dateName: string,
  },
  dayOfWeek1: {},
  dateLabelsWithLin: {
    dateLabels: {
      num3Pm: string,
      num4Pm: string,
      num11Pm: string,
      num7Am: string,
      num5Am: string,
      num12Am: string,
      num6Pm: string,
      num10Pm: string,
      num8Pm: string,
      num12Pm: string,
      num2Am: string,
      num12Am: string,
      num9Pm: string,
      num1Am: string,
      num11Am: string,
      num2Pm: string,
      num6Am: string,
      num7Pm: string,
      num10Am: string,
      num5Pm: string,
      num8Am: string,
      num9Am: string,
      num1Pm: string,
      num4Am: string,
      num3Am: string,
    },
  },
  dayOfWeek6: {},
  className?: string,
}) => {
  return (
    <div className={`weekly-calendar ${props.className || ""}`}>
      <div className="flex-container-8">
        <DayOfWeekHeader
          className="day-of-week-header-instance-1"
          {...props.dayOfWeekHeader1}
        />
        <div className="flex-container-9">
          <DayOfWeekHeader
            className="day-of-week-header-instance-2"
            {...props.dayOfWeekHeader4}
          />
          <DayOfWeekHeader
            className="day-of-week-header-instance-3"
            {...props.dayOfWeekHeader3}
          />
        </div>
        <DayOfWeekHeader
          className="day-of-week-header-instance-4"
          {...props.dayOfWeekHeader}
        />
        <DayOfWeekHeader
          className="day-of-week-header-instance-5"
          {...props.dayOfWeekHeader2}
        />
        <div className="flex-container-10">
          <DayOfWeekHeader
            className="day-of-week-header-instance-6"
            {...props.dayOfWeekHeader6}
          />
          <DayOfWeekHeader
            className="day-of-week-header-instance-7"
            {...props.dayOfWeekHeader5}
          />
        </div>
      </div>
      <div className="frame-3">
        <div className="flex-container-11">
          <DateLabelsWithLin
            className="date-labels-with-lin-instance-1"
            {...props.dateLabelsWithLin}
          />
          <img className="day-of-week" {...props.dayOfWeek2} src={dayOfWeek} />
          <img
            className="day-of-week-1"
            {...props.dayOfWeek6}
            src={dayOfWeek1}
          />
          <img
            className="day-of-week-2"
            {...props.dayOfWeek4}
            src={dayOfWeek2}
          />
          <img
            className="day-of-week-3"
            {...props.dayOfWeek3}
            src={dayOfWeek3}
          />
        </div>
        <div className="flex-container-12">
          <img
            className="day-of-week-4"
            {...props.dayOfWeek}
            src={dayOfWeek4}
          />
          <img
            className="day-of-week-5"
            {...props.dayOfWeek1}
            src={dayOfWeek5}
          />
        </div>
        <img className="day-of-week-6" {...props.dayOfWeek5} src={dayOfWeek6} />
      </div>
    </div>
  );
};
export default WeeklyCalendar;
