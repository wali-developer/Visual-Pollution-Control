import React from "react";
import InputField from "../../../components/fields/update_profile/InputField";
import { Link } from "react-router-dom";

const ProfileOverview = () => {
  return (
    <div className="flex h-full w-full px-2 md:mx-0 md:px-0 lg:mb-10">
      <div className="mt-5 w-full max-w-full flex-col items-center rounded-[20px] py-8 xl:max-w-[520px]">
        {/* <h4 className="mb-2.5 pl-1 text-2xl font-bold text-navy-700 dark:text-white">
          Update Profile
        </h4> */}
        <form className="mt-3">
          {/* Email */}
          <InputField
            variant="auth"
            extra="mb-4"
            label="Email*"
            placeholder="mail@simmmple.com"
            id="email"
            type="text"
          />

          {/* Password */}
          <InputField
            variant="auth"
            extra="mb-4"
            label="Old Password*"
            placeholder="Min. 8 characters"
            id="password"
            type="password"
          />
          {/* Password */}
          <InputField
            variant="auth"
            extra="mb-4"
            label="New Password*"
            placeholder="Min. 8 characters"
            id="password"
            type="password"
          />
          {/* Password */}
          <InputField
            variant="auth"
            extra="mb-4"
            label="Confirm New Password*"
            placeholder="Min. 8 characters"
            id="password"
            type="password"
          />
          <Link to="/admin">
            <button className="linear mt-5 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
              Update
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ProfileOverview;
