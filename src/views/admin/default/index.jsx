import React from "react";
import { FcProcess } from "react-icons/fc";
import { MdBarChart } from "react-icons/md";

import OverviewWidget from "../../../components/widget/OverveiwWidget";
import Widget from "../../../components/widget/Widget";
import { AiOutlineFileDone } from "react-icons/ai";

const Dashboard = () => {
  return (
    <div className="mt-7">
      {/* Card widget */}
      <h3 className="text-xl font-bold text-navy-700">Overview</h3>
      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <OverviewWidget
          title={"Processing"}
          subtitle={"11"}
          icon={<FcProcess className="h-6 w-6 " />}
        />
        <OverviewWidget
          title={"Resolved"}
          subtitle={"40"}
          icon={<AiOutlineFileDone className="h-6 w-6" />}
        />
        <OverviewWidget
          title={"Open"}
          subtitle={"19"}
          icon={<MdBarChart className="h-6 w-6" />}
        />
      </div>
      <h3 className="mt-10 text-xl font-bold text-navy-700">Folders</h3>
      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          // icon={<MdBarChart className="h-7 w-7" />}
          title={"Riyadh, Saudi Arabia"}
          subtitle={"78"}
        />
        <Widget
          // icon={<IoDocuments className="h-6 w-6" />}
          title={"Jeddah"}
          subtitle={"39"}
        />
        <Widget
          // icon={<MdBarChart className="h-7 w-7" />}
          title={"Khamis"}
          subtitle={"24"}
        />
        <Widget
          // icon={<MdDashboard className="h-6 w-6" />}
          title={"Damam"}
          subtitle={"11"}
        />
        <Widget
          // icon={<MdBarChart className="h-7 w-7" />}
          title={"Makkah"}
          subtitle={"54"}
        />
        <Widget
          // icon={<IoMdHome className="h-6 w-6" />}
          title={"Madina"}
          subtitle={"$2433"}
        />
      </div>
    </div>
  );
};

export default Dashboard;
