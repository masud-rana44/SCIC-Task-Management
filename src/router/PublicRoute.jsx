import { Navigate } from "react-router-dom";
import { Loader } from "../components/Loader";

export const PublicRoute = ({ children }) => {
  // const { user, isLoading } = useAuth();
  const user = false;
  const isLoading = false;

  if (isLoading) return <Loader />;

  if (user) {
    return <Navigate to="/" />;
  }

  return children;
};
