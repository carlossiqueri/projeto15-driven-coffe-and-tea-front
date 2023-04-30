import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/index.js"
import PasswordReset from "./pages/PasswordReset/index.js";
import Register from "./pages/Register";


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/password-reset" element={<PasswordReset/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
