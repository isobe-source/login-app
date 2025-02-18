import React from "react";

export function Button({ children, onClick, style = {} }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 16px",
        fontSize: "16px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        backgroundColor: "#007bff",
        color: "white",
        transition: "background 0.3s",
        ...style,
      }}
    >
      {children}
    </button>
  );
}
