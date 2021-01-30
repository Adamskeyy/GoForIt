import { useState } from "react";
import GoogleMapReact from "google-map-react";
import Spinner from "../Spinner/Spinner";
import "./GoForIt.css";

const GoForIt = ({ placeCoordinates }) => {
  // usePosition
  const { lat, lng } = { ...placeCoordinates };
  const [currentPosition, setCurrentPosition] = useState();

  const defaultProps = {
    center: { lat: lat, lng: lng },
    zoom: 6,
  };

  // useEffect
  if (navigator.geolocation && !currentPosition) {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      let currPosition = {
        // position
        lat: coords.latitude,
        lng: coords.longitude,
      };
      setCurrentPosition({ center: currPosition });
    });
  }

  // useCallback
  const setRoute = (map, maps) => {
    let directionsService = new maps.DirectionsService();
    let directionsRenderer = new maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    const calcRoute = () => {
      if (currentPosition) {
        // if NOT
        let start = new maps.LatLng(
          currentPosition.center.lat,
          currentPosition.center.lng
        );
        let end = new maps.LatLng(lat, lng);

        let request = {
          origin: start,
          destination: end,
          travelMode: "DRIVING",
        };
        directionsService.route(request, (result, status) => {
          if (status === "OK") {
            directionsRenderer.setDirections(result);
          }
        });
      }
    };

    calcRoute();
  };
  //
  return (
    <div className="map">
      {currentPosition ? (
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.MAPS_API_KEY }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => setRoute(map, maps)}
        ></GoogleMapReact>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default GoForIt;
