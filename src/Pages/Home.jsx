import Calendar from "react-calendar";
import "../assets/styles/calender.css";
import { useState, useRef, useEffect } from "react";
import checkCircle from "../assets/icons/circle-check-solid.svg";
import { toast } from "react-toastify";

const Home = () => {
  // States and Variables
  const disabledDays = [0, 6];
  const [attenenceData, setAttenenceData] = useState({
    "2024-2-19": true,
    "2024-2-22": true,
    "2024-2-7": true,
    "2024-2-20": false,
    "2024-1-27": false,
    "2024-2-12": false,
    "2024-2-21": null,
  });
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isTodaySelected, setIsTodaySelected] = useState(false);
  const [attendedToday, setAttendedToday] = useState(false);

  // Functions
  const convertToDate = (date) => {
    try {
      date = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    } catch (err) {
      console.error(err);
    }
    return date;
  };

  const markToday = () => {
    attenenceData[convertToDate(new Date())] = true;
    setAttendedToday(true);
    toast.success("Attendance marked Successfully");
  };

  // Etc
  const calendar = useRef();

  useEffect(() => {
    setIsTodaySelected(
      convertToDate(selectedDate) === convertToDate(new Date())
    );
  }, [selectedDate]);

  return (
    <div className="container-main calender-container">
      <div className="calender-wrapper">
        <Calendar
          ref={calendar}
          onChange={(val) => setSelectedDate(val)}
          value={selectedDate}
          defaultActiveStartDate={selectedDate}
          tileDisabled={
            ({ date }) => disabledDays.includes(date.getDay()) //Disable Sunday(0), Saturday(6)
          }
          tileClassName={({ date, view }) => {
            if (view !== "month") {
              return "";
            }
            let classesToReturn = "calender-selector-date";
            if (convertToDate(date) === convertToDate(selectedDate)) {
              return (classesToReturn += " active-date");
            }

            if (attenenceData[convertToDate(date)] === true) {
              classesToReturn += " success";
            } else if (attenenceData[convertToDate(date)] === false) {
              classesToReturn += " failed";
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
        {attenenceData?.[convertToDate(selectedDate)] === true && (
          <>
            <h4>
              Attendance for {convertToDate(selectedDate)} is already marked{" "}
            </h4>
            <img className="checked-green" src={checkCircle} alt="Checked" />
          </>
        )}
        {attenenceData?.[convertToDate(selectedDate)] === false && (
          <>
            <h4>Attendance for {convertToDate(selectedDate)} is Not marked </h4>
          </>
        )}
        {!isTodaySelected &&
          !attenenceData?.[convertToDate(selectedDate)] &&
          attenenceData?.[convertToDate(selectedDate)] !== false && (
            <>
              <h4>Attendance for {convertToDate(selectedDate)} is Pending </h4>
            </>
          )}

        {isTodaySelected && !attendedToday && (
          <>
            <h4>Mark Attendance for Today: </h4>
            <button className="btn-primary" onClick={markToday}>
              Mark
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
