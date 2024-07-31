import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App"; // Ensure the path is correct
import "./index.css"; // Ensure the file exists in the src directory

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
//hello