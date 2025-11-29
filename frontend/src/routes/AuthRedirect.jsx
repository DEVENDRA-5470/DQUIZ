import { Navigate } from "react-router-dom";

export default function AuthRedirect({ children }) {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (token && role) {
    return <Navigate to={role === "admin" ? "/admin-dashboard" : "/student-dashboard"} replace />;
  }

  return children;
}
