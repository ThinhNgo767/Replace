import "./style.css";
import Weekday from "../WeekdayComponent";

import { useState, useRef } from "react";

const InputComponent = ({ day, setDay }) => {
  const [textInput, setTextInput] = useState("");
  const [textOnput, setTextOnput] = useState("");
  const [focusText, setFocusText] = useState(null);

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
      .replace(/ngan/g, "n")
      .replace(/nga/g, "n")
      .replace(/ng/g, "n")
      .replace(/;/g, " ")
      .replace(/2d/g, day);
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
      <Weekday day={day} setDay={setDay} />
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
