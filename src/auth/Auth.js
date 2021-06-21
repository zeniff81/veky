import React, { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = props => {
  const [currentName, setCurrentName] = useState("invitado");
  const [currentUsername, setCurrentUsername] = useState(null);
  const [currentRole, setCurrentRole] = useState(["guest"]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    setIsLogged(currentName === "invitado" ? false : true);
    setIsAdmin(currentRole.includes("admin"));
  }, [currentName, currentRole]);

  function getInfo() {
    return {
      currentName,
      currentRole,
      currentUsername,
      isAdmin
    };
  }

  const logout = () => {
    if (isLogged) {
      setCurrentName("invitado");
      setCurrentRole("guest");
      setCurrentUsername(null);
    }
  };

  const value = {
    currentName,
    currentUsername,
    currentRole,
    isLogged,
    setCurrentName,
    setCurrentUsername,
    setCurrentRole,
    logout,
    getInfo
  };

  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth tiene que estar en el proveedor AuthContext");
  }

  return context;
};
