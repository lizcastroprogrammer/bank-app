import React from "react";

export const Home = () => {
  return (
    <div className="card bg-light mb-3" style={{ maxWidth: "18rem" }}>
      <div className="card-header">Welcome to the Bank</div>
      <div className="card-body">
        <h5 className="card-title">For all your banking needs</h5>
      </div>
      <img src="/images/bank.png" alt="bank" />
    </div>
  );
};
