import React from "react";

export default function Dashboard() {
  const token = localStorage.getItem("token");

  return (
    <div className="container mt-4">
      <h2>Dashboard</h2>
      {token ? (
        <p>You're logged in. Token saved in localStorage.</p>
      ) : (
        <p>Please log in to access your dashboard.</p>
      )}
    </div>
  );
}
