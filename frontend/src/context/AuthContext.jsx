import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // {token, role, email}

  function login(data) {
    setUser(data);                      // store token + role in memory
    localStorage.setItem("dquiz_user", JSON.stringify(data)); // persist refresh-proof
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("dquiz_user");
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
