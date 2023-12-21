import { Navigate, useLocation } from "react-router-dom";
import { Loader } from "../components/Loader";
import { useAuth } from "../contexts/AuthContext";

export const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, isLoading } = useAuth();

  if (isLoading) return <Loader />;

  if (!user) {
    return <Navigate state={location.pathname} to="/login" />;
  }

  return children;
};
