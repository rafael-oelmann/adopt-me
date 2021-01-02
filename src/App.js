import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Pablito",
      animal: "Cat",
      breed: "White/black",
    }),
    React.createElement(Pet, {
      name: "Nacho",
      animal: "Cat",
      breed: "Domestic Shorthair Tabby",
    }),
    React.createElement(Pet, {
      name: "Florence",
      animal: "Cat",
      breed: "White/black",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
