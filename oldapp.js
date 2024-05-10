import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Helooo Sanjana🚀"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "children" }, [
    React.createElement("h1", { id: "child1" }, "I m h1 tag"),
    React.createElement("h2", { id: "child1" }, "I m h2 tag"),
  ])
);
const Title = () => <h1 id="heading">Heloo to tutorial❤️</h1>;

//Component Composition
const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      <h1 className="heading">Hi from Functional Components</h1>
    </div>
  );
};
const HeadingComponent1 = () => (
  <h1 className="heading">Hi from Functional Components</h1>
);

root.render(<HeadingComponent />);
console.log(heading);
//root.render(heading);
