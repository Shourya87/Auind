// App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useEffect } from "react";      

// Pages
import Mens from "./components/NavPages/Mens/Mens";
import Womens from "./components/NavPages/Womens/Womens";
import Kids from "./components/NavPages/Kids/Kids";
import Accessories from "./components/NavPages/Accessories/Accessories";
import Sale from "./components/NavPages/Sales/Sales";
import Home from "./components/Home";
import Cart from "./components/NavPages/Cart/Cart.jsx";
import Wishlist from "./components/NavPages/Wishlist/Wishlist.jsx";
import Product from "./components/NavPages/Product/Product.jsx";
import Search from "./components/NavPages/Search/Search.jsx";

// Auth Pages
import Login from "./components/Login.jsx";
import Signup from "./components/SignUp.jsx";
import Account from "./components/Account.jsx";
import Authenticate from "./components/Authenticate.jsx";

// Toast
import { Toaster } from "react-hot-toast";

// Providers
import { AuthProvider } from "./components/Context/AuthContext.jsx";
import { CartProvider } from "./components/Context/CardContext.jsx";
import { WishlistProvider } from "./components/Context/WishlistContext.jsx";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
      mirror: false,
    });
    AOS.refresh();
  }, []);

  return (
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <div className="pt-18">

            {/* TOAST */}
            <Toaster
              position="top-center"
              toastOptions={{
                duration: 800,
                style: {
                  background: "#0a0f12",
                  color: "#ffffff",
                  borderRadius: "10px",
                  border: "1px solid #00eaff",
                  boxShadow: "0 0 10px #00eaff55",
                  fontWeight: "600",
                },
              }}
            />

            {/* NAVBAR GLOBAL */}
            <Navbar />

            {/* ROUTES */}
            <Routes>
              <Route path="/" element={<Home />} />

              {/* NAV PAGES */}
              <Route path="/mens" element={<Mens />} />
              <Route path="/womens" element={<Womens />} />
              <Route path="/kids" element={<Kids />} />
              <Route path="/accessories" element={<Accessories />} />
              <Route path="/sale" element={<Sale />} />

              {/* PRODUCT */}
              <Route path="/product/:id" element={<Product />} />

              {/* SEARCH */}
              <Route path="/search" element={<Search />} />

              {/* CART */}
              <Route path="/cart" element={<Cart />} />

              {/* WISHLIST */}
              <Route path="/wishlist" element={<Wishlist />} />

              {/* AUTH */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

              {/* PROTECTED ACCOUNT PAGE */}
              <Route
                path="/account"
                element={
                  <Authenticate>
                    <Account />
                  </Authenticate>
                }
              />
            </Routes>
          </div>
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
