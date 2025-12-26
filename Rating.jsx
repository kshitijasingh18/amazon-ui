import React from "react";

export default function Rating({ value, max = 5 }) {
  const fullStars = Math.floor(value);
  const halfStar = value - fullStars >= 0.5;
  const emptyStars = max - fullStars - (halfStar ? 1 : 0);

  return (
    <div style={{ display: "inline-flex", color: "#f0c14b" }}>
      {Array(fullStars).fill().map((_, i) => <span key={`full-${i}`}>&#9733;</span>)}
      {halfStar && <span>&#189;</span>}
      {Array(emptyStars).fill().map((_, i) => <span key={`empty-${i}`} style={{ color: "#ccc" }}>&#9733;</span>)}
    </div>
  );
}
