import './App.css';
import React, {useState} from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from "react-top-loading-bar";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
const App = () => {
  const pagesize = 5;
  const apikey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)

    return (
      <div>
        <Router>
          <NavBar />
           <LoadingBar
            color="#f11946"
            progress={progress}
          />
          <Routes>
            <Route path="/" element={<News setProgress={setProgress} apikey={apikey} key="general" pagesize={pagesize} country="us" category="general" />} />
            <Route path="/business" element={<News setProgress={setProgress} apikey={apikey} key="business" pagesize={pagesize} country="us" category="business" />} />
            <Route path="/entertainment" element={<News setProgress={setProgress} apikey={apikey} key="entertainment" pagesize={pagesize} country="us" category="entertainment" />} />
            <Route path="/general" element={<News setProgress={setProgress} apikey={apikey} key="general" pagesize={pagesize} country="us" category="general" />} />
            <Route path="/health" element={<News setProgress={setProgress} apikey={apikey} key="health" pagesize={pagesize} country="us" category="health" />} />
            <Route path="/science" element={<News setProgress={setProgress} apikey={apikey} key="science" pagesize={pagesize} country="us" category="science" />} />
            <Route path="/sports" element={<News setProgress={setProgress} apikey={apikey} key="sports" pagesize={pagesize} country="us" category="sports" />} />
            <Route path="/technology" element={<News setProgress={setProgress} apikey={apikey} key="technology" pagesize={pagesize} country="us" category="technology" />} />
          </Routes>
        </Router>
      </div>
    );
}
export default App;