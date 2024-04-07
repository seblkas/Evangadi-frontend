// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// import {BrowserRouter} from 'react-router-dom'




// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      {/* <AuthProvider> */}
        <App />
      {/* </AuthProvider> */}
    </Router>
  </React.StrictMode>
);


