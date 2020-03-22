import React from "react";
import "./App.css";

import ImageGrid from "./components/ImageGrid/ImageGrid";

import Headers from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Headers />
      <ImageGrid />
    </div>
  );
}

export default App;
