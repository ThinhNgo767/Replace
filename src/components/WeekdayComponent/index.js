import "./style.css";
import { lotteryStation, isDays } from "../../data/Data";

const Weekday = ({ day, setDay }) => {
  const today = new Date();
  const dateOfWeek = today.getDay();

  const handleRadioChange = (event) => {
    const selectedValue = event.target.value;
    setDay(lotteryStation[selectedValue]);
  };

  return (
    <div className="container-weekday">
      {isDays.map((day, index) => (
        <div key={index} className="day-item">
          <input
            type="radio"
            id={index}
            name="day"
            value={index}
            onChange={handleRadioChange}
          />
          <label
            htmlFor={index}
            className={dateOfWeek === index ? "active" : ""}
          >
            {day}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Weekday;
