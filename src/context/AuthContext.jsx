import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    const mockUsers = [
      { username: "admin", password: "admin123", role: "admin" },
      { username: "employee", password: "employee123", role: "employee" },
      { username: "reporting", password: "report123", role: "reportingOfficer" },
    ];

    const foundUser = mockUsers.find(
      (u) => u.username === username && u.password === password
    );

    if (foundUser) {
      setUser(foundUser);
      navigate(`/dashboard/${foundUser.role === 'reportingOfficer' ? 'reporting-officer' : foundUser.role}`);
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
