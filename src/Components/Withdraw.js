import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import LocalError from "./error";

const validationSearch = Yup.object().shape({
  withdraw: Yup.number()
    .typeError("*Must enter a number")
    .positive("*Must be a positive number"),
});

export const Withdraw = () => {
  const [withdraw, setWithdraw] = useState(0);
  return (
    <div
      className="card text-white bg-warning mb-3"
      style={{ maxWidth: "18rem" }}
    >
      <div className="card-header">Withdraw</div>
      <p>Balance: ${localStorage.getItem("balance")}</p>
      <div className="card-body">
        <Formik
          initialValues={{
            withdraw: "",
          }}
          validationSchema={validationSearch}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            resetForm();
            if (localStorage.getItem("balance") >= 0) {
              let balance = parseInt(localStorage.getItem("balance"));
              if (values.withdraw <= balance) {
                balance -= parseInt(values.withdraw);
                localStorage.setItem("balance", balance);
                setWithdraw(balance);
                console.log(
                  "Deposit was received! New balance: " +
                    localStorage.getItem("balance")
                );
                alert("Withdrawal was received!");
              } else {
                alert("Insufficient funds!");
              }
            }
            setSubmitting(true);
            setSubmitting(false);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="withdraw"
                  id="withdraw"
                  placeholder="Amount"
                  onChange={(event) =>
                    setFieldValue("withdraw", event.target.value)
                  }
                  onBlur={handleBlur}
                  value={values.withdraw}
                  className="form-control"
                />

                <LocalError
                  touched={touched.withdraw}
                  error={errors.withdraw}
                />
              </div>
              {!values.withdraw ||
              isNaN(values.withdraw) ||
              values.withdraw < 0 ? (
                <button type="submit" disabled="true">
                  Withdraw
                </button>
              ) : (
                <button type="submit">Withdraw</button>
              )}
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
