import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import LocalError from "./error";

const validationSearch = Yup.object().shape({
  deposit: Yup.number()
    .typeError("*Must enter a number")
    .positive("*Must be a positive number"),
});

export const Deposit = () => {
  const [deposit, setDeposit] = useState(0);
  return (
    <div
      className="card text-white bg-success mb-3"
      style={{ maxWidth: "18rem" }}
    >
      <div className="card-header">Deposit</div>
      <p>Balance: ${localStorage.getItem("balance")}</p>
      <div className="card-body">
        <Formik
          initialValues={{
            deposit: "",
          }}
          validationSchema={validationSearch}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            if (localStorage.getItem("balance") === null) {
              localStorage.setItem("balance", 0);
            }
            let balance = parseInt(localStorage.getItem("balance"));
            balance += parseInt(values.deposit);
            localStorage.setItem("balance", balance);
            setDeposit(balance);
            console.log(
              "Deposit was received! New balance: " +
                localStorage.getItem("balance")
            );
            alert("Deposit was received!");
            setSubmitting(true);
            resetForm();
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
                  name="deposit"
                  id="deposit"
                  placeholder="Amount"
                  onChange={(event) =>
                    setFieldValue("deposit", event.target.value)
                  }
                  onBlur={handleBlur}
                  value={values.deposit}
                  className="form-control"
                />

                <LocalError touched={touched.deposit} error={errors.deposit} />
              </div>
              {!values.deposit ||
              isNaN(values.deposit) ||
              values.deposit < 0 ? (
                <button type="submit" disabled="true">
                  Deposit
                </button>
              ) : (
                <button type="submit">Deposit</button>
              )}
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
