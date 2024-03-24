import Calendar from "react-calendar";
import "../assets/styles/calender.css";
import { useState, useRef } from "react";
import checkCircle from "../assets/icons/circle-check-solid.svg";

const Calender = () => {
  // States and Variables
  const disabledDays = [0, 6];
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [attendedToday, setAttendedToday] = useState(false);

  // Functions
  const convertToDate = (date) => {
    try {
      date = date.toISOString(); //'2024-03-24T13:20:31.715Z'
      date = date.split("T")[0]; //'2024-03-24'
    } catch (err) {
      console.error(err);
    }
    return date;
  };

  // Etc
  const calendar = useRef();

  return (
    <div className="container-main calender-container">
      <div className="calender-wrapper">
        <Calendar
          ref={calendar}
          onChange={(val) => setSelectedDate(val)}
          value={selectedDate}
          defaultActiveStartDate={selectedDate}
          tileDisabled={
            ({ date }) => disabledDays.includes(date.getDay()) //Disabled Sunday(0), Saturday(6)
          }
          tileClassName={({ date, view }) => {
            if (view !== "month") {
              return "";
            }
            let classesToReturn = "calender-selector-date";
            if (disabledDays.includes(date.getDay())) {
              return classesToReturn;
            }

            if (convertToDate(date) === convertToDate(selectedDate)) {
              classesToReturn += " active-date";
            } else {
              if (Math.random() * 10 > 5) {
                classesToReturn += " success";
              } else {
                classesToReturn += (Math.random() * 10 > 5 && " failed") || "";
              }
            }
            return classesToReturn;
          }}
        />
      </div>
      <div className="calender-labels">
        <button
          onClick={() => {
            setSelectedDate(new Date());
            calendar.current.setActiveStartDate(new Date());
          }}
        >
          Today
        </button>
        <div className="labels-wrapper">
          <span>
            <span className="calender-selector-date date-label success"></span>{" "}
            &nbsp; - Present
          </span>
          <span>
            <span className="calender-selector-date date-label failed"></span>{" "}
            &nbsp; - Absent
          </span>
          <span>
            <span className="calender-selector-date date-label"></span> &nbsp; -
            Pending
          </span>
        </div>
      </div>
      <div className="calender-mark-today">
        {attendedToday ? (
          <>
            <h4>Attendance for today is already marked </h4>
            <img className="checked-green" src={checkCircle} alt="Checked" />
          </>
        ) : (
          <>
            <h4>Mark Attendance for Today: </h4>
            <button
              className="btn-primary"
              onClick={() => setAttendedToday(true)}
            >
              Mark
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Calender;
