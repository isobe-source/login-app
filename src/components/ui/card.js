import React from "react";

export function Card({ children, style = {} }) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "400px",
        padding: "24px",
        backgroundColor: "white",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, style = {} }) {
  return <div style={{ ...style }}>{children}</div>;
}
