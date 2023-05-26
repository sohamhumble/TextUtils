import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [count, setCount] = useState(0);
  let textareaBackgroundColor = props.mode === "light" ? "white" : "#b2b4b5";
  let textareaColor = props.mode === "light" ? "black" : "white";

  const onChangeHandle = (eventObject) => {
    setText(eventObject.target.value);
    let newText = eventObject.target.value;
    newText = " " + newText;
    let countLocal = 0;
    let check = true;
    for (let i = 0; i < newText.length; i++) {
      if (newText[i] !== " " && check) {
        countLocal++;
        check = false;
      } else if (newText[i] === " ") {
        check = true;
      }
    }
    setCount(countLocal);
  };

  const onClickHandleLowerCase = () => {
    let newText = text.toLowerCase();
    setText2(newText);
    props.showAlert("success","Converted to lowercase")
  };

  const onClickHandleUpperCase = () => {
    let newText = text.toUpperCase();
    setText2(newText);
    props.showAlert("success","Converted to UPPERCASE")
  };

  const onClickHandleExtraSpaces=()=>{
    let newText=text.replace(/\s+/g, ' ').trim()
    let newText2=text2.replace(/\s+/g, ' ').trim()
    setText(newText)
    setText2(newText2)
    props.showAlert("success","Cleared Extra Space")
  }

  const onClickHandleCopy=()=>{
    navigator.clipboard.writeText(text2)
    props.showAlert("success","Copied The Text to Clipboard")
  }

  const onClickHandleClearText = ()=>{
    setText("")
    setText2("")
    props.showAlert("success","Text Area Cleared")
  }

  return (
    <div>
      <div className="cont">
      <div className="row justify-content-between">
        <div className="col-4">
          <h2>{props.heading}</h2>
        </div>
        <div className="col-3 d-flex align-items-end">
          <div>
            <div>Word Count: {count}</div>
            <div>Character count: {text.length}</div>
          </div>
        </div>
      </div>
      </div>
      <div className="mb-3">
        <textarea
          placeholder="Enter the Text"
          className="form-control"
          id="myBox"
          rows="8"
          style={{
            backgroundColor: `${textareaBackgroundColor}`,
            color: `${textareaColor}`,
            height: "100px",
          }}
          value={text}
          onChange={onChangeHandle}
        ></textarea>
      </div>

      <div className="mb-3">
        <button
          type="button"
          className={`btn btn-${props.buttonColor} mx-3 my-3`}
          onClick={onClickHandleUpperCase}
          disabled={text.length === 0}
        >
          UPPERCASE
        </button>
        <button
          type="button"
          className={`btn btn-${props.buttonColor} mx-3 my-3`}
          onClick={onClickHandleLowerCase}
          disabled={text.length === 0}
        >
          lowercase
        </button>
        <button
          type="button"
          className={`btn btn-${props.buttonColor} mx-3 my-3`}
          onClick={onClickHandleExtraSpaces}
          disabled={text.length === 0}
        >
          Remove Extra Spaces
        </button>
        <button
          type="button"
          className={`btn btn-${props.buttonColor} mx-3 my-3`}
          onClick={onClickHandleCopy}
          disabled={text.length === 0}
        >
          Copy text below
        </button>
        <button
          type="button"
          className={`btn btn-${props.buttonColor} mx-3 my-3`}
          onClick={onClickHandleClearText}
          disabled={text.length === 0}
        >
          Clear Text
        </button>
      </div>

      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text2}
          style={{
            backgroundColor: `${textareaBackgroundColor}`,
            color: `${textareaColor}`,
            height: "100px",
          }}
          readOnly
        ></textarea>
      </div>
    </div>
  );
}
