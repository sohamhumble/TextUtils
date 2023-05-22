import { useState } from "react";
import "./App.css";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
// import About from "./Components/About";

function App() {
  const [mode, setMode] = useState("dark");
  const [alert, setAlert] = useState({
    type: null,
    message: null,
  });

  document.body.style.backgroundColor = `${
    mode === "dark" ? "#2e3d4d" : "white"
  }`;
  document.body.style.color = `${mode === "dark" ? "white" : "black"}`;

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("dark", "Dark Mode Enabled");
    } else {
      setMode("light");
      showAlert("light", "Light Mode Enabled");
    }
  };

  var myTimeout=null
  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message,
    });
    clearTimeout(myTimeout);
    myTimeout=setTimeout(() => {
      setAlert({
        type: null,
      });
    }, 2000);
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container-fluid z-2 position-absolute">
        <Alert alert={alert} />
      </div>
      <div className="container my-3">
        <TextForm heading="Enter your Text" mode={mode} showAlert={showAlert} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
