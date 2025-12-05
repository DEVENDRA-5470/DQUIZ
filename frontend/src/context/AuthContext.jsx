import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null); 
  // user = { token, role, email }

  // -------- Restore user on page reload ----------
  useEffect(() => {
    const saved = localStorage.getItem("dquiz_user");
    if (saved) {
      try {
        setUser(JSON.parse(saved));
      } catch {
        localStorage.removeItem("dquiz_user");
      }
    }
  }, []);

  // -------- LOGIN ----------
  function login(data) {
    setUser(data);
    localStorage.setItem("dquiz_user", JSON.stringify(data));
  }

  // -------- LOGOUT ----------
  function logout() {
    setUser(null);
    localStorage.removeItem("dquiz_user");
  }

  // -------- HELPER FLAGS ----------
  const isLoggedIn = !!user?.token;
  const isAdmin = user?.role === "admin";
  const isStudent = user?.role === "student";

  return (
    <AuthContext.Provider
      value={{ 
        user, 
        login, 
        logout,
        isLoggedIn,
        isAdmin,
        isStudent
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
