import React from "react"
import './App.css';
import GamerCards from "./components/GamerCards";
import Header from './components/Header'
import SwipeButtons from './components/SwipeButtons'

function App() {
  return (
    // BEM class naming convention (Block element modifier)
    <div className="app">
      

      <Header />
      <GamerCards />
      <SwipeButtons />

    </div>
  );
}

export default App;
