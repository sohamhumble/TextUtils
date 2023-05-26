import React from "react";

export default function About(props) {
  const colorReturn = ()=>{
    if(props.darkModeType === "#13521f"){
      return "#1c752d"
    }
    else if(props.darkModeType === "#2e3d4d"){
      return "#3a5675"
    }
    else if(props.darkModeType === "#621919"){
      return "#9c1d1d"
    }
  }
  return (
    <div>
      <h1 className="mb-4">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div
          className="accordion-item"
          style={{
            backgroundColor:
              props.mode === "dark" ? colorReturn() : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{
                backgroundColor:
                  props.mode === "dark" ? colorReturn() : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            >
              <strong>Analyze yout text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Textutils gives you a way to analyze yout text quickly and
              effectively. Be it word count, character count, Uppercasing,
              Lowercasing etc.
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
          style={{
            backgroundColor:
              props.mode === "dark" ? colorReturn() : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{
                backgroundColor:
                  props.mode === "dark" ? colorReturn() : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              TextUtils is a free character counter tool that provides instant
              character count &amp; word count statistics for a given text.
              TextUtils reports the number of works and characters. Ths it is
              suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
          style={{
            backgroundColor:
              props.mode === "dark" ? colorReturn() : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{
                backgroundColor:
                  props.mode === "dark" ? colorReturn() : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              This word counter software works in any web browsers such as
              Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to
              count characters in facebook, blog, books, excel document, pdf
              document, essays, etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
