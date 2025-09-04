{/* <div id="parent">
    <div id="child">
        <h1></h1>
    </div>
</div> */}


// const heading = React.createElement("h1", {id:"heading"}, "Hello World from react");

// const child = React.createElement("div", {id:"child"}, heading)
// const parent = React.createElement("div", {id:"parent"}, child)




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
