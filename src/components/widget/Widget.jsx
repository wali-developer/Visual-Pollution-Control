import React from "react";
import Card from "../card";
import useGenerateRandomColor from "../../hooks/useGenerateRandomColor";
import { useEffect } from "react";

const Widget = ({ title, subtitle }) => {
  const { color, generateColor } = useGenerateRandomColor();

  useEffect(() => {
    generateColor();
  }, []);

  return (
    <Card extra="!flex-row flex-grow items-center rounded-[20px]">
      <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
        <div
          className={`rounded-full p-6 dark:bg-navy-700`}
          style={{ backgroundColor: `#${color}` }}
        ></div>
      </div>

      <div className="h-50 ml-4 flex w-auto flex-col justify-center">
        <p className="font-dm text-sm font-medium text-gray-600">{title}</p>
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          {subtitle}
        </h4>
      </div>
    </Card>
  );
};

export default Widget;
