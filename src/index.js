import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App0 from "./App0";
import "bootstrap/dist/css/bootstrap.min.css";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App0 tab="home" />);

// ReactDOM.render(
//   <React.StrictMode>
//     <App0 />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
