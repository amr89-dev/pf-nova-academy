import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import "./index.css";
import { GoogleOAuthProvider } from '@react-oauth/google';
ReactDOM.createRoot(document.getElementById("root")).render(
  
   
  <Provider store={store}> 
      <Router>
        
         <GoogleOAuthProvider clientId="50733054185-1gaasavkm9laqosq23fv4qpv3ov62fgu.apps.googleusercontent.com">
        <App />
        </GoogleOAuthProvider>
      </Router>
    </Provider>
  
);
