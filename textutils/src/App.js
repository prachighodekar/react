import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{useState} from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Alert from './components/Alert';

function App() {
      const [mode, setMode] = useState('light')
      const [alert, setAlert] = useState(null)
      const [customTextColor, setCustomTextColor] = useState(null); 
      
      const showAlert = (message, type) => {
        setAlert({
          msg:message,
          type:type
        })
        setTimeout(() => {
          setAlert(null)
        }, 2000);
      }

      const toggleMode = () => {
        if(mode === 'light'){
          setMode('dark')
          document.body.style.backgroundColor = '#495057'
          showAlert("Dark mode has been enabled","success")
        }
        else{
          setMode('light')
          document.body.style.backgroundColor = 'white'
          showAlert("Dark mode has been disabled","success")
        }
      }
  return (
    <Router>
      <Navbar title="TextUtils" setCustomTextColor={setCustomTextColor} mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} customTextColor={customTextColor} showAlert={showAlert}/>} />
          <Route path="/about" element={<About mode={mode}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
