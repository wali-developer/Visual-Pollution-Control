import useGenerateRandomColor from "../../hooks/useGenerateRandomColor";
import React, { useEffect } from "react";

const Widget = ({ title, subtitle, icon }) => {
    const { color, generateColor } = useGenerateRandomColor();

    useEffect(() => {
        generateColor();
    }, []);

    return (
        <div
            className={`!flex-row flex-grow items-center !z-5 relative flex rounded-[20px] dark:bg-white bg-clip-border shadow-3xl shadow-shadow-500 bg-navy-600 dark:text-navy-700 text-white`}
        // style={{ backgroundColor: `#${color}` }}
        >
            <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                <div
                    className={`rounded-full p-3  dark:bg-navy-700 bg-white dark:text-white text-navy-700`}
                >
                    {icon}
                </div>
            </div>

            <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                <p className="font-dm text-sm font-medium text-white dark:text-navy-700">{title}</p>
                <h4 className="text-xl font-bold text-white dark:text-navy-700">
                    {subtitle}
                </h4>
            </div>
        </div>
    );
};

export default Widget;
