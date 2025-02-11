import { useFormik } from "formik";
import React, {useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from 'yup'
import { loginAction } from "../network/AuthApi";
import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const loginSchema = Yup.object().shape({
  email: Yup.string().required('email required').email('invalid email address'),
  password: Yup.string().required("password required")
})


function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)

  const formik = useFormik({
    initialValues:{
      email:'',
      password:''
    },
    validationSchema:loginSchema,
    onSubmit: (values)=>{
     
      console.log(values);
      dispatch(loginAction(values)).then((res)=>{
        if (res?.error?.message) {
          toast.error(res?.payload);
        } else {
          toast.success("logged in successfully", {
            onClose: () => {
              // Navigate to the login page after the toast is closed
              navigate("/home");
            },
          });
        }
      })
    }
  })
  return (
    <div className="login min-h-[100vh] flex justify-center items-center ">

      <form className="w-[85%] md:w-[65%] lg:w-[36%] bg-background text-center rounded-2xl text-whiteText p-8 mt-24 "
      onSubmit={formik.handleSubmit}
      onReset={formik.handleReset}
      >
        <div className=" flex justify-center gap-x-3 mb-4 items-center">
          <img src="/assets/logo.svg" className="w-14" alt="logo" />
          <h1 className="text-xl">welcome back</h1>
        </div>
        <p className="text-sm" >Enter your credentials to login to your account.</p>

       
        <label className="form-control w-full my-4 ">
          <div className="label mb-1">
            <span className="label-text text-whiteText ">Email</span>
          </div>
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="hi@yourcompany.com"
            className="input input-bordered w-full  focus:outline-mainColor"
           
          />
           {formik.errors.email && formik.touched.email && (
              <p className="alert text-red-500 text-xs mt-2">
                {formik.errors.email}
              </p>
            )}
        </label>
        <label className="form-control w-full  my-4 ">
          <div className="label mb-1">
            <span className="label-text text-whiteText">passowrd</span>
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              onChange={formik.handleChange}
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
        <div className="flex justify-between items-center gap-2 my-4 flex-wrap md:flex-nowrap ">
          <div className="form-control">
            <label className="label cursor-pointer">
              <input type="checkbox"  className="checkbox checkbox-sm checkbox-secondary " />
              <span className="label-text ml-2 text-whiteText">Remember me</span>
           
            </label>
          </div>
          <a className="text-sm underline hover:no-underline" href="#">
            Forgot password?
          </a>
        </div>
        <button 
          type="submit" 
          className={`w-full  text-whiteText rounded-lg py-2
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
        <button className="border border-mainColor w-full py-2 rounded-lg transition-all ease-in hover:bg-mainColor">Login with Google</button>
        <p className="text-sm  mt-3" href="#">
            Don't have an account?  <NavLink to="/register" className="underline">sign up</NavLink>
        </p>
      </form>
    </div>
  );
}

export default Login;
