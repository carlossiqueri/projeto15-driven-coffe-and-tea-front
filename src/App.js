import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/index.js"
import PasswordReset from "./pages/PasswordReset/index.js";
import Register from "./pages/Register";
import Catalog from "./pages/Catalog/Catalog.js"
import AuthContext from "./contexts/AuthContext.js"
import { useState } from "react"

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userName, setUserName] = useState(localStorage.getItem("userName"));

  return (
    <AuthContext.Provider value = {{token, setToken, userName, setUserName}}>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Catalog />}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/password-reset" element={<PasswordReset/>}/>
        </Routes>
    </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
