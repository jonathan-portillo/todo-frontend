import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./utils/privateroute";
import LoggedIn from "./utils/isloggedin";
import Landing from "./components/landing";
import SignUp from "./components/signup";
import About from "./components/about";
import Task from "./components/task";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/tasknotes"
          element={
            <PrivateRoute>
              <Task />
            </PrivateRoute>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/"
          element={
            <LoggedIn>
              <Landing />
            </LoggedIn>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
