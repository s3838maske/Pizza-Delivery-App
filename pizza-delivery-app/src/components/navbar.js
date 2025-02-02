import React from "react";
import { useSelector } from "react-redux";
export default function Navbar() {
  const cartstate = useSelector((state) => state.cartReducer);
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  return (
    <div className=" container-fluid shadow-lg p-3 mb-5 bg-dark rounde-5 ">
      <nav className="navbar navbar-expand-lg navbar-light bg-warning fixed-top">
        <a className="navbar-brand mb-0 h1" href="/">
          SM Pizza<i className="fa-solid fa-pizza-slice"></i>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {currentUser ? (
              <div className="btn-group">
                <a href="#"
                  className="dropdown-toggle nav-link"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {currentUser.name}
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" >
                    Orders
                  </a>
                  <a className="dropdown-item" href="#" >
                    Logout
                  </a>
                </div>
              </div>
            ) : (
              <li className="nav-item active">
                <a className="nav-link " href="/login">
                  Login
                </a>
              </li>
            )}

            <li className="nav-item active">
              <a className="nav-link " href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cart">
                <i className="fa-solid fa-cart-shopping"></i>
                {cartstate.cartItems.length}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
