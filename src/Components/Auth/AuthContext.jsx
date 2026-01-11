import { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // We'll initialize with null to represent a logged-out state
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(false);

  // A dummy login function to simulate setting a role
  const login = (role) => {
    setUser({ id: '1', name: 'Alex', role: role });
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for easy access
export const useAuth = () => useContext(AuthContext);