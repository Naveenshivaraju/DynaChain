import React, { useState, useEffect } from "react";
import './Map.css';

import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import * as MapData from "./Mapdata.json";
import { MyContext } from "../../MyProvider";
//import mapStyles from "./mapStyles";

function Map() {
  const [selectedPark, setSelectedPark] = useState(null);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedPark(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <MyContext.Consumer>
      {
        (context) => (
          <GoogleMap
            defaultZoom={1}
            defaultCenter={{ lat: 30.3601, lng: -0.0589 }}
          /* defaultOptions={{ styles: mapStyles }} */
          >
            {MapData.ActivityCenter.map(AC => (
              <Marker key={AC.key}
                /*  key={park.properties.PARK_ID} */
                position={{
                  lat: AC.coordinates[0],
                  lng: AC.coordinates[1]
                }}
                onMouseOver={() => {
                  setSelectedPark(AC);
                }}
                /* onMouseOut={() => {
                  setSelectedPark(null);
                }} */
                icon={{
                  url: AC.iconurl,
                  scaledSize: new window.google.maps.Size(25, 25)
                }}
              />
            ))}

            {selectedPark && (
              <div>
                <InfoWindow
                  onCloseClick={() => {
                    setSelectedPark(null);
                  }}
                  
                  position={{
                    lat: selectedPark.coordinates[0]+11,
                    lng: selectedPark.coordinates[1],
                  }}
                >
                  <div>
                   {/*  {console.log(context.state)}
                    {console.log(context.increment)} */}
                    <a value={selectedPark.name} onClick={() => context.increment(selectedPark.name)} ><div className="ACLink">{selectedPark.name}</div></a>
                    <p>{selectedPark.description}</p>
                  </div>
                </InfoWindow>
              </div>
            )}
          </GoogleMap>
        )}
    </MyContext.Consumer>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function WorldMap() {
  return (
    <div style={{ width: "100%", height: "320px" }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDMVtICVlllbzey02Wi-iR0vY_a4SRDdhc`} /* "&callback=initMap" : I removed this from end of the url string for removing some error. */
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}