import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [count, setCount] = useState(0);

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
  };

  const onClickHandleUpperCase = () => {
    let newText = text.toUpperCase();
    setText2(newText);
  };

  return (
    <div>
      <div className="row justify-content-between">
        <div className="col-4">
          <h2>{props.heading}</h2>
        </div>
        <div className="col-2 d-flex align-items-end">
          <div>
            <div>Word Count: {count}</div>
            <div>Character count: {text.length}</div>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <textarea
          placeholder="Enter the Text"
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={onChangeHandle}
        ></textarea>
      </div>

      <div className="mb-3">
        <button
          type="button"
          className="btn btn-primary mx-3"
          onClick={onClickHandleUpperCase}
        >
          UPPERCASE
        </button>
        <button
          type="button"
          className="btn btn-success mx-3"
          onClick={onClickHandleLowerCase}
        >
          lowercase
        </button>
        <button
          type="button"
          className="btn btn-secondary mx-3"
          onClick={() =>
            navigator.clipboard.writeText(text2)
          }
        >
          Copy text below
        </button>
      </div>

      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text2}
          readOnly
        ></textarea>
      </div>
    </div>
  );
}
