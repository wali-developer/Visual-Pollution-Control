import React, { useState } from "react";
import InputField from "../../components/fields/InputField";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "components/Loader";
import API from "utils/API";
import { USER_TOKEN } from "utils/constants";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    const payload = {
      email: email,
      password: password,
    };

    try {
      setLoading(true);
      const { data } = await API.post("auth/signin", payload);
      if (data?.msgErr) {
        toast.error(data?.msgErr);
      } else if (data?.token) {
        JSON.stringify(localStorage.setItem(USER_TOKEN, data));
        setEmail("");
        setPassword("");
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10">
        {/* Sign in section */}
        <div className="mt-[10vh] w-full max-w-full flex-col items-center rounded-[20px] bg-white py-8 pr-4 pl-4 shadow-3xl shadow-shadow-500 dark:bg-navy-700 sm:pl-8 sm:pr-8 md:pl-4 lg:pl-12 lg:pr-12 xl:max-w-[520px]">
          <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
            Sign In
          </h4>
          <p className="mb-9 ml-1 text-base text-gray-600">
            Enter your email and password to sign in!
          </p>
          {/* Email */}
          <InputField
            variant="auth"
            extra="mb-3"
            label="Email*"
            placeholder="Enter email"
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password */}
          <InputField
            variant="auth"
            extra="mb-3"
            label="Password*"
            placeholder="Enter password"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* Checkbox */}
          <div className="mb-4 flex items-center justify-end px-2">
            <a
              className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
              href=" "
            >
              Forgot Password?
            </a>
          </div>
          <Link to="/admin">
            <button
              className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
              // onClick={(e) => {
              //   e.preventDefault();
              //   handleLogin();
              // }}
            >
              Sign In
            </button>
          </Link>
          {/* <div className="mt-4">
          <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
            Not registered yet?
          </span>
          <a
            href=" "
            className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
          >
            Create an account
          </a>
        </div> */}
        </div>
      </div>
      {loading && <Loader />}
    </>
  );
}
