import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login"
import PasswordReset from "./pages/PasswordReset";
import Register from "./pages/Register";
import Catalog from "./pages/Catalog/Catalog.js"
import AuthContext from "./contexts/AuthContext.js"
import { useState } from "react"
import Cart from './pages/Cart'


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
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
    </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
