import React, { useEffect, useState, useRef, useCallback } from "react";
import { MapContainer, TileLayer, Popup } from "react-leaflet";
import { MarkerLayer, Marker } from "react-leaflet-marker";
import mapData from "../../../components/visual_pollution_map/mapData";

import { FaMapMarkerAlt } from "react-icons/fa";

import { Pannellum } from "pannellum-react";
import Loader from "components/Loader";
import API from "utils/API";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const VisualPollutionMap = () => {
  const [active, setActive] = useState(null);
  const pannelumRef = useRef();
  const [loading, setLoading] = useState(false);
  const [mapLocationsData, setMapLocationsData] = useState([]);
  const [rotationValues, setRotaionValues] = useState({
    pitch: "0deg",
    yaw: "0deg",
  });
  const [center, setCenter] = useState([34.015137, 71.524918]);

  const getMapLocations = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await API.get("coords/get_list");

      if (Array.isArray(data)) {
        setMapLocationsData(data);
        setCenter([
          parseFloat(mapLocationsData[0]?.info?.latitude),
          parseFloat(mapLocationsData[0]?.info?.longitude),
        ]);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getMapLocations();
  }, []);

  return (
    <>
      <div className="mt-7">
        {/* Card widget */}
        <div className="">
          <div className="my-7 h-[400px] rounded-[20px] bg-white p-4 shadow-3xl shadow-shadow-500">
            <MapContainer
              center={center}
              zoom={13}
              scrollWheelZoom={false}
              className="z-10 h-[370px] w-full rounded-[20px]"
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {mapLocationsData?.map((item) => (
                <MarkerLayer>
                  <Marker
                    position={[
                      parseFloat(item?.info?.latitude),
                      parseFloat(item?.info?.longitude),
                    ]}
                    key={item?.info?._id}
                    // eventHandlers={{
                    //   click: (e) => {
                    //     setActive(item);
                    //   },
                    // }}
                  >
                    <div
                      className={`transform rounded-tl-lg rounded-tr-lg transition-all duration-100`}
                      style={{
                        rotate:
                          active?.info?._id == item.info?._id
                            ? rotationValues.yaw
                            : "0deg",
                        // transform: active?.properties.place_ID==item.properties.place_ID? rotationValues.pitch:'0deg'
                      }}
                      onClick={() => {
                        setRotaionValues({
                          pitch: "0deg",
                          yaw: "0deg",
                        });
                        setActive(item);
                      }}
                    >
                      <FaMapMarkerAlt className="h-8 w-8 text-navy-500" />
                    </div>
                  </Marker>
                </MarkerLayer>
              ))}
            </MapContainer>
          </div>
          <div className="rounded-[20px] bg-white p-4 shadow-3xl shadow-shadow-500">
            {active ? (
              <div className="h-[370px] w-full">
                <Pannellum
                  ref={pannelumRef}
                  width="100%"
                  height="370px"
                  image={active?.info?.image_url}
                  pitch={10}
                  yaw={180}
                  hfov={110}
                  compass
                  autoLoad
                  onLoad={() => {
                    console.log("panorama loaded");
                  }}
                  onRender={(e) => {
                    if (pannelumRef.current) {
                      setRotaionValues({
                        pitch:
                          pannelumRef.current?.getViewer()?.getPitch() + "deg",
                        yaw:
                          pannelumRef.current?.getViewer()?.getYaw() + "0deg",
                      });
                    }
                  }}
                >
                  {/* <Pannellum.Hotspot
                  type="info"
                  pitch={11}
                  yaw={-167}
                  text="Info Hotspot Text 3"
                  URL="#"
                /> */}

                  {/* <Pannellum.Hotspot
                  type="info"
                  pitch={31}
                  yaw={-107}
                  text="Info Hotspot Text 4"
                  URL="#"
                /> */}
                </Pannellum>
              </div>
            ) : (
              <h1 className="flex h-full w-full items-center justify-center text-lg">
                Click on the highlighted location so see the area image
              </h1>
            )}
          </div>
          <Accordion className="mt-10">
            {Array.isArray(active?.analyzed_data) &&
              active?.analyzed_data?.map((item, index) => {
                return (
                  <>
                    <AccordionItem
                      className="mb-3 overflow-hidden rounded-xl border bg-white"
                      key={index + ""}
                    >
                      <h2>
                        <AccordionButton className="h-12 w-full border-b bg-white px-4 ">
                          <Box
                            as="span"
                            flex="1"
                            textAlign="left"
                            className="text-[17px] font-medium text-navy-700 dark:text-white"
                          >
                            {item?.title}
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel
                        pb={4}
                        className="mb-3 px-4 py-4 text-[15px] text-navy-700 dark:text-white sm:px-8"
                      >
                        {item?.description}
                      </AccordionPanel>
                    </AccordionItem>
                  </>
                );
              })}
          </Accordion>
        </div>
      </div>
      {loading && <Loader />}
    </>
  );
};

export default VisualPollutionMap;
