import React from "react";
import { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.WebApp;

function App() {
  const {onToggleButton, tg} = useTelegram();

  useEffect (() =>{    
    tg.ready();
  }, []) 
  
  return (
    <div className="App">
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
