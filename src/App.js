import "./App.css";
import InputComponent from "./components/InputComponent";

import { useState } from "react";

function App() {
  const [day, setDay] = useState("");

  return (
    <div className="App">
      <InputComponent day={day} setDay={setDay} />
    </div>
  );
}

export default App;
