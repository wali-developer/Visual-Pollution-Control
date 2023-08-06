import useGenerateRandomColor from "../../hooks/useGenerateRandomColor";
import React, { useEffect } from "react";

const Widget = ({ title, subtitle, icon }) => {
  const { color, generateColor } = useGenerateRandomColor();

  useEffect(() => {
    generateColor();
  }, []);

  return (
    <div
      className={`!z-5 relative flex flex-grow !flex-row items-center rounded-[20px] bg-navy-600 bg-clip-border text-white shadow-3xl shadow-shadow-500 dark:bg-navy-700 dark:text-navy-700`}
      // style={{ backgroundColor: `#${color}` }}
    >
      <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
        <div
          className={`rounded-full bg-white  p-3 text-navy-700 dark:bg-navy-700 dark:text-white`}
        >
          {icon}
        </div>
      </div>

      <div className="h-50 ml-4 flex w-auto flex-col justify-center">
        <p className="font-dm text-sm font-medium text-white dark:text-white">
          {title}
        </p>
        <h4 className="text-xl font-bold text-white dark:text-white">
          {subtitle}
        </h4>
      </div>
    </div>
  );
};

export default Widget;
