import React from "react";
import ReactDOM from "react-dom/client";
import Routers from "./Routers";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import MainScreen from "./collections/screen/MainScreen.jsx";
// import Register from "./collections/register/index.jsx";
// import Formulario from "./collections/login/Formulario.jsx";
// import App from "./collections/app/App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Routers />
  </React.StrictMode>
);
