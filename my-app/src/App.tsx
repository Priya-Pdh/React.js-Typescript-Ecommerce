import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import Aboutus from "./pages/Aboutus";
import Login from "./pages/Login";

import Thankyou from "./pages/Thankyou";
import Products from "./pages/Products";
import Homepage from "./pages/Homepage";
import Contactus from "./pages/Contactus";

import Checkout from "./pages/Checkout";
import CareForClothes from "./pages/CareForClothes";
import { CartProvider } from "./component/context/CartContext";
import Cart from "./component/cart/Cart";
import { UserProvider } from "./component/context/UserContext";
import { PersonalDetailsProvider } from "./component/context/PersonalDetailsContext";

function App() {
  return (
    <>
      <div className="App">
        <CartProvider>
          <PersonalDetailsProvider>
            <UserProvider>
              <Router>
                <div>
                  <Routes>
                    <Route path="/" element={<Login />} />

                    <Route path="/Homepage" element={<Homepage />} />
                    <Route path="/Aboutus" element={<Aboutus />} />

                    <Route path="Products" element={<Products />} />
                    
                    <Route path="/Cart" element={<Cart />} />

                    <Route path="/CareForClothes" element={<CareForClothes />}/>

                    <Route path="/Contactus" element={<Contactus />} />
                    <Route path="/Checkout" element={<Checkout />} />
                    <Route path="/Thankyou" element={<Thankyou />} />
                  </Routes>
                </div>
              </Router>
            </UserProvider>
          </PersonalDetailsProvider>
        </CartProvider>
      </div>
    </>
  );
}

export default App;
