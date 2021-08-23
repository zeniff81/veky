import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../auth/Auth";

const PrivateContent = ({ children }) => {
  const [showContent, setShowContent] = useState(false);
  const { isLogged } = useAuth();

  useEffect(() => {
    setShowContent(isLogged);
  }, []);

  return (
    <div>
      {showContent && children}
      {!showContent && <h2>Inicie sesión para ver este contenido</h2>}
    </div>
  );
};

export default PrivateContent;
