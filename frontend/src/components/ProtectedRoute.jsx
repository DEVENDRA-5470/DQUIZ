import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children, allowed }) {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const location = useLocation();

  // =========== NOT LOGGED IN =============
  if (!token || !role) {
    return (
      <Navigate 
        to="/login"
        replace
        state={{ from: location.pathname }}   // store where user was trying to go
      />
    );
  }

  // =========== ROLE NOT PERMITTED ============
  if (!allowed.includes(role)) {
    return <Navigate to={`/${role}-dashboard`} replace />;
  }

  return children;
}
