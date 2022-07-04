import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick=()=>{
      let newText = text.toLowerCase();
      setText(newText)
  }
  const handleClearClick=()=>{
    let newText = '';
    setText(newText)
}

function reverseString(str) {

  // empty string
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
      newString += str[i];
  }
  return newString;
}

const handleReverseClick=()=> {

  // empty string
  let newText = reverseString(text);
  
  setText(newText);
}

    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const [text,setText] = useState('');

  return (
    <>
    <div className={`container my-10 text-${props.mode==='light'?'black':'white'}`}>
      <h1 >{props.head}</h1>
      <div className="mb-3">
        <textarea className={`form-control my-2 text-${props.mode==='light'?'black':'white'}`} style={
          {backgroundColor: props.mode==='light'?'white':'#4D4C7D' }
        } value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleReverseClick}>Reverse Text</button>

      </div>
    </div>
    <div className={`container text-${props.mode==='light'?'black':'white'}`}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words, {text.length} characters</p>
      <p>Reading time: {0.008*(text.split(" ").length)} minutes</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
    
  )
}
