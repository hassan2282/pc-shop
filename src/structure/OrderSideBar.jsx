import { TbLogout2 } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink} from "react-router-dom";
import { toast } from "react-toastify";

function OrderSideBar() {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    dispatch({
      type: "logout",
    });
    toast.success("شما با موفقیت از حساب کاربری خود خارج شدید");
  };

  return (
    <div className="profile-page-aside col-xl-3 col-lg-4 col-md-6 center-section order-1">
      <div className="profile-card-1">
        {/* <!--image--> */}
        <div className="img">
          <img
            alt="profile"
            className="object-cover"
            src={
              user?.profile
                ? `http://127.0.0.1:8000/storage/media/${user?.profile}`
                : "src/assets/img/profile.jpg"
            }
          />
        </div>
        <a
          className="view-more"
          href=""
          data-toggle="modal"
          data-target="#myModal"
        >
          <i className="fa fa-plus-circle"></i>
        </a>
        <div
          className="modal-share modal-width-custom modal fade"
          id="myModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  &times;
                </button>
                <h4 className="modal-title" id="myModalLabel">
                  تغییر پروفایل
                </h4>
              </div>
              <div className="modal-body">
                <ul className="profile-avatars default text-center">
                  <li>
                    <img
                      className="profile-avatars-item"
                      src="src/assets/img/profile/1.png"
                    />
                  </li>
                  <li>
                    <img
                      className="profile-avatars-item"
                      src="src/assets/img/profile/2.png"
                    />
                  </li>
                  <li>
                    <img
                      className="profile-avatars-item"
                      src="src/assets/img/profile/3.png"
                    />
                  </li>
                  <li>
                    <img
                      className="profile-avatars-item"
                      src="src/assets/img/profile/4.png"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!--text--> */}

        <div
          className="modal-share modal-width-custom modal fade"
          id="returnModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="returnModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  &times;
                </button>
                <h4 className="modal-title" id="myModalLabel">
                  تایید محصول
                </h4>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-12 col-lg-4 col-md-4">
                    <img src="src/assets/img/product_img/p_7.jpg" />
                    <div className="form-account-agree">
                      <label className="checkbox-form checkbox-primary">
                        <input type="checkbox" id="agree" />
                        <span className="checkbox-check"></span>
                      </label>
                      <label htmlFor="agree">گوشی اپل آیفون 14 پرو</label>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4 col-md-4">
                    <img src="src/assets/img/product_img/p_11.jpg" />
                    <div className="form-account-agree">
                      <label className="checkbox-form checkbox-primary">
                        <input type="checkbox" id="agree" />
                        <span className="checkbox-check"></span>
                      </label>
                      <label htmlFor="agree">کنسول بازی</label>
                    </div>
                  </div>
                  <div className="col-12 col-lg-12 col-md-12">
                    <a href="" className="btn big_btn btn-main-masai">
                      اعمال
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mid-section">
          <div className="name">{user ? user.username : " "}</div>
          <div className="description">
            <Link href="/edit-profile" className="btn btn-main-masai">
              ویرایش اطلاعات
            </Link>
            <a onClick={logoutHandler} className="btn btn-second-masai">
              خروج
            </a>
          </div>
          <div className="line"></div>
          <div className="stats">
            <div className="stat">
              2<div className="subtext">سفارش جاری</div>
            </div>
            <div className="stat">
              68
              <div className="subtext">تحویل داده</div>
            </div>
            <div className="stat">
              15
              <div className="subtext">مرجوع شده</div>
            </div>
          </div>
        </div>
      </div>
      <div className="responsive-profile-menu show-md location_me">
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-second-masai dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fa fa-navicon"></i>
            حساب کاربری شما
          </button>
          <div className="dropdown-menu dropdown-menu-right text-right">
            <Link to="/profile" className="dropdown-item">
              <i className="fa fa-user-large colormain"></i>
              پروفایل
            </Link>

            <Link to="/edit-profile" className="dropdown-item  active-menu">
              <i className="fa fa-pencil colormain" aria-hidden="true"></i>
              ویرایش اطلاعات
            </Link>
            <Link to="/order-message" className="dropdown-item  ">
              <i
                className="fa fa-cart-arrow-down colormain"
                aria-hidden="true"
              ></i>
              تحویل داده شده
            </Link>
            <Link to="/order-current" className="dropdown-item ">
              <i
                className="fa fa-cart-arrow-down colormain"
                aria-hidden="true"
              ></i>{" "}
              سفارش جاری
            </Link>
            <Link to="/order-cancelled" className="dropdown-item">
              <i className="fa fa-times colormain" aria-hidden="true"></i>
              لغو شده
            </Link>
            <Link to="/orders-return" className="dropdown-item">
              <i className="fa fa-thumbs-down colormain" aria-hidden="true"></i>
              مرجوع محصول
            </Link>

            <Link to="/profile-favorites" className="dropdown-item">
              <i className="fa fa-bookmark colormain" aria-hidden="true"></i>
              لیست های من
            </Link>

            <Link to="/order-address" className="dropdown-item">
              <i
                className="fa fa-map icon-icon colormain"
                aria-hidden="true"
              ></i>
              آدرس ها
            </Link>

            <Link to="/order-message" className="dropdown-item">
              <i className="fa fa-bell colormain" aria-hidden="true"></i>
              پیغام ها
            </Link>

            <Link to="/password-update" className="dropdown-item">
              <i className="fa fa-shield colormain" aria-hidden="true"></i>
              امنیت و تغییر رمز
            </Link>
            {isAuthenticated && (
              <a
                onClick={logoutHandler}
                className="dropdown-item text-danger hover:cursor-pointer"
              >
                <div className="flex flex-row space-x-4 items-center justify-start">
                  <TbLogout2
                    size={24}
                    className=" colormain"
                    aria-hidden="true"
                    color="#57b6bb"
                  />
                  خروج
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="profile-menu max-md:hidden">
        <ul className="profile-menu-items">
          <li>
            <NavLink
              to="/order-current"
              className="dropdown-item"
              activeclassname="active" // کلاس فعال شدن
            >
              <i
                className="fa fa-cart-arrow-down colormain"
                aria-hidden="true"
              ></i>
              تحویل داده شده
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/order-current"
              className="dropdown-item"
              activeclassname="active"
            >
              <i
                className="fa fa-cart-arrow-down colormain"
                aria-hidden="true"
              ></i>
              سفارش جاری
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/order-cancelled"
              className="dropdown-item"
              activeclassname="active"
            >
              <i className="fa fa-times colormain" aria-hidden="true"></i>
              لغو شده
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/orders-return"
              className="dropdown-item"
              activeclassname="active"
            >
              <i className="fa fa-thumbs-down colormain" aria-hidden="true"></i>
              مرجوع محصول
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/profile-favorites"
              className="dropdown-item"
              activeclassname="active"
            >
              <i className="fa fa-bookmark colormain" aria-hidden="true"></i>
              لیست های من
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/order-address"
              className="dropdown-item"
              activeclassname="active"
            >
              <i
                className="fa fa-map icon-icon colormain"
                aria-hidden="true"
              ></i>
              آدرس ها
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/order-message"
              className="dropdown-item"
              activeclassname="active"
            >
              <i className="fa fa-bell colormain" aria-hidden="true"></i>
              پیغام ها
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/profile"
              className="dropdown-item"
              activeclassname="active"
            >
              <i className="fa fa-user-large colormain"></i>
              پروفایل
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/edit-profile"
              className="dropdown-item"
              activeclassname="active"
            >
              <i className="fa fa-pencil colormain" aria-hidden="true"></i>
              ویرایش اطلاعات
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/password-update"
              className="dropdown-item"
              activeclassname="active"
            >
              <i className="fa fa-shield colormain" aria-hidden="true"></i>
              امنیت و تغییر رمز
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default OrderSideBar;
