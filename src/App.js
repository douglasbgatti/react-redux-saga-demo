import React from "react";
import "./App.css";

import ImageGrid from "./components/ImageGrid/ImageGrid";

import Headers from "./components/Header/Header";

import { configureStore } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={configureStore()}>
      <div className="App">
        <Headers />
        <ImageGrid />
      </div>
    </Provider>
  );
}

export default App;
