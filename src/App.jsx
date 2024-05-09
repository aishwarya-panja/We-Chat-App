import React, { Children, useContext } from "react";
import "./style.scss";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext);    //  uses the useContext hook to access the currentUser variable from the AuthContext.
console.log(currentUser)                // It retrieves the current user's authentication status from the context.

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="login" />; // if there is no currentUser then redirects the user to login page
    }
    return children ;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              //<ProtectedRoute>
              //  <Home/>
              //</ProtectedRoute>
              currentUser?<Home/>:<Login/>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
