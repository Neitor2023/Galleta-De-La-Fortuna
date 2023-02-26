import { useState } from "react";
import React from "react";
import { ReactDOM } from "react";
import "./App.css";
import WallPaper from "./components/WallPaper"
import Img1 from "./assets/galletas/fondo1.jpg"
import Img2 from "./assets/galletas/fondo2.jpg"
import Img3 from "./assets/galletas/fondo3.jpg"
import Img4 from "./assets/galletas/fondo4.jpg"
import Img5 from "./assets/galletas/fondo5.png"
import Img6 from "./assets/galletas/fondo6.png"
import Img7 from "./assets/galletas/fondo7.png"
import Img8 from "./assets/galletas/fondo8.png"

function App() {
  let cas = 1;
  let ultCas = 2;
  const [ImageChangue, setImageChangue] = useState(Img1);
  const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  const changes = () => {
    let numbImg = getRandom(1, 9)
    console.log(numbImg)

    switch (numbImg) {
      case 1:
        cas = Img1;
        break;
      case 2:
        cas = Img2;;
        break;
      case 3:
        cas = Img3;
        break;
      case 4:
        cas = Img4;
        break;
      case 5:
        cas = Img5;
        break;
      case 6:
        cas = Img6;
        break;
      case 7:
        cas = Img7;
        break;
      case 8:
        cas = Img8;
        break;
    }
    setImageChangue(cas);
  }

  return (
    <div>
      <WallPaper Imagen={`${ImageChangue}`} />
      <button onClick={changes}>
        <i className="bx bx-shuffle"></i>
      </button>
    </div>
  );
}

export default App;
