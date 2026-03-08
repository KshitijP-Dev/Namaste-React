const heading = React.createElement("h1" ,{id : "parent"},[
    React.createElement("h1" ,{id : "child1"},
        [React.createElement("h1" ,{},"I am an H1 tag!"),
         React.createElement("h2" ,{},"I am an H2 tag!"),
        ]),
        React.createElement("h1" ,{id : "child2"},[
            React.createElement("h1" ,{},"I am an H1 tag!"),
         React.createElement("h2" ,{},"I am an H2 tag!"),
        ]),
    ]);   

    // console.log(parent);
const roor = ReactDOM.createRoot(document.getElementById("root"));
roor.render(heading);