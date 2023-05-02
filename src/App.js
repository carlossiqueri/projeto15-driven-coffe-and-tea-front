import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login"
import PasswordReset from "./pages/PasswordReset";
import Register from "./pages/Register";
import Cart from './pages/Cart'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/password-reset" element={<PasswordReset/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
