import "./style.css";

import { useState, useEffect, useRef } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

const Welcome = ({ setCheckKey }) => {
  const [key, setKey] = useState("");
  const [modal, setModal] = useState(false);
  const [type, setType] = useState(false);

  const inputRef = useRef(null);

  const secretKey = process.env.REACT_APP_SECRET_KEY;

  useEffect(() => {
    let isKey = sessionStorage.getItem("secretKey") || "";
    if (isKey === secretKey) {
      setCheckKey(true);
    }
    inputRef.current.focus();
  }, [secretKey, setCheckKey]);

  const handleCheckKey = () => {
    if (key === secretKey) {
      sessionStorage.setItem("secretKey", key);
      setCheckKey((prve) => !prve);
    } else {
      setModal(true);
      setKey("");
      inputRef.current.focus();
      return;
    }
  };

  const handleCloseModal = () => {
    setModal(false);
    inputRef.current.focus();
  };

  const handleShowHide = () => {
    if (key === "") return;
    setType(!type);
  };

  return (
    <>
      <section className="welcome">
        <p>Vui lòng nhập secret key</p>

        <div className="box-show-hide">
          <input
            ref={inputRef}
            type={type ? "text" : "password"}
            value={key}
            onChange={(e) => setKey(e.target.value)}
          />
          <div className="show-hide-btn">
            {type ? (
              <button
                className="hide-show"
                onClick={handleShowHide}
                title="show"
              >
                <BsEyeFill />
              </button>
            ) : (
              <button
                className="hide-show"
                onClick={handleShowHide}
                title="hide"
              >
                <BsEyeSlashFill />
              </button>
            )}
          </div>
        </div>
        <button type="button" onClick={handleCheckKey}>
          <span>Submit</span>
        </button>
      </section>
      <div
        className="container-modal"
        style={modal ? { display: "flex" } : { display: "none" }}
      >
        <div className="box-modal">
          <span>Missing keys or wrong keys!</span>
          <span>Please contact admin.</span>
          <button
            type="button"
            className="close-modal"
            title="close modal"
            onClick={handleCloseModal}
          >
            OKIE
          </button>
        </div>
      </div>
    </>
  );
};

export default Welcome;
