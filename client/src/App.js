import "./App.css";
// import RouterPage from "./Components/RouterPage";
import Signup from "./pages/auth/Signup.jsx";
import Login from "./pages/auth/Login.jsx"
import Home from "./pages/home/home.jsx";
import Payment from "./pages/payment/pay.jsx";
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
<>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/payment" element={<Payment />} />
</Routes>
</>
  )
}

export default App;
