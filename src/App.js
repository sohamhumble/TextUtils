import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
// import About from "./Components/About";

function App() {
  const [mode, setMode] = useState("dark");
  document.body.style.backgroundColor = `${mode==='dark'?'#2e3d4d':'white'}`;
  document.body.style.color = `${mode==='dark'?'white':'black'}`;
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter your Text" mode={mode} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
