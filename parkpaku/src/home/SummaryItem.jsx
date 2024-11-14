import React from "react";
import "./SummaryItem.css";

function SummaryItem({ iconPlaceholder, label, value }) {
  return (
    <div className="summary-item">
      <div className="summary-image-placeholder">{iconPlaceholder}</div>
      <p className="summary-item-label">{label}</p>
      <p className="summary-item-value">{value}</p>
    </div>
  );
}

export default SummaryItem;
