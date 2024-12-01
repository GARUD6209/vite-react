import "./App.css";
import { useState } from "react";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("#FF5733");

  const colors = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#FFFF33",
    "#FF33FF",
    "#33FFFF",
    "#FFFFFF",
    "#000000",
  ];

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };

  return (
    <>
      <div className="App" style={{ backgroundColor }}>
        <h1>Color Picker</h1>
        <div className="color-palette">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-box"
              style={{ backgroundColor: color }}
              onClick={() => handleColorChange(color)}
            ></div>
          ))}
        </div>
        <div className="custom-color-picker">
          <input
            type="color"
            value={backgroundColor}
            onChange={(e) => handleColorChange(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}

export default App;
