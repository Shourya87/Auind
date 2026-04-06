import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Restore user on refresh
  useEffect(() => {
    const saved = localStorage.getItem("auind-user");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  // Save user on change
  useEffect(() => {
    if (user) localStorage.setItem("auind-user", JSON.stringify(user));
    else localStorage.removeItem("auind-user");
  }, [user]);

  const login = (email, password) => {
    // DEMO (you can replace with backend later)
    const fakeUser = { name: "User", email };
    setUser(fakeUser);
  };

  const signup = (name, email, password) => {
    const newUser = { name, email };
    setUser(newUser);
  };

  const logout = () => {
  localStorage.removeItem("auind_user");
  setUser(null);

  toast.success("Logged out successfully!", {
    position: "top-right",
    style: {
      background: "#0b1014",
      color: "#00eaff",
      border: "1px solid #00ffff55",
    },
  });
};


  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
