const heading = React.createElement("h1", { id: "heading" }, "I am h1 tag");
const root = ReactDOM.createRoot(document.getElementById("root"));
const parent = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "children" }, [React.createElement("h1", { id: "child1" }, "I m h1 tag"), React.createElement("h2", { id: "child1" }, "I m h2 tag")]))
console.log(parent);
root.render(parent);