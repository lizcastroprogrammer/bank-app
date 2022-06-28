import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [page, setPage] = useState("Home");

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#/Home/">
          <Link to="/">BadBank</Link>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className={`nav-link${page === "Create" ? " active" : ""}`}
                href="#/CreateAccount/"
                onClick={() => setPage("Create")}
              >
                <Link to="create-account">Create Account</Link>
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link${page === "Deposit" ? " active" : ""}`}
                href="#/deposit/"
                onClick={() => setPage("Deposit")}
              >
                <Link to="deposit">Deposit</Link>
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link${page === "Withdraw" ? " active" : ""}`}
                href="#/withdraw/"
                onClick={() => setPage("Withdraw")}
              >
                <Link to="withdraw">Withdraw</Link>
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link${page === "AllData" ? " active" : ""}`}
                href="#/alldata/"
                onClick={() => setPage("AllData")}
              >
                <Link to="all-data">AllData</Link>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
