import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ContactApp from "./Components/ContactApp.jsx";

import "./styles/style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Contact /> */}
    <ContactApp />
  </React.StrictMode>
);
