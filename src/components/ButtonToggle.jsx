import React from "react";

// no need for this component at all in this particular app.
// it would have been cool if you filtered the already delivered packages
export default function ButtonToggle({ status, onClick }) {
  return (
    <div className="button-toggle-container">
      <button className="button-toggle" onClick={onClick}>
        <span>{status ? "Hide" : "View"} Your Order List</span>
      </button>
    </div>
  );
}
