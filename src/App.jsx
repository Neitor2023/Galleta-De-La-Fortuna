import { useState } from "react";
import React from "react";
import { ReactDOM } from "react";
import "./App.css";
import WallPaper from "./components/WallPaper";
import Phrase from "./components/Phrase.jsx";
import Phrases from "./data/Phrases.json";
let imgen = "/galletas/fondo2.jpg"
function App() {
  return (
    <div>
      <WallPaper img = imagen/>
    </div>
  );
}

export default App;
