import "./style.css";
import Modal from "../Modal";

import { useState, useEffect, useRef } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

const Welcome = ({ setCheckKey, modal, setModal }) => {
  const [key, setKey] = useState("");

  const [type, setType] = useState(false);

  const inputRef = useRef(null);

  const secretKey = process.env.REACT_APP_SECRET_KEY;

  const textModal = [
    "Missing keys or wrong keys!",
    `Please contact
      <a href="https://t.me/ksc6789" target="_blank" rel="noreferrer">
        admin
      </a>
    `,
  ];

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
    setType(false);
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

      <Modal
        text={textModal}
        modal={modal}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
};

export default Welcome;
