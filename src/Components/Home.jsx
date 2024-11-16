import "./Home.css";
import Typed from "typed.js";
import { useEffect, useRef, useState } from "react";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function Home() {
  const [DayNight, setDayNight] = useState(false);
  const el = useRef();
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["In pizza, we crust 🍕"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
    });
    if (DayNight) {
      document.documentElement.style.background = "#1c2833";
      document.documentElement.style.color = "white";
    } else {
      document.documentElement.style.background = "white";
      document.documentElement.style.color = "black";
    }
    return () => {
      typed.destroy();
    };
  }, [DayNight]);
  return (
    <div>
      <div className={DayNight ? "Hero Active" : "Hero"}>
        <div className="home">
          <div className="box">
            <p>
              Pizza the circle of goodness <span ref={el}></span>
            </p>
            <NavLink to="fooditem">
              <button className="Home-btn">Order Now</button>
            </NavLink>
          </div>
          <div className="image">
            <img
              src="https://img.freepik.com/free-vector/delivery-service-with-mask-design_23-2148504209.jpg?t=st=1731667451~exp=1731671051~hmac=b0452628ca0a056e3a487762a3fca199e2819d08660bc45a0da76b30698327ef&w=1380"
              alt="pizza"
            />
          </div>
        </div>
        <div className="DayNight" onClick={() => setDayNight(!DayNight)}>
          <MdSunny className="sun" />
          <FaMoon className="moon" />
        </div>
      </div>
    </div>
  );
}

export default Home;
