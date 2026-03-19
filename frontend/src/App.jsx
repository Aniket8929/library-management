import React from "react";
import { Route, Routes } from "react-router-dom";
import Mainlayout from "./layout/Mainlayout";
import Home from "./pages/Home";
import Dashbaord from "./pages/dashbaord";
import Auth from "./auth/Auth";
import ExploreBooks from "./pages/ExploreBooks";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ isAuth, children }) {
  if (!isAuth) {
    return <Navigate to="/auth" />;
  }
  return children;
}

function PublicRoute({ isAuth, children }) {
  if (isAuth) {
    return <Navigate to="/dashboard" />;
  }
  return children;
}
function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicRoute isAuth={true}>
            <Mainlayout />
          </PublicRoute>
        }
      >
        <Route index element={<Home />} />
        <Route path="auth" element={<Auth />} />
        <Route path="explore-book" element={<ExploreBooks />} />
      </Route>

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute isAuth={true}>
            <Dashbaord />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
