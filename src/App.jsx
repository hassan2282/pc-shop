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
import Master from "./AdminPanel/Layouts/Master.jsx";
import Adm_all_users from "./AdminPanel/Components/Users/Adm_all_users.jsx";
import Adm_add_user from "./AdminPanel/Components/Users/Adm_add_user.jsx";
import Adm_edit_user from "./AdminPanel/Components/Users/Adm_edit_user.jsx";
import Adm_show_user from "./AdminPanel/Components/Users/Adm_show_user.jsx";
import Adm_all_categories from "./AdminPanel/Components/Categories/Adm_all_categories.jsx";
import Adm_add_category from "./AdminPanel/Components/Categories/Adm_add_category.jsx";
import Adm_edit_category from "./AdminPanel/Components/Categories/Adm_edit_category.jsx";
import Adm_role_all from "./AdminPanel/Components/Roles/Adm_role_all.jsx";
import Adm_role_add from "./AdminPanel/Components/Roles/Adm_role_add.jsx";
import Adm_role_edit from "./AdminPanel/Components/Roles/Adm_role_edit.jsx";
import Adm_permission_all from "./AdminPanel/Components/Permissions/Adm_permission_all.jsx";
import Adm_permission_add from "./AdminPanel/Components/Permissions/Adm_permission_add.jsx";
import Adm_permission_edit from "./AdminPanel/Components/Permissions/Adm_permission_edit.jsx";
import Adm_product_all from "./AdminPanel/Components/products/Adm_product_all.jsx";
import Adm_product_add from "./AdminPanel/Components/products/Adm_product_add.jsx";
import Adm_product_edit from "./AdminPanel/Components/products/Adm_product_edit.jsx";
import Adm_product_show from "./AdminPanel/Components/products/Adm_product_show.jsx";
import Adm_article_all from "./AdminPanel/Components/Articles/Adm_article_all.jsx";
import Adm_article_add from "./AdminPanel/Components/Articles/Adm_article_add.jsx";
import Adm_article_edit from "./AdminPanel/Components/Articles/Adm_article_edit.jsx";
import Adm_order_all from "./AdminPanel/Components/Orders/Adm_order_all.jsx";
import Adm_order_show from "./AdminPanel/Components/Orders/Adm_order_show.jsx";
import Adm_report_all from "./AdminPanel/Components/Reports/Adm_report_all.jsx";
import Adm_tickets_all from "./AdminPanel/Components/Tickets/Adm_tickets_all.jsx";
import Adm_tickets_show from "./AdminPanel/Components/Tickets/Adm_tickets_show.jsx";
import Adm_gate from "./AdminPanel/Components/Gate/Adm_gate.jsx";
import Adm_gate_all from "./AdminPanel/Components/Gate/Adm_gate_all.jsx";
import Adm_gate_add from "./AdminPanel/Components/Gate/Adm_gate_add.jsx";


function App() {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const isAdmin = useSelector((state) => state.user?.role_id > 1);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="store/register"
            element={
              !isAuthenticated ? <Register /> : <Navigate to="/store/home" replace />
            }
          />

          <Route
            path="store/login"
            element={!isAuthenticated ? <Login /> : <Navigate to="/store/home" replace />}
          />

          <Route path="/" element={<Navigate to="/store/home" replace />} />

          <Route path="/store/*" element={<StoreContainer />}>
            <Route path="home" element={<Index />} />
            <Route path="category-blog" element={<CategoryBlog />} />
            <Route path="category-search" element={<CategorySearch />} />
            <Route path="single-product" element={<SingleProduct />} />
            <Route path="single-blog" element={<SingleBlog />} />

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
              element={<PasswordUpdate />}
            />
            <Route path="about-us" element={<AboutUs />} />
          </Route>


          <Route path="/admin/*" element={ <Master />}>
            <Route path="admGate" element={<Adm_gate />} />
            <Route path="admGate/all" element={<Adm_gate_all />} />
            <Route path="admGate/add" element={<Adm_gate_add />} />
            <Route path="index" element={<Adm_report_all />} />
            <Route path="users/all" element={<Adm_all_users />} />
            <Route path="users/add" element={<Adm_add_user />} />
            <Route path="user/edit/:id" element={<Adm_edit_user />} />
            <Route path="user/show/:id" element={<Adm_show_user />} />
            <Route path="categories/all" element={<Adm_all_categories />} />
            <Route path="category/add" element={<Adm_add_category />} />
            <Route path="category/edit/:id" element={<Adm_edit_category />} />
            <Route path="role/all" element={<Adm_role_all />} />
            <Route path="role/add" element={<Adm_role_add />} />
            <Route path="role/edit/:id" element={<Adm_role_edit />} />
            <Route path="permission/all" element={<Adm_permission_all />} />
            <Route path="permission/add" element={<Adm_permission_add />} />
            <Route path="permission/edit/:id" element={<Adm_permission_edit />} />
            <Route path="product/all" element={<Adm_product_all />} />
            <Route path="product/add" element={<Adm_product_add />} />
            <Route path="product/edit" element={<Adm_product_edit />} />
            <Route path="product/show" element={<Adm_product_show />} />
            <Route path="article/all" element={<Adm_article_all />} />
            <Route path="article/add" element={<Adm_article_add />} />
            <Route path="article/edit/:id" element={<Adm_article_edit />} />
            <Route path="order/all" element={<Adm_order_all />} />
            <Route path="order/show" element={<Adm_order_show />} />
            <Route path="report/all" element={<Adm_report_all />} />
            <Route path="ticket/all" element={<Adm_tickets_all />} />
            <Route path="ticket/show/:id" element={<Adm_tickets_show />} />
          </Route>
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>

  );
}

export default App;
