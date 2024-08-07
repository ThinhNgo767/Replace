import "./style.css";
import Weekday from "../WeekdayComponent";

import { useState, useRef } from "react";

const InputComponent = ({ setDay }) => {
  const [textInput, setTextInput] = useState("");
  const [textOnput, setTextOnput] = useState("");
  const [focusText, setFocusText] = useState(null);
  const [agency, setAgency] = useState("");

  const textareaInputRef = useRef(null);
  const textareaOnputRef = useRef(null);

  const handleCopy = () => {
    if (focusText === textareaInputRef.current) {
      navigator.clipboard.writeText(textInput);
    } else if (focusText === textareaOnputRef.current) {
      navigator.clipboard.writeText(textOnput);
    }
  };

  const handlePaste = async () => {
    const clipboardText = await navigator.clipboard.readText();
    if (focusText === textareaInputRef.current) {
      setTextInput(clipboardText);
    } else if (focusText === textareaOnputRef.current) {
      setTextOnput(clipboardText);
    }
  };

  const handleDelete = () => {
    if (focusText === textareaInputRef.current) {
      setTextInput("");
    } else if (focusText === textareaOnputRef.current) {
      setTextOnput("");
    }
  };

  const handleReplace = () => {
    const data = textInput
      .replace(/(\d)(ngan|nga|ng)\b/g, "$1n")
      .replace(/(\d)(đđ|đd|dđ|₫₫)\b/g, "$1dd")
      .replace(/\b₫\b|đá|\bda\b/g, "dat")
      .replace(
        /\bbao(\d+)n\b|\bba(\d+)n\b|\bb(\d+)n\b/g,
        (match, p1, p2, p3) => {
          return `bl${p1 || p2 || p3}n`;
        }
      )
      .replace(/bao|b\s/g, "bl")
      .replace(/\.+|,+|;+|\+|-/g, " ")
      .replace(/(bl|dd|dau|duoi|dat)(\d+)/g, "$1$2")
      .replace(/2d/g, agency);

    setTextOnput(data);
  };

  const focusReplaceData = () => {
    textareaOnputRef.current.focus();
  };

  return (
    <>
      <div className="container-button">
        <button className="copy-text" onClick={handleCopy}>
          Copy
        </button>
        <button className="paste-text" onClick={handlePaste}>
          Paste
        </button>
        <button className="delete-text" onClick={handleDelete}>
          Delete
        </button>
      </div>
      <div className="container-input">
        <textarea
          className="input-text"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          onFocus={() => setFocusText(textareaInputRef.current)}
          ref={textareaInputRef}
        />
        <textarea
          className="output-text"
          value={textOnput}
          onChange={(e) => setTextOnput(e.target.value)}
          onFocus={() => setFocusText(textareaOnputRef.current)}
          ref={textareaOnputRef}
        />
      </div>
      <Weekday setDay={setDay} setAgency={setAgency} />
      <div className="container-button-replace">
        <button
          className="replace-data"
          onClick={handleReplace}
          onFocus={focusReplaceData}
        >
          Replace
        </button>
      </div>
    </>
  );
};

export default InputComponent;
