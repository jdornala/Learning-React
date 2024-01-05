{/* <div id="parent">
    <div id="child">
        <h1> I'm a H1 tag</h1>
        <h2> I'm a H2 tag</h1>
    </div>
</div> */}

// To construct above html follow below code

const  parent = React.createElement("div", {id:"parent"}, 
                    React.createElement("div", {id:"child"}, [
                            React.createElement("h1", {}, "I'm a H1 tag"), 
                            React.createElement("h2", {}, "I'm a H2 tag")
                        ]
                        )
                        )




// const heading = React.createElement("h1", { id:"heading" }, "Hellow world from React");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
