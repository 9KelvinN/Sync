import "./DateLabelsWithLin.css";
import rectangle14 from "../assets/rectangle14.svg";
// import num24HourDenominat from "../assets/num24HourDenominat.svg";
import DateLabels from "./DateLabels.tsx";
const DateLabelsWithLin = (props: {
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
  className?: string,
}) => {
  return (
    <div className={`date-labels-with-lin ${props.className || ""}`}>
      <div className="rectangle-6">
        <DateLabels className="date-labels-instance-1" {...props.dateLabels} />
      </div>
      <div className="flex-container-7">
        <img
          className="num-24-hour-denominat"
          {...props.num24HourDenominat}
          // src={num24HourDenominat}
        />
        <img className="rectangle-14" src={rectangle14} />
      </div>
    </div>
  );
};
export default DateLabelsWithLin;
