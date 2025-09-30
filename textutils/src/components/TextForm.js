import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        //console.log("Uppercase button was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to Upper case","success");
    }
    const handleLowClick = () => {
        //console.log("Uppercase button was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to lower case","success");
    }
     const handleClearText = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared","success");
    }
     const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard", "success")
    }
    const handleExtractEmail = () => {
        const foundEmails = extractEmails(text);
        setText(foundEmails.join(", "));
        props.showAlert("Email extracted","success");
    }

    const extractEmails = (text) => {
        const regex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
        return text.match(regex) || [];
    };

     const handleOnChange = (event) => {
        //console.log("Uppercase button was clicked");
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    const words = text.trim().split(/\s+/).filter((element) => element.length !== 0);
    const wordCount = words.length;
  return (
    <>
    <div style={{ color: props.customTextColor || (props.mode === 'dark' ? 'white' : 'black') }}>
    <div className='container'>
    <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#495057' : 'white',
    color: props.customTextColor || (props.mode === 'dark' ? 'white' : 'black')}} value={text} id="myBox" rows="10"></textarea>
    </div>
    <button disabled={text.length===0} className={`btn btn-${props.mode === 'light' ? 'secondary': 'dark'} mx-2 my-1`} onClick={handleUpClick}>Convert to UPPERCASE</button>
    <button disabled={text.length===0} className={`btn btn-${props.mode === 'light' ? 'secondary': 'dark'} mx-2 my-1`} onClick={handleLowClick}>Convert to lowercase</button>
    <button disabled={text.length===0} className={`btn btn-${props.mode === 'light' ? 'secondary': 'dark'} mx-2 my-1`} onClick={handleClearText}>Clear Text</button>
    <button disabled={text.length===0} className={`btn btn-${props.mode === 'light' ? 'secondary': 'dark'} mx-2 my-1`} onClick={handleCopy}>Copy Text</button>
    <button disabled={text.length===0} className={`btn btn-${props.mode === 'light' ? 'secondary': 'dark'} mx-2 my-1`} onClick={handleExtractEmail}>Extract Email</button>
    </div>
    <div className="container my-3">
      <h2>Your text summary</h2>
      <p>{wordCount} words and {text.length} characters</p>
      <p>{0.08 * wordCount} minutes to read above text</p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text : "Nothing to preview"}</p>
    </div>
    </div>
    </>
   
  )
}
