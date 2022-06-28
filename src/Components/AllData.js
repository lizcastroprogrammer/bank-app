import React from "react";

export const AllData = () => {
  return (
    <div className="card-group">
      {localStorage
        ?.getItem("name")
        ?.split(",")
        ?.map((name, index) => {
          return (
            <div
              className="card border-dark mb-3"
              style={{ maxWidth: "18rem" }}
              key={index}
            >
              <div className="card-header">{name}</div>
              <div className="card-body text-dark">
                <h5 className="card-title">
                  {localStorage.getItem("email").split(",")[index]}
                </h5>
                <p className="card-text">
                  {localStorage.getItem("password").split(",")[index]}
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
};
