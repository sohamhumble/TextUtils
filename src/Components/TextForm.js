import React,{useState} from "react";

export default function TextForm(props) {
    const [text,setText] = useState("Enter the Text")
    const [text2,setText2] = useState(text.toUpperCase())
    const onChangeHandle=(eventObject)=>{
        setText(eventObject.target.value)
        let uppercaseText=(eventObject.target.value).toUpperCase()
        setText2(uppercaseText)
    }
    
  return (
    <div>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={onChangeHandle}
          
        ></textarea>
      </div>
        {/* <button type="button" class="btn btn-primary">To UPPERCASE</button> */}
        <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text2}
          disabled
        ></textarea>
      </div>
    </div>
  );
}
