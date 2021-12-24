// NPM Packages
import ReactDom from "react-dom";

export default function Modal({ state }) {
  const [child, setChild] = state;

  if (child === null) return null;

  return ReactDom.createPortal(
    <>
      <div className="modal-background" />
      <div className="modal-window">
        <div className="btn-container">
          <button className="btn-close" onClick={() => setChild(null)}>
            &times;
          </button>
        </div>
        {child}
      </div>
    </>,
    document.getElementById("portal")
  );
}
