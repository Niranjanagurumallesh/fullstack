import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import LazyLayout from "./components/ui/LazyLayout";
import UserLayout from "./pages/user/UserLayout";
import AdminLayout from "./pages/admin/AdminLayout";

const lazyLogin = lazy(() => import("./pages/auth/Login"));
const lazyRegister = lazy(() => import("./pages/auth/Register"));
const lazyHome = lazy(() => import("./pages/user/Home"));
const lazyAbout = lazy(() => import("./pages/user/About"));
const lazyProducts = lazy(() => import("./pages/user/Products"));
const lazyCart = lazy(() => import("./pages/user/Cart"));
const lazyDashboard = lazy(() => import("./pages/admin/Dashboard"));
const lazyUserInfo = lazy(() => import("./pages/admin/UserInfo"));

const UserRoutes = () => {
  return (
    <UserLayout>
      <Routes>
        <Route path="/home" element={<LazyLayout component={lazyHome} />} />
        <Route path="/about" element={<LazyLayout component={lazyAbout} />} />
        <Route path="/products" element={<LazyLayout component={lazyProducts}/>}/>
        <Route path="/Cart" element={<LazyLayout component={lazyCart}/>}/>
      </Routes>
    </UserLayout>
  );
};

const AdminRoutes = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route
          path="/dashboard"
          element={<LazyLayout component={lazyDashboard} />}
        />
        <Route path="/user-info" element={<LazyLayout component={lazyUserInfo} />} />
      </Routes>
    </AdminLayout>
  );
};
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/reign/user/login" />}/>
      <Route
        path="/reign/user/login"
        element={<LazyLayout component={lazyLogin} />}
      />
      <Route
        path="/reign/register"
        element={<LazyLayout component={lazyRegister} />}
      />
      <Route path="/reign/user/*" element={<UserRoutes />} />
      <Route path="/reign/admin/*" element={<AdminRoutes />} />
    </Routes>
  );
}

export default App;