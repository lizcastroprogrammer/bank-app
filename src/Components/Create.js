import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import LocalError from "./error";

const validationSearch = Yup.object().shape({
  name: Yup.string().required("*Required"),
  email: Yup.string().required("*Required"),
  password: Yup.string()
    .min(8, "*Needs to be at least 8 characters")
    .required("*Required"),
});

export const Create = () => {
  const [success, setSuccess] = useState(false);

  return (
    <div
      className="card text-white bg-primary mb-3"
      style={{ maxWidth: "18rem" }}
    >
      <div className="card-header">Create Account</div>
      <div className="card-body">
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
          }}
          validationSchema={validationSearch}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            alert("Account successfully created!");
            if (localStorage.getItem("name") === null) {
              localStorage.setItem("name", values.name);
            } else {
              localStorage.setItem(
                "name",
                localStorage.getItem("name") + "," + values.name
              );
            }
            if (localStorage.getItem("email") === null) {
              localStorage.setItem("email", values.email);
            } else {
              localStorage.setItem(
                "email",
                localStorage.getItem("email") + "," + values.email
              );
            }
            if (localStorage.getItem("password") === null) {
              localStorage.setItem("password", values.password);
            } else {
              localStorage.setItem(
                "password",
                localStorage.getItem("password") + "," + values.password
              );
            }
            console.log("name: ", localStorage.getItem("name"));
            console.log("email: ", localStorage.getItem("email"));
            console.log("password: ", localStorage.getItem("password"));
            setSubmitting(true);
            setSuccess(true);
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
            isValid,
          }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  onChange={(event) =>
                    setFieldValue("name", event.target.value)
                  }
                  onBlur={handleBlur}
                  value={values.name}
                  className="form-control"
                />

                <LocalError touched={touched.name} error={errors.name} />

                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                  onChange={(event) =>
                    setFieldValue("email", event.target.value)
                  }
                  onBlur={handleBlur}
                  value={values.email}
                  className="form-control"
                />

                <LocalError touched={touched.email} error={errors.email} />

                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={(event) =>
                    setFieldValue("password", event.target.value)
                  }
                  onBlur={handleBlur}
                  value={values.password}
                  className="form-control"
                />

                <LocalError
                  touched={touched.password}
                  error={errors.password}
                />
                {!success ? (
                  <button type="submit" disabled={!isValid}>
                    Submit
                  </button>
                ) : (
                  <button type="submit">Add Another Account</button>
                )}
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
