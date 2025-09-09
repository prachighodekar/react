import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react';
import Card from './Components/Card.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Card username ="hii"/>
    <Card username ="hello"/>
  </StrictMode>,
)
