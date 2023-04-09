import React from "react";

const UploadImage = () => {
  return (
    <div className="mt-7 w-full">
      <div className="w-full rounded-[20px] bg-white py-8">
        <div className="mx-auto max-w-[300px] text-center">
          <h1 className="text-xl font-semibold text-gray-500 3xl:text-2xl">
            Upload your images
          </h1>
          <p className="mt-3 mb-5 text-center text-[15px] text-gray-500">
            Your images will be processed for analysis
          </p>
          <div className="mx-auto h-[40px] w-[140px]">
            <input type="file" className="hidden" />
            <button className="w-full rounded-lg bg-blueSecondary py-2 text-white ">
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadImage;
