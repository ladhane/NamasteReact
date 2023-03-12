import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1",{id: "title1",key: "heading1"},"Heading 1");
const heading2 = React.createElement("h2",{id: "title2",key:"heading2"},"Heading 2");
const div = React.createElement("div",{id: "container"},[heading,heading2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);

