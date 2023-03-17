import React from "react";
import ReactDOM from "react-dom/client";

// 1. using React.createElement
const h1 = React.createElement("h1",{},"heading1");
const h2 = React.createElement("h2",{},"heading2");
const h3 = React.createElement("h3",{},"heading3");
const header = React.createElement("div",{class:"title"},[h1,h2,h3]);


// 2. using jsx
// const header = (
//   <div className="title">
//     <h1>Heading1</h1>
//     <h2>Heading2</h2>
//     <h3>Heading3</h3>
//   </div>
// );


// 3. using functional component
// const HeaderComponent = () => (<div className="title">
//       <h1>Heading1</h1>
//       <h2>Heading2</h2>
//       <h3>Heading3</h3>
//     </div>)

// 4. coponent with attributes in the tag (uncomment till 5.1 for 5.2 to work)
// const TitleComponent = () => (<div className="title">
//        <h1 id="h1">Heading1</h1>
//        <h2 id="h2">Heading2</h2>
//        <h3 id="h3">Heading3</h3>
//      </div>)

// const HeaderComponent = () => (
//     <div>
//         <TitleComponent/>
//     </div>
// )

// 5.1
// const TitleComponent = (<div className="title">
//        <h1 id="h1">Heading1</h1>
//        <h2 id="h2">Heading2</h2>
//        <h3 id="h3">Heading3</h3>
//      </div>)

// const HeaderComponent = () => (
//     <div>
//         {TitleComponent}
//     </div>
// )

// 5.3
// const TitleComponent = () => (
//      <div className="title">
//        <h1 id="h1">Heading1</h1>
//        <h2 id="h2">Heading2</h2>
//        <h3 id="h3">Heading3</h3>
//      </div>)

// const HeaderComponent = () =>{ return (
// <TitleComponent></TitleComponent>
// )};



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(header); // for 3 & 5 use <HeaderComponent/> or HeaderComponent()
                                 // for 4 use <TitleComponent/> or TitleComponent()
