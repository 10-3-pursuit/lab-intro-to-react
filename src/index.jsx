import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// must import react packages and npm run dev 

// required for main.jsx ALWAYS
// .createRoot and .render makes it so that it 
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
// ---- NOTES ----
/*
This code is a common pattern used in React projects for rendering the root component (App) into the DOM. Let me break down the code and explain its components:

ReactDOM.createRoot(document.getElementById('root')): This line creates a root ReactDOM "root" instance, specifying the DOM element where the React application will be mounted. In this case, it uses the element with the ID 'root'. The createRoot API is part of the Concurrent Mode feature introduced in React 18.

.render(: This method call initiates the rendering process. It takes the root component (in this case, <App />) as its argument.

<React.StrictMode>: This is a component provided by React that enables a set of development-only features. It helps catch common mistakes and potential issues in the application during development. It does this by running certain checks and warnings in the development mode that may not be performed in the production mode.

Putting it all together, this code is using Concurrent Mode with createRoot to render the App component into the DOM element with the ID 'root'. The React.StrictMode component is wrapped around App to enable development-specific checks and warnings.

While using React.StrictMode is not strictly necessary for all React projects, it is a good practice to include it, especially during development, to catch and address potential issues early in the development process. Once the application is ready for production, you may choose to omit React.StrictMode for the production build if you prefer not to incur the additional development-specific checks and warnings in the production environment.
*/