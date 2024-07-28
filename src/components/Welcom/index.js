import "./style.css";

import { useState, useEffect, useRef } from "react";

const Welcome = ({ setCheckKey }) => {
  const [key, setKey] = useState("");
  const [modal, setModal] = useState(false);

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

  return (
    <>
      <section className="welcome">
        <p>Vui lòng nhập secret key</p>
        <input
          ref={inputRef}
          type="password"
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
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
