import React, { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, Popup } from "react-leaflet";
import { MarkerLayer, Marker } from "react-leaflet-marker";
import mapData from "../../../components/visual_pollution_map/mapData";

import { Pannellum } from "pannellum-react";

const VisualPollutionMap = () => {
  const [active, setActive] = useState(null);
  const pannelumRef = useRef()

  const [rotationValues,setRotaionValues] = useState({
    pitch:'0deg',
    yaw:'0deg'
  })

console.log(rotationValues)

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
              <MarkerLayer>

                <Marker
                  position={[
                    item?.geometry?.coordinates[0],
                    item?.geometry?.coordinates[1],
                  ]}
                  key={item.properties.place_ID}
                // eventHandlers={{
                //   click: (e) => {
                //     setActive(item);
                //   },
                // }}
                >
                  <div
                    className={`bg-green-600  h-[50px] w-[20px] rounded-tl-lg rounded-tr-lg transform transition-all duration-100`}
                    style={{
                      rotate: active?.properties.place_ID==item.properties.place_ID? rotationValues.yaw:'0deg',
                      // transform: active?.properties.place_ID==item.properties.place_ID? rotationValues.pitch:'0deg'
                    }}
                    onClick={() =>{
                       setRotaionValues({
                        pitch:'0deg',
                        yaw:'0deg'
                       })
                       setActive(item)
                      }}
                  ></div>
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
                image={active?.img}
                pitch={10}
                yaw={180}
                hfov={110}
                compass
                autoLoad
                onLoad={() => {
                  console.log("panorama loaded");
                }}
                onRender={e => {
                  if (pannelumRef.current) {
                  
                    setRotaionValues({
                      pitch:pannelumRef.current?.getViewer()?.getPitch()+'deg',
                      yaw:pannelumRef.current?.getViewer()?.getYaw()+'0deg'
                    })
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
      </div>
    </div>
  );
};

export default VisualPollutionMap;
