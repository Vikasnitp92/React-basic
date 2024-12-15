
//const heading =React.createElement("h1",{},"Welcome to React Web development learning session.");
   // const root =ReactDOM.createRoot(document.getElementById("main"));
   // root.render(heading);

    //creating the nested elements

    const container = React.createElement("div", {id:"parent"},
      React.createElement("div", {id:"child"} ,
        [React.createElement("h1", {}, "This is a nested h1."),React.createElement("h2", {}, "This is a nested h2.")]
      )     
      );
    
      const root =ReactDOM.createRoot(document.getElementById("main"));
      root.render(container);