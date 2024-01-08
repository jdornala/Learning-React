import React from "react";
import  ReactDOM  from "react-dom/client"



// To construct above html follow below code

// const  parent = React.createElement("div", {id:"parent"}, 
//                     React.createElement("div", {id:"child"}, [
//                             React.createElement("h1", {}, "I'm a H1 tag"), 
//                             React.createElement("h2", {}, "I'm a H2 tag")
//                         ]
//                         )
//                         )




// const heading = React.createElement("h1", { id:"heading" }, "Hellow world from React");

const JSXHeadingComponent = () => { 
    return   <h1 id="heading">  
    I'm JSX in React 
    </h1>
}

const FunctionalComponent =() => (
    <div id="container">
        <JSXHeadingComponent/>
        <JSXHeadingComponent></JSXHeadingComponent>
        {JSXHeadingComponent()}
        {100 + 100}
        <h1>I'm a Functionlal Component</h1>
    </div>
);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<FunctionalComponent />);
