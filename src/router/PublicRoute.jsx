import { Navigate } from "react-router-dom";
import { Loader } from "../components/Loader";
import { useAuth } from "../contexts/AuthContext";

export const PublicRoute = ({ children }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) return <Loader />;

  if (user) {
    return <Navigate to="/" />;
  }

  return children;
};
