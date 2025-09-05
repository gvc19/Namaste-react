const parent = React.createElement(
    "div",
     {id:"parent"},
      React.createElement(
        "div",
         {id:"child"},
          [React.createElement("h1", {key:1}, "im an h1 tag"),React.createElement("h2", {key:2}, "im an h2 tag")]))

console.log(parent)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
