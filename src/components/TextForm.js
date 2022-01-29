import React, {useState} from 'react'



export default function TextForm(props) {
    const [text, setText] = useState("Enter text here");
    const handleUpClick=()=>{
        console.log("Upper was clicked" +text);
        let newText = text.toUpperCase();

        setText(newText);
        props.showAlert("Converted to uppercase", "success")
    }
    const handleLowerClick = () => {
      console.log("Upper was clicked" + text);
      let newText = text.toLowerCase();

      setText(newText);
      props.showAlert("Converted to lowercase", "success");
    };
    const handleRemoveComma = () => {
      console.log("Upper was clicked" + text);
      let newText = text.replaceAll(",", "");

      setText(newText);
      props.showAlert("Removed comma", "success");
    };
    const handleOnChange =(event)=>{
        console.log("On Change")
        setText(event.target.value);
    }
    // text = "new text"; //Wrong way to chnage the state
    // setText("new text"); //correct way to change the state
    return (
      <>
        <div
          className="container"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              onChange={handleOnChange}
              style={{
                backgroundColor: props.mode === "dark" ? "grey" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            >
              id="exampleFormControlTextarea1" rows="8" >
            </textarea>
          </div>
          <button className="btn btn-primary" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary m-3" onClick={handleLowerClick}>
            Convert to Lowercase
          </button>
          <button className="btn btn-primary" onClick={handleRemoveComma}>
            Remove Comma
          </button>
        </div>
        <div
          className="container my-3"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          <h3>Your Text Summary</h3>
          <p>
            {text.length > 0 && text.replace(/^\s+|\s+$/gm, "").length !== 0
              ? text.trim().replace(/\s\s+/g, " ").split(" ").length
              : 0}
            words and {text.replace(/^\s+|\s+$/gm, "").length} characters
          </p>
          <p>
            {text.length > 0 && text.replace(/^\s+|\s+$/gm, "").length !== 0
              ? 0.008 * text.trim().replace(/\s\s+/g, " ").split(" ").length
              : 0}
            minutes to read
          </p>
          <h5>Preview</h5>
          <p>{text.length > 0 ? text : "Enter the text to preview it here"}</p>
        </div>
      </>
    );
}
