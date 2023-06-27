import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import thunk from "redux-thunk";
import { legacy_createStore as createStore } from "redux";
import { applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { todoReducer } from "./reducers/todoReducer";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = createRoot(document.getElementById("root"));
const store = createStore(todoReducer, applyMiddleware(thunk));

root.render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </Router>
);

reportWebVitals();
