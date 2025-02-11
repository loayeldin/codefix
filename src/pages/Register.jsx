import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../network/AuthApi";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";



const RegisterSchema = Yup.object().shape({
  // displayName: Yup.string().required("Required"),
  firstName: Yup.string()
    .required("firstName required")
    .min(3, "length should be more than 3 char"),
  lastName: Yup.string()
    .required("lastName required")
    .min(3, "length should be more than 3 char"),
  email: Yup.string().required("email is required").email("invalid email"),
  password: Yup.string()
    .required("password is Required")
    .min(8, "password should be min 8 char")
    .matches(RegExp("(.*[a-z].*)"), "Lowercase")
    .matches(RegExp("(.*[A-Z].*)"), "Uppercase")
    .matches(RegExp("(.*\\d.*)"), "Number")
    .matches(RegExp('[!@#$%^&*(),.?":{}|<>]'), "Special"),

  confirmPassword: Yup.string()
    .required("confirm password required")
    .oneOf([Yup.ref("password"), null], "password must match"),
});
function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false)
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.userInfo);
  const formik = useFormik({
    initialValues: {
      displayName: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      // update the displayName field
      const updatedValues = {
        ...values,
        displayName: `${values.firstName} ${values.lastName}`,
      };
      //remove the firstName and lastName fields and confirmpassword
      const { firstName, lastName, confirmPassword, ...finalValues } =
        updatedValues;

      dispatch(registerAction(finalValues)).then((res) => {
        console.log(res);
        if (res?.error?.message) {
          toast.error(res?.payload);
        } else {
          toast.success("account created successfully", {
            onClose: () => {
              // Navigate to the login page after the toast is closed
              navigate("/login");
            },
          });
        }
      });
    },
  });
  const handleChange = (e) => {
    formik.handleChange(e);
  };

  return (
    <div className="login min-h-[100vh] flex justify-center items-center ">
      <form
        className="w-[85%] xl:w-[46%] bg-background text-center rounded-2xl text-whiteText p-8 mt-28  "
        onSubmit={formik.handleSubmit}
        onReset={formik.handleReset}
      >
        <div className=" flex justify-center gap-x-3 mb-4 items-center">
          <img src="/assets/logo.svg" className="w-14" alt="logo" />
          <h1 className="text-xl">
            welcome to{" "}
            <span className="logo-name text-2xl tracking-widest">
              <span className="text-mainColor">c</span>
              ode
              <span className="text-mainColor"> f</span>
              ix
            </span>
          </h1>
        </div>
        <p className="text-sm">
          Login to aceternity if you can because we don't have a login flow yet
        </p>
        <div className="flex flex-col md:flex-row gap-x-3">
          <label className="form-control w-full max-w-2xl my-4 ">
            <div className="label mb-1">
              <span className="label-text text-whiteText ">First Name</span>
            </div>
            <input
              type="text"
              placeholder="joe"
              name="firstName"
              onChange={handleChange}
              onBlur={formik.handleBlur}
              className="input input-bordered w-full max-w-2xl focus:outline-mainColor"
              required
            />
            {formik.errors.firstName && formik.touched.firstName && (
              <p className="alert text-red-500 text-xs mt-2">
                {formik.errors.firstName}
              </p>
            )}
          </label>

          <label className="form-control w-full max-w-2xl my-4 ">
            <div className="label mb-1">
              <span className="label-text text-whiteText ">Last Name</span>
            </div>
            <input
              type="text"
              placeholder="Doe"
              name="lastName"
              onChange={handleChange}
              onBlur={formik.handleBlur}
              className="input input-bordered w-full max-w-2xl focus:outline-mainColor"
              required
            />
            {formik.errors.lastName && formik.touched.lastName && (
              <p className="alert text-red-500 text-xs mt-2">
                {formik.errors.lastName}
              </p>
            )}
          </label>
        </div>
        <label className="form-control w-full  mb-4 ">
          <div className="label mb-1">
            <span className="label-text text-whiteText ">Email</span>
          </div>
          <input
            type="email"
            placeholder="hi@yourcompany.com"
            name="email"
            onChange={handleChange}
            onBlur={formik.handleBlur}
            className="input input-bordered w-full  focus:outline-mainColor"
            required
          />
          {formik.errors.email && formik.touched.email && (
            <p className="alert text-red-500 text-xs mt-2">
              {formik.errors.email}
            </p>
          )}
        </label>
        <label className="form-control w-full mb-4 ">
          <div className="label mb-1">
            <span className="label-text text-whiteText">passowrd</span>
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
              onBlur={formik.handleBlur}
              className="input input-bordered w-full   focus:outline-mainColor"
              required
            />
            <span 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={()=>setShowPassword(!showPassword)}
            >
              <FontAwesomeIcon icon={ showPassword ? faEyeSlash: faEye } className="text-gray-500 text-lg" />
            </span>
          </div>

          {formik.errors.password && formik.touched.password && (
            <p className="alert text-red-500 text-xs mt-2">
              {formik.errors.password}
            </p>
          )}
        </label>
        <label className="form-control w-full  mb-4 ">
          <div className="label mb-1">
            <span className="label-text text-whiteText">confirm password</span>
          </div>
          <div className="relative">
            <input
              type={showPassword? "text" :"password"}
              name="confirmPassword"
              placeholder="confirm your password"
              onChange={handleChange}
              onBlur={formik.handleBlur}
              className="input input-bordered w-full  focus:outline-mainColor"
              required
            />
            <span 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={()=>setShowPassword(!showPassword)}
              >
              <FontAwesomeIcon icon={ showPassword ? faEyeSlash: faEye } className="text-gray-500" />
            </span>
          </div>

          {formik.errors.confirmPassword && formik.touched.confirmPassword && (
            <p className="alert text-red-500 text-xs mt-2">
              {formik.errors.confirmPassword}
            </p>
          )}
        </label>

        <button
          type="submit"
          className={`w-full  text-whiteText rounded-lg py-2 my-4 
            ${
              !formik.isValid || !formik.dirty
                ? `bg-black cursor-not-allowed`
                : `bg-mainColor cursor-pointer`
            }
          `}
          disabled={!formik.isValid || !formik.dirty}
        >
          Sign in
        </button>
        <div className="flex items-center gap-3 my-4  before:h-px before:flex-1 before:bg-whiteText after:h-px after:flex-1 after:bg-whiteText">
          <span className="text-xs text-muted-foreground">Or</span>
        </div>
        <button className="border border-mainColor w-full py-2 rounded-lg transition-all ease-in hover:bg-mainColor">
          Login with Google
        </button>
      </form>
    </div>
  );
}

export default Register;
