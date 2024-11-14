import React from "react";
import "./SummaryItem.css";

function SummaryItem({ path, label, value }) {
  return (
    <div className="summary-item">
      <div className="summary-image-placeholder">
        <img src={path} alt="icon" className="summary-icon" />
      </div>
      <p className="summary-item-label">{label}</p>
      <p className="summary-item-value">{value}</p>
    </div>
  );
}

export default SummaryItem;
