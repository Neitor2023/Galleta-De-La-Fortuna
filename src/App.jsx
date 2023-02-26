import { useState } from "react";
import React from "react";
import { ReactDOM } from "react";
import "./App.css";
import WallPaper from "./components/WallPaper"
import Img from "./assets/galletas/fondo1.jpg"

function App() {
  return (
    <div>
      <WallPaper Imagen={Img}/>
    </div>
  );
}

export default App;
