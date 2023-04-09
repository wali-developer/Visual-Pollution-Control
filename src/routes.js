import React from "react";

// Admin Imports
import MainDashboard from "./views/admin/default";
import Profile from "./views/admin/profile";
import VisualPollutionMap from "./views/admin/visual_pollution_map";
import UploadImage from "./views/admin/upload_image";

// Auth Imports
import SignIn from "./views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdLock,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Visual Pollution Map",
    layout: "/admin",
    path: "visual_pollution_map",
    icon: <MdHome className="h-6 w-6" />,
    component: <VisualPollutionMap />,
  },
  {
    name: "Upload Image",
    layout: "/admin",
    path: "upload_image",
    icon: <MdHome className="h-6 w-6" />,
    component: <UploadImage />,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <CgProfile className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  },
];
export default routes;
