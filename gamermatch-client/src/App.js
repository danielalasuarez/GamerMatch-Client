import React from "react"
import './App.css';
import GamerCards from "./components/GamerCards";
import Header from './components/Header'

function App() {
  return (
    // BEM class naming convention (Block element modifier)
    <div className="app">
      

      <Header />
      <GamerCards />
      {/* Swipe Buttons */}

    </div>
  );
}

export default App;
