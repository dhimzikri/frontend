import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import Navbar from "./components/Navbar";
import UserTrd from "./components/UserTrd";
import AddUserTrd from "./components/AddUserTrd";
import EditUserTrd from "./components/EditUserTrd";
import Tes from "./components/Tes";

// import Footer from "./components/Footer";
 
function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="add" element={<AddUser />} />
          <Route path="edit/:id" element={<EditUser />} />
          <Route path="edit_trd/:id" element={<EditUserTrd />} />
          <Route path="userTrd" element={<UserTrd />} />
          <Route path="tes" element={<Tes />} />
          <Route path="add_trd" element={<AddUserTrd />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
 
export default App;