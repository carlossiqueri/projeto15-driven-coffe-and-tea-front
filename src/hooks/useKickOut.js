import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

export default function useKickOut() {
  const { userName, token } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token || !userName) {
      alert("Você precisa fazer o login para continuar comprando!");
      navigate("/login");
      return;
    }
  }, []);
}
