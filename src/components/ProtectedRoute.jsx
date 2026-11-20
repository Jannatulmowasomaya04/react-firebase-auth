import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  // Wait until Firebase has restored the session
  if (loading) return <p>Loading...</p>;

  // Not logged in: send to the Login page
  if (!user) return <Navigate to="/login" replace />;

  return children;
}
