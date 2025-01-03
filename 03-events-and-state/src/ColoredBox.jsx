import { useState } from "react";

export default function ColoredBox() {
  const [colour, setColour] = useState("red");

  const red = () => {
    setColour("red");
  };

  const green = () => {
    setColour("green");
  };

  return (
    <>
      <div
        style={{
          margin: "10px",
          backgroundColor: colour,

          border: "2px solid black",
          height: "50px",
          width: "50px",
        }}
      />
      <button onClick={red}>Red</button>
      <button onClick={green}>Green</button>
    </>
  );
}
