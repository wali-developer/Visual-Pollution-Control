import Loader from "components/Loader";
import InputField from "../../../components/fields/update_profile/InputField";
import React, { useState } from "react";
import API from "utils/API";
import { toast } from "react-toastify";

const UploadImage = () => {
  const [loading, setLoading] = useState(false);
  const [payload, setPayload] = useState({
    file: "",
    latitude: "",
    longitude: "",
    address: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", payload?.file);
    formData.append("latitude", payload?.latitude);
    formData.append("longitude", payload?.longitude);
    formData.append("address", payload?.address);

    try {
      setLoading(true);
      const { data } = await API.post("coords/analyze_image", formData);
      console.log("upload response", data);

      if (data?.msgErr) {
        toast.error(data?.msgErr);
      } else if (data?.msg) {
        toast.success(data?.msg);
        setPayload({
          file: "",
          latitude: "",
          longitude: "",
          address: null,
        });
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="mt-7 w-full">
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="w-full rounded-[20px] bg-white py-8 dark:bg-white/5">
            <div className="mx-auto max-w-[300px] text-center">
              <h1 className="text-xl font-semibold text-gray-500 3xl:text-2xl">
                Upload your images
              </h1>
              <p className="mt-3 mb-5 text-center text-[15px] text-gray-500">
                Your images will be processed for analysis
              </p>
              <div className="relative mx-auto h-[40px] w-[140px]">
                <input
                  type="file"
                  className="dark:text-white"
                  onChange={(e) =>
                    setPayload((prev) => {
                      return {
                        ...prev,
                        file: e.target.files[0],
                      };
                    })
                  }
                />
              </div>
            </div>
          </div>
          <div className="mt-8 flex w-full flex-wrap gap-x-5">
            <InputField
              variant="auth"
              extra="mb-4 md:flex-1"
              label="Latitude*"
              placeholder="Enter latitude"
              type="text"
              value={payload?.latitude}
              onChange={(e) =>
                setPayload((prev) => {
                  return {
                    ...prev,
                    latitude: e.target.value,
                  };
                })
              }
            />
            <InputField
              variant="auth"
              extra="mb-4 md:flex-1"
              label="Longitude*"
              placeholder="Enter longitude"
              type="text"
              value={payload?.longitude}
              onChange={(e) =>
                setPayload((prev) => {
                  return {
                    ...prev,
                    longitude: e.target.value,
                  };
                })
              }
            />
            <div className="w-full">
              <label
                htmlFor="address"
                className={`ml-1.5 text-sm font-medium text-navy-700 dark:text-white`}
              >
                Address
              </label>
              <textarea
                id="address"
                placeholder="Enter address"
                rows={4}
                className={`mt-2 flex w-full resize-none items-center justify-center rounded-xl border bg-white p-3 py-3 text-sm outline-none dark:bg-white/5`}
                value={payload?.address}
                onChange={(e) =>
                  setPayload((prev) => {
                    return {
                      ...prev,
                      address: e.target.value,
                    };
                  })
                }
              />
            </div>
            <div className="mt-8 h-[40px] w-[180px]">
              <button
                className="w-full rounded-lg bg-blueSecondary py-2 text-white"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      {loading && <Loader />}
    </>
  );
};

export default UploadImage;
