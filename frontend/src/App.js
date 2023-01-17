import { useSelector } from "react-redux";
import "./App.css";
import Navbar from "./Components/Navbar";
import AllRoutes from "./pages/AllRoutes";
function App() {
  const { cartItems, msg } = useSelector((state) => state.cart);
  const { isAuth, token } = useSelector((state) => state.user);
  const msg2 = useSelector((state) => state.wishlist.msg);
  
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
