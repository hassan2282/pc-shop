import "./index.css";
import { ToastContainer, toast } from "react-toastify";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Index from "./components/Index";
import Register from "./components/Register";
import Cart from "./components/Cart";
import CategoryBlog from "./components/CategoryBlog";
import CategorySearch from "./components/CategorySearch";
import SingleProduct from "./components/SingleProduct";
import SingleBlog from "./components/SingleBlog";
import SuccessfulPayment from "./components/SuccessfulPayment";
import FinalPayment from "./components/FinalPayment";
import OrderAddress from "./components/OrderAddress";
import OrderCancelled from "./components/OrderCancelled";
import OrderCurrent from "./components/OrderCurrent";
import OrderMessage from "./components/OrderMessage";
import OrdersReturn from "./components/OrdersReturn";
import ShoppingPayment from "./components/ShoppingPayment";
import ProfileFavorites from "./components/ProfileFavorites";
import PasswordUpdate from "./components/PasswordUpdate";
import AboutUs from "./components/AboutUs";
import { useSelector } from "react-redux";
import PrivateRoute from "./structure/PrivateRoute";
import EditProfile from "./components/EditProfile";
import Profile from "./components/Profile";
import Address from "./components/Address";
import Footer from './structure/footer.jsx';
import Header from './structure/Header.jsx';
import ScrollToTop from "./structure/ScrollToTop.jsx";

function App() {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  return (
    <>
      <BrowserRouter>

      <Header />
            <ScrollToTop />

          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/category-blog" element={<CategoryBlog />} />
            <Route path="/category-search" element={<CategorySearch />} />
            <Route path="/single-product" element={<SingleProduct />} />
            <Route path="/single-blog" element={<SingleBlog />} />

            <Route
              path="/register"
              element={
                !isAuthenticated ? <Register /> : <Navigate to="/" replace />
              }
            />

            <Route
              path="/login"
              element={!isAuthenticated ? <Login /> : <Navigate to="/" replace />}
            />

            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route
              path="/edit-profile"
              element={
                <PrivateRoute>
                  <EditProfile />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile-favorites"
              element={
                <PrivateRoute>
                  <ProfileFavorites />
                </PrivateRoute>
              }
            />
            <Route
              path="/cart"
              element={
                <PrivateRoute>
                  <Cart />
                </PrivateRoute>
              }
            />
            <Route
              path="/successfull-payment"
              element={
                <PrivateRoute>
                  <SuccessfulPayment />
                </PrivateRoute>
              }
            />
            <Route
              path="/final-payment"
              element={
                <PrivateRoute>
                  <FinalPayment />
                </PrivateRoute>
              }
            />
            <Route
              path="/order-address"
              element={
                <PrivateRoute>
                  <OrderAddress />
                </PrivateRoute>
              }
            />
            <Route
              path="/address"
              element={
                <PrivateRoute>
                  <Address />
                </PrivateRoute>
              }
            />
            <Route
              path="/order-cancelled"
              element={
                <PrivateRoute>
                  <OrderCancelled />
                </PrivateRoute>
              }
            />
            <Route
              path="/order-current"
              element={
                <PrivateRoute>
                  <OrderCurrent />
                </PrivateRoute>
              }
            />
            <Route
              path="/order-message"
              element={
                <PrivateRoute>
                  <OrderMessage />
                </PrivateRoute>
              }
            />
            <Route
              path="/orders-return"
              element={
                <PrivateRoute>
                  <OrdersReturn />
                </PrivateRoute>
              }
            />
            <Route
              path="/shopping-payment"
              element={
                <PrivateRoute>
                  <ShoppingPayment />
                </PrivateRoute>
              }
            />
            <Route
              path="/password-update"
              element={
                <PrivateRoute>
                  <PasswordUpdate />
                </PrivateRoute>
              }
            />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>

        <Footer /> 

        <ToastContainer />
      </BrowserRouter>        
    </>
    
  );
}

export default App;
