import { NavLink } from "react-router-dom";
import "./Layout.css";
import Model from "../Model/Model";
import Login from "../Components/Login";
import { useEffect, useState } from "react";
import { BsCart } from "react-icons/bs";
import { UseAuth } from "../Context/AuthContext";
import { onAuthStateChanged, getAuth, signOut } from "firebase/auth";
import { app } from "../Config/Config";
import { FaUserCircle } from "react-icons/fa";

const Auth = getAuth(app);
function Layout() {
  const { Cart } = UseAuth();
  const [Isopen, setIsOpen] = useState(false);
  const [User, setUser] = useState(null);
  const [Logout, setLogout] = useState(false);
  function Close() {
    setIsOpen(false);
  }
  useEffect(() => {
    if (Isopen) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "scroll";
    }

    onAuthStateChanged(Auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, [Isopen]);

  return (
    <div className="main">
      <header className="header">
        <NavLink className="logo" to="Food-Cart">
          <img src="https://www.svgrepo.com/show/277644/pizza.svg" alt="" />
        </NavLink>
        <nav className="nav">
          <ul>
            <li>
              <NavLink to="Food-Cart">Home</NavLink>
            </li>
            <li>
              <NavLink to="fooditem">Food items</NavLink>
            </li>
            <li>
              <NavLink to="cart">
                <div className="Cart-logo">
                  <BsCart />
                  {Cart.length > 0 ? (
                    <span className="num">{Cart.length}</span>
                  ) : null}
                </div>
              </NavLink>
            </li>
            <li>
              {User ? (
                <div
                  className={Logout ? "user User-exits" : "user"}
                  onClick={() => {
                    setLogout(!Logout);
                  }}
                >
                  <FaUserCircle className="user-logo" />
                  <div className="backuser">
                    <h1>Email : {User.email}</h1>
                    <button
                      onClick={() => {
                        signOut(Auth);
                      }}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <button onClick={() => setIsOpen(true)} className="btn">
                  Sign Up
                </button>
              )}
            </li>
          </ul>
        </nav>
      </header>
      {Isopen && (
        <Model Close={Close}>
          <Login />
        </Model>
      )}
    </div>
  );
}

export default Layout;
