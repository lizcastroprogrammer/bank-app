import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  if (!localStorage.getItem("userLogin")) {
    return <Navigate to="/" replace />;
  }
  return children ? children : <Outlet />;
};
