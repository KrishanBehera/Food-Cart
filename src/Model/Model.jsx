import { createPortal } from "react-dom";
import "./Model.css";
function Model({ children, Close }) {
  return createPortal(
    <>
      <div className="backdrop" onClick={Close}></div>
      <div className="frontdrop">{children}</div>
    </>,
    document.getElementById("root2")
  );
}

export default Model;
