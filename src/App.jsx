import "./index.css";
import { ToastContainer, toast } from "react-toastify";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import Login from "./StorePanel/components/Login";
import Index from "./StorePanel/components/Index";
import Register from "./StorePanel/components/Register";
import Cart from "./StorePanel/components/Cart";
import CategoryBlog from "./StorePanel/components/CategoryBlog";
import CategorySearch from "./StorePanel/components/CategorySearch";
import SingleProduct from "./StorePanel/components/SingleProduct";
import SingleBlog from "./StorePanel/components/SingleBlog";
import SuccessfulPayment from "./StorePanel/components/SuccessfulPayment";
import FinalPayment from "./StorePanel/components/FinalPayment";
import OrderAddress from "./StorePanel/components/OrderAddress";
import OrderCancelled from "./StorePanel/components/OrderCancelled";
import OrderCurrent from "./StorePanel/components/OrderCurrent";
import OrderMessage from "./StorePanel/components/OrderMessage";
import OrdersReturn from "./StorePanel/components/OrdersReturn";
import ShoppingPayment from "./StorePanel/components/ShoppingPayment";
import ProfileFavorites from "./StorePanel/components/ProfileFavorites";
import PasswordUpdate from "./StorePanel/components/PasswordUpdate";
import AboutUs from "./StorePanel/components/AboutUs";
import { useSelector } from "react-redux";
import PrivateRoute from "./StorePanel/structure/PrivateRoute";
import EditProfile from "./StorePanel/components/EditProfile";
import Profile from "./StorePanel/components/Profile";
import Address from "./StorePanel/components/Address";
import StoreContainer from "./StorePanel/structure/StoreContainer.jsx";
import AdminContiner from "./AdminPanel/structure/AdminContiner.jsx";
import Dashboard from "./AdminPanel/components/Dashboard.jsx";

function App() {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  return (
    <>
      <BrowserRouter>
        <Routes>

        {/* StorePanel Routes */}
          <Route path="/store/*" element={<StoreContainer />}>
            <Route path="" element={<Index />} />
            <Route path="home" element={<Index />} />
            <Route path="category-blog" element={<CategoryBlog />} />
            <Route path="category-search" element={<CategorySearch />} />
            <Route path="single-product" element={<SingleProduct />} />
            <Route path="single-blog" element={<SingleBlog />} />

            <Route
              path="register"
              element={
                !isAuthenticated ? <Register /> : <Navigate to="/" replace />
              }
            />

            <Route
              path="login"
              element={!isAuthenticated ? <Login /> : <Navigate to="/" replace />}
            />

            <Route
              path="profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route
              path="edit-profile"
              element={
                <PrivateRoute>
                  <EditProfile />
                </PrivateRoute>
              }
            />
            <Route
              path="profile-favorites"
              element={
                <PrivateRoute>
                  <ProfileFavorites />
                </PrivateRoute>
              }
            />
            <Route
              path="cart"
              element={
                <PrivateRoute>
                  <Cart />
                </PrivateRoute>
              }
            />
            <Route
              path="successfull-payment"
              element={
                <PrivateRoute>
                  <SuccessfulPayment />
                </PrivateRoute>
              }
            />
            <Route
              path="final-payment"
              element={
                <PrivateRoute>
                  <FinalPayment />
                </PrivateRoute>
              }
            />
            <Route
              path="order-address"
              element={
                <PrivateRoute>
                  <OrderAddress />
                </PrivateRoute>
              }
            />
            <Route
              path="address"
              element={
                <PrivateRoute>
                  <Address />
                </PrivateRoute>
              }
            />
            <Route
              path="order-cancelled"
              element={
                <PrivateRoute>
                  <OrderCancelled />
                </PrivateRoute>
              }
            />
            <Route
              path="order-current"
              element={
                <PrivateRoute>
                  <OrderCurrent />
                </PrivateRoute>
              }
            />
            <Route
              path="order-message"
              element={
                <PrivateRoute>
                  <OrderMessage />
                </PrivateRoute>
              }
            />
            <Route
              path="orders-return"
              element={
                <PrivateRoute>
                  <OrdersReturn />
                </PrivateRoute>
              }
            />
            <Route
              path="shopping-payment"
              element={
                <PrivateRoute>
                  <ShoppingPayment />
                </PrivateRoute>
              }
            />
            <Route
              path="password-update"
              element={
                <PrivateRoute>
                  <PasswordUpdate />
                </PrivateRoute>
              }
            />
            <Route path="about-us" element={<AboutUs />} />
          </Route>




        {/* Admin panel Routes */}
          <Route path="/admin/*" element={<AdminContiner />}>
            <Route path="dashboard" element={<Dashboard/>} />
          </Route>




        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>

  );
}

export default App;
