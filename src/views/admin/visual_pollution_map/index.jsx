import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import mapData from "../../../components/visual_pollution_map/mapData";

import { Pannellum, PannellumVideo } from "pannellum-react";

const VisualPollutionMap = () => {
  const [active, setActive] = useState(null);
  return (
    <div className="mt-7">
      {/* Card widget */}
      <div className="">
        <div className="my-7 h-[400px] rounded-[20px] bg-white p-4 shadow-3xl shadow-shadow-500">
          <MapContainer
            center={[
              mapData[0].geometry?.coordinates[0],
              mapData[0].geometry?.coordinates[1],
            ]}
            zoom={13}
            scrollWheelZoom={false}
            className="z-10 h-[370px] w-full rounded-[20px]"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {mapData.map((item) => (
              <Marker
                position={[
                  item?.geometry?.coordinates[0],
                  item?.geometry?.coordinates[1],
                ]}
                key={item.properties.place_ID}
                eventHandlers={{
                  click: (e) => {
                    setActive(item);
                  },
                }}
              >
                {/* <Popup
                  onClose={() => {
                    setActive(null);
                  }}
                >
                  <p>{active?.properties?.name}</p>
                </Popup> */}
              </Marker>
            ))}
          </MapContainer>
        </div>
        <div className="rounded-[20px] bg-white p-4 shadow-3xl shadow-shadow-500">
          {active ? (
            <div className="h-[370px] w-full">
              {/* <img
                src={active?.img}
                alt={active?.NAME}
                className="h-full w-full rounded-[20px] object-cover"
              /> */}
              <Pannellum
                width="100%"
                height="370px"
                image={active?.img}
                pitch={10}
                yaw={180}
                hfov={110}
                autoLoad
                onLoad={() => {
                  console.log("panorama loaded");
                }}
              >
                <Pannellum.Hotspot
                  type="info"
                  pitch={11}
                  yaw={-167}
                  text="Info Hotspot Text 3"
                  URL="https://github.com/farminf/pannellum-react"
                />

                <Pannellum.Hotspot
                  type="info"
                  pitch={31}
                  yaw={-107}
                  text="Info Hotspot Text 4"
                  URL="https://github.com/farminf/pannellum-react"
                />
              </Pannellum>
            </div>
          ) : (
            <h1 className="flex h-full w-full items-center justify-center text-lg">
              Click on the highlighted location so see the area image
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default VisualPollutionMap;
