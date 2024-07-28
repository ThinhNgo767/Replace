import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InputComponent from "./components/InputComponent";
import Welcome from "./components/Welcom";

import { useState } from "react";

function App() {
  const [day, setDay] = useState("");
  const [checkKey, setCheckKey] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <div className="App">
      <Header />

      <div className="container-box">
        {checkKey ? (
          <InputComponent day={day} setDay={setDay} />
        ) : (
          <Welcome
            setCheckKey={setCheckKey}
            modal={modal}
            setModal={setModal}
          />
        )}
      </div>

      <Footer />
    </div>
  );
}

export default App;
