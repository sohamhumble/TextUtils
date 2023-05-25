import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import "./App.css";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";

function App() {
  const [mode, setMode] = useState("dark");
  const [alert, setAlert] = useState({
    type: null,
    message: null,
  });
  const [buttonColor, setButtonColor] = useState("primary");

  document.body.style.backgroundColor = `${
    mode === "dark" ? "#2e3d4d" : "white"
  }`;
  document.body.style.color = `${mode === "dark" ? "white" : "black"}`;

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("dark", "Dark Mode Enabled");
      document.title = "Text Util - Dark Mode";
    } else {
      setMode("light");
      showAlert("light", "Light Mode Enabled");
      document.title = "Text Util - Light Mode";
    }
    setButtonColor("primary");
  };

  var myTimeout = null;
  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message,
    });
    clearTimeout(myTimeout);
    myTimeout = setTimeout(() => {
      setAlert({
        type: null,
      });
    }, 2000);
  };

  const changegreen = () => {
    document.body.style.backgroundColor = "#13521f";
    setButtonColor("success");
  };
  const changeblue = () => {
    document.body.style.backgroundColor = "#2e3d4d";
    setButtonColor("primary");
  };
  const changered = () => {
    document.body.style.backgroundColor = "#621919";
    setButtonColor("danger");
  };
  return (
    <>
      {/* Rourter */}
      <Router>
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          changegreen={changegreen}
          changered={changered}
          changeblue={changeblue}
        />
        <div className="container-fluid z-2 position-absolute">
          <Alert alert={alert} />
        </div>

        <Routes>
          <Route
            path="/about"
            element={
              <div className="container my-3">
                <About />
              </div>
            }
          />
          <Route
            path="/"
            element={
              <div className="container my-3">
                <TextForm
                  heading="Enter your Text"
                  mode={mode}
                  showAlert={showAlert}
                  buttonColor={buttonColor}
                />
              </div>
            }
          />
        </Routes>
      </Router>
      {/* Rourter - END */}
    </>
  );
}

export default App;
