import { Product } from "../Product/Product";
import "../Components/FoodItems.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { UseAuth } from "../Context/AuthContext";

function FoodItems() {
  const { Cart, AddCart } = UseAuth();
  return (
    <div className="top">
      <div className="fooditme">
        {Product.map((Itme) => {
          return (
            <div key={Itme.id} className="Food-1">
              <img src={Itme.img} alt="food" />
              <p className="foodname">{Itme.foodname}</p>
              <p className="foodprice">₹ {Itme.price}</p>
              <button
                className="order"
                onClick={() => {
                  for (let X of Cart) {
                    if (Itme.id === X.id) {
                      alert("already added");
                      return;
                    }
                  }
                  const user = {
                    FoodName: Itme.foodname,
                    Img: Itme.img,
                    Price: Itme.price,
                    id: Itme.id,
                    quantity: 1,
                  };
                  AddCart(user);
                }}
              >
                Add
              </button>
            </div>
          );
        })}
      </div>
      <div className="footer">
        <div className="soial-footer">
          <div className="footer-logo">
            <img src="https://www.svgrepo.com/show/267194/pizza.svg" alt="" />
          </div>
          <h1>Pizza makes everything better.</h1>
          <div className="social">
            <FaFacebookSquare />
            <FaInstagram />
            <FaSquareXTwitter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodItems;
