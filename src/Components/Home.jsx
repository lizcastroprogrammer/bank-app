import React from "react";
import { Card } from "./context";

export const Home = () => {
  return (
    <Card
      bgcolor="primary"
      txtcolor="white"
      header="BadBank Landing Page"
      title="Welcome to the bank"
      body={<img src="bank.png" className="img-fluid" alt="" />}
    />
  );
};
