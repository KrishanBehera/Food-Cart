import { useReducer, createContext, useContext } from "react";
import { FaN } from "react-icons/fa6";
export const Auth = createContext();
export const UseAuth = () => useContext(Auth);
function Reducers(Cart, Action) {
  if (Action.type === "AddCart") {
    return [...Cart, Action.payload];
  }
  if (Action.type === "Increment") {
    return Cart.map((item) => {
      if (item.id === Action.payload) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });
  }
  if (Action.type === "Decrement") {
    return Cart.map((Item) => {
      if (Item.id === Action.payload) {
        return { ...Item, quantity: Item.quantity - 1 };
      } else {
        return Item;
      }
    });
  }
  if (Action.type === "Remove") {
    return Cart.filter((X) => {
      return X.id !== Action.payload;
    });
  }
  if (Action.type === "Delete") {
    return [];
  }
}

function AuthContext({ children }) {
  const [Cart, dispatch] = useReducer(Reducers, []);
  function AddCart(add) {
    dispatch({ type: "AddCart", payload: add });
  }
  function Increment(id) {
    dispatch({ type: "Increment", payload: id });
  }
  function Decrement(id) {
    dispatch({ type: "Decrement", payload: id });
  }
  function remove(id) {
    dispatch({ type: "Remove", payload: id });
  }
  function Deletestore() {
    dispatch({ type: "Delete" });
  }
  return (
    <Auth.Provider
      value={{ Cart, AddCart, Increment, Decrement, remove, Deletestore }}
    >
      {children}
    </Auth.Provider>
  );
}

export default AuthContext;
