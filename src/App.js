import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InputComponent from "./components/InputComponent";

import { useState } from "react";

function App() {
  const [day, setDay] = useState("");

  return (
    <div className="App">
      <Header />
      <div className="container-box">
        <InputComponent day={day} setDay={setDay} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
