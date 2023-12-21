import { Navigate, useLocation } from "react-router-dom";
import { Loader } from "../components/Loader";

export const PrivateRoute = ({ children }) => {
  const location = useLocation();
  // const { user, isLoading } = useAuth();
  const user = false;
  const isLoading = false;

  if (isLoading) return <Loader />;

  if (!user) {
    return <Navigate state={location.pathname} to="/login" />;
  }

  return children;
};
