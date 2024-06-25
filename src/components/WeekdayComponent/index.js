import "./style.css";
import { lotteryStation, dataDays } from "../../data/Data";
import { useState } from "react";

const Weekday = ({ setDay, setAgency }) => {
  const [agencys, setAgencys] = useState(false);
  const [checked, setChecked] = useState("");
  const [agency_0, setAgency_0] = useState("");
  const [agency_1, setAgency_1] = useState("");
  const [agency_2, setAgency_2] = useState("");
  const [fullname_0, setFullname_0] = useState("");
  const [fullname_1, setFullname_1] = useState("");
  const [fullname_2, setFullname_2] = useState("");

  const today = new Date();
  const dateOfWeek = today.getDay();

  const handleRadioChange = (event) => {
    const selectedValue = event.target.value;
    setDay(lotteryStation[selectedValue]);
  };
  const handleAgency = (id) => {
    const isAgency = dataDays.find((a) => a.id === id);
    const { agency } = isAgency;
    setAgency_0(agency[0].name);
    setAgency_1(agency[1].name);
    setAgency_2(agency[2].name);
    setFullname_0(agency[0].fullname);
    setFullname_1(agency[1].fullname);
    setFullname_2(agency[2].fullname);
    setAgencys(true);
  };

  const handleChecked = (e) => {
    setChecked(e.target.value);
    setAgency(e.target.value);
  };

  return (
    <>
      <div className="container-weekday">
        {dataDays.map((day) => (
          <div key={day.id}>
            <div className="day-item" onClick={() => handleAgency(day.id)}>
              <input
                type="radio"
                id={day.id}
                name="day"
                value={day.day}
                onChange={handleRadioChange}
              />
              <label
                htmlFor={day.id}
                className={dateOfWeek === +day.id ? "active" : ""}
              >
                {day.day}
              </label>
            </div>
          </div>
        ))}
      </div>
      <div className="container-agency">
        {agencys && (
          <ol className="ol-checked">
            <input
              type="radio"
              onChange={handleChecked}
              value={agency_0}
              name="agency"
              checked={checked === agency_0}
            />
            <li>{fullname_0}</li>
          </ol>
        )}
        {agencys && (
          <ol className="ol-checked">
            <input
              type="radio"
              onChange={handleChecked}
              value={agency_1}
              name="agency"
              checked={checked === agency_1}
            />{" "}
            <li>{fullname_1}</li>
          </ol>
        )}
        {agencys && (
          <ol className="ol-checked">
            <input
              type="radio"
              onChange={handleChecked}
              value={agency_2}
              name="agency"
              checked={checked === agency_2}
            />{" "}
            <li>{fullname_2}</li>
          </ol>
        )}
      </div>
    </>
  );
};

export default Weekday;
