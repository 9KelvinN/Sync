import "./calendar.css";
import border from "./assets/border.svg";
// import mask from "./assets/mask.svg";
import ellipse51 from "./assets/ellipse51.svg";
import ellipse52 from "./assets/ellipse52.svg";
import ellipse5 from "./assets/ellipse5.svg";
import AllDayEvent from "./components/AllDayEvent.tsx";
import CalendarEvent from "./components/CalendarEvent.tsx";
import WeeklyCalendar from "./components/WeeklyCalendar.tsx";
import Header from "./components/Header.tsx";
import MonthViewCalendar from "./components/MonthViewCalendar.tsx";
import CalendarSelect from "./components/CalendarSelect.tsx";
const Calendar = () => {
  const propsData = {
    header: {
      calendar: "calendar",
      profilePicture: {
        border: border,
        // mask: mask,
      },
      sync: "sync",
      button: {
        text: "+ new",
      },
    },
    monthViewCalendar: {
      hfzbbtpkinznv: "2",
      gotmjibztjutu: "T",
      aqgyckhebfqqx: "9",
      num23: "23",
      num20: "20",
      zqiktnsolzlav: "2",
      num17: "17",
      dateName: "October",
      num26: "26",
      num18: "18",
      jypfocbzfdbwz: "8",
      num26: "26",
      yiconnnbplyes: "5",
      num28: "28",
      num15: "15",
      ymtfhaffwnnbl: "7",
      num27: "27",
      num21: "21",
      aksywbkqmudjj: "<",
      num16: "16",
      num28: "28",
      num19: "19",
      num25: "25",
      num14: "14",
      num27: "27",
      fywzbwcqiamug: "F",
      num31: "31",
      yifajrrtstrmv: "4",
      num22: "22",
      num11: "11",
      ccpuiuwgzrrqo: "M",
      neksdyecyogfa: "S",
      num12: "12",
      mdwhbvqnbdqgy: "5",
      num25: "25",
      ygvytqpumxxik: "4",
      rgwwfniwyfplw: "3",
      xsbxursmwlqeh: ">",
      xiksvnmsmrhda: "T",
      wplitnpnbyjwa: "6",
      num30: "30",
      num29: "29",
      num24: "24",
      rtmsamqzuwfuc: "S",
      sbanvypgvcroj: "1",
      num29: "29",
      num13: "13",
      hucnegnngclxt: "W",
      iydvlwwahzmlb: "1",
      num30: "30",
      ikulipdzqhtto: "3",
      num10: "10",
    },
    calendarSelect: {
      myCalendar: "My Calendar",
    },
    allDayEvent: {
      calendarEvent: {
        cse312TaMeeting: "DubHacks",
        num430Pm: "4:30 PM",
      },
    },
    calendarEvent: {
      cse312TaMeeting: "CSE 312 TA Meeting",
      num430Pm: "4:30 PM",
    },
    weeklyCalendar: {
      dayOfWeekHeader4: {
        dateName: "Monday",
        dateNum: "24",
      },
      dayOfWeekHeader5: {
        dateName: "Saturday",
        dateNum: "29",
      },
      dayOfWeek6: {},
      dayOfWeek3: {},
      dayOfWeekHeader6: {
        dateName: "Friday",
        dateNum: "28",
      },
      dayOfWeek5: {},
      dayOfWeekHeader1: {
        dateNum: "23",
        dateName: "Sunday",
      },
      dayOfWeek2: {},
      dayOfWeek4: {},
      dayOfWeekHeader3: {
        dateName: "Tuesday",
        dateNum: "25",
      },
      dayOfWeekHeader2: {
        dateNum: "27",
        dateName: "Thursday",
      },
      dayOfWeekHeader: {
        dateName: "Wednesday",
        dateNum: "26",
      },
      dayOfWeek: {},
      dateLabelsWithLin: {
        dateLabels: {
          num10Am: "10 AM",
          num12Pm: "12 PM",
          num1Am: "1 AM",
          num5Pm: "5 PM",
          num9Pm: "9 PM",
          num12Am: "12 AM",
          num6Am: "6 AM",
          num8Pm: "8 PM",
          num12Am: "12 AM",
          num7Am: "7 AM",
          num2Pm: "2 PM",
          num8Am: "8 AM",
          num3Am: "3 AM",
          num7Pm: "7 PM",
          num2Am: "2 AM",
          num4Am: "4 AM",
          num3Pm: "3 PM",
          num6Pm: "6 PM",
          num10Pm: "10 PM",
          num11Am: "11 AM",
          num11Pm: "11 PM",
          num1Pm: "1 PM",
          num5Am: "5 AM",
          num4Pm: "4 PM",
          num9Am: "9 AM",
        },
      },
      dayOfWeek1: {},
    },
  };
  return (
    <div className="calendar-view-page">
      <Header className="header-instance-1" {...propsData.header} />
      <div className="flex-container">
        <div className="flex-container-1">
          <MonthViewCalendar
            className="month-view-calendar-instance-1"
            {...propsData.monthViewCalendar}
          />
          <CalendarSelect
            className="calendar-select-instance-1"
            {...propsData.calendarSelect}
          />
          <div className="flex-container-2">
            <div className="flex-container-3">
              <div className="cat-absolute-container">📝</div>
              <img className="ellipse-5" src={ellipse5} />
            </div>
            <div className="flex-container-4">
              <div className="cat-absolute-container-1">🤝</div>
              <img className="ellipse-51" src={ellipse51} />
            </div>
            <div className="flex-container-5">
              <div className="cat-absolute-container-2">🔄</div>
              <img className="ellipse-52" src={ellipse52} />
            </div>
          </div>
          <div className="flex-container-6">
            <span>fixed</span>
            <span className="meetup">meetup</span>
            <span className="flex">flex</span>
          </div>
        </div>
        <div className="rectangle-2">
          <div className="cat-absolute-container-3">
            <AllDayEvent
              className="all-day-event-instance-1"
              {...propsData.allDayEvent}
            />
            <CalendarEvent
              className="calendar-event-instance-2"
              {...propsData.calendarEvent}
            />
          </div>
          <WeeklyCalendar
            className="weekly-calendar-instance-1"
            {...propsData.weeklyCalendar}
          />
        </div>
      </div>
    </div>
  );
};
export default Calendar;
