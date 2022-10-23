import "./DateLabels.css";
const DateLabels = (props: {
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
  className?: string,
}) => {
  return (
    <div className={`date-labels ${props.className || ""}`}>
      <span className="num-1-am">{props.num1Am || "1 AM"}</span>
      <span className="num-2-am">{props.num2Am || "2 AM"}</span>
      <span className="num-3-am">{props.num3Am || "3 AM"}</span>
      <span className="num-4-am">{props.num4Am || "4 AM"}</span>
      <span className="num-5-am">{props.num5Am || "5 AM"}</span>
      <span className="num-6-am">{props.num6Am || "6 AM"}</span>
      <span className="num-7-am">{props.num7Am || "7 AM"}</span>
      <span className="num-8-am">{props.num8Am || "8 AM"}</span>
      <span className="num-9-am">{props.num9Am || "9 AM"}</span>
      <span className="num-10-am">{props.num10Am || "10 AM"}</span>
      <span className="num-11-am">{props.num11Am || "11 AM"}</span>
      <span className="num-12-pm">{props.num12Pm || "12 PM"}</span>
      <span className="num-1-pm">{props.num1Pm || "1 PM"}</span>
      <span className="num-2-pm">{props.num2Pm || "2 PM"}</span>
      <span className="num-3-pm">{props.num3Pm || "3 PM"}</span>
      <span className="num-4-pm">{props.num4Pm || "4 PM"}</span>
      <span className="num-5-pm">{props.num5Pm || "5 PM"}</span>
      <span className="num-6-pm">{props.num6Pm || "6 PM"}</span>
      <span className="num-7-pm">{props.num7Pm || "7 PM"}</span>
      <span className="num-8-pm">{props.num8Pm || "8 PM"}</span>
      <span className="num-9-pm">{props.num9Pm || "9 PM"}</span>
      <span className="num-10-pm">{props.num10Pm || "10 PM"}</span>
      <span className="num-11-pm">{props.num11Pm || "11 PM"}</span>
      <span className="num-12-am">{props.num12Am || "12 AM"}</span>
    </div>
  );
};
export default DateLabels;
