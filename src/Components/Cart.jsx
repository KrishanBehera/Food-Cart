import { UseAuth } from "../Context/AuthContext";
import "./Cart.css";
import Ordersuccess from "./Ordersuccess";
import { useState } from "react";
function Cart() {
  const [Order, setOrder] = useState(true);
  const { Cart: Cart2, Increment, Decrement, remove, Deletestore } = UseAuth();
  if (Cart2.length > 0) {
    var totalAmount = Cart2.reduce((acc, currentvalue) => {
      return acc + currentvalue.Price * currentvalue.quantity;
    }, 20);
  }
  return (
    <>
      {Order ? (
        <div className="Cart">
          <div>
            <h2 className="Heading">
              {Cart2.length > 0 ? "Food items" : "No Cart"}
            </h2>

            {Cart2.map((X) => {
              return (
                <div key={X.id} className="Food">
                  <div>
                    <img src={X.Img} alt="food" />
                  </div>
                  <div className="Itmes">
                    <p>{X.FoodName}</p>
                    <p>₹ {X.Price}</p>
                    <div className="button">
                      <button onClick={() => Increment(X.id)} className="btn-1">
                        +
                      </button>
                      <p>{X.quantity}</p>
                      <button
                        onClick={() => {
                          if (X.quantity > 1) {
                            Decrement(X.id);
                          }
                        }}
                        className="btn-1"
                      >
                        -
                      </button>
                      <button
                        onClick={() => remove(X.id)}
                        className="remove-btn"
                      >
                        Remove Food
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="Summary">
            <div className="Order">
              <p>Delivery Charge {Cart2.length > 0 ? <span>20</span> : null}</p>
              <h2>
                Order Total <span>{totalAmount}</span>
              </h2>
            </div>
            <button
              onClick={() => {
                if (Cart2.length > 0) {
                  setOrder(false);
                  Deletestore();
                }
              }}
            >
              Order place
            </button>
          </div>
        </div>
      ) : (
        <Ordersuccess />
      )}
    </>
  );
}

export default Cart;
