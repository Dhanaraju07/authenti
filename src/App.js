import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Dashboard from "./Components/Dashboard/Dashboard";
import Home from "./Components/Home/Home";
import { AuthContext } from "./AuthContext/AuthContext";

const AuthenticatedRoute = ({ element }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (user.role === "admin") {
    return <Navigate to="/dashboard" />;
  }

  if (user.role === "user") {
    return <Navigate to="/" />;
  }

  return element;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<Register />} />
        <Route path="/" element={<AuthenticatedRoute element={<Home />} />} />
        <Route
          path="/dashboard"
          element={<AuthenticatedRoute element={<Dashboard />} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
