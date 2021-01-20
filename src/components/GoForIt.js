import { useState } from "react";
import GoogleMapReact from "google-map-react";

const GoForIt = ({ placeName, placeCoordinates }) => {
  const { lat, lng } = { ...placeCoordinates };
  const [currentPosition, setCurrentPosition] = useState();

  const defaultProps = {
    center: { lat: lat, lng: lng },
    zoom: 6,
  };

  if (navigator.geolocation && !currentPosition) {
    navigator.geolocation.getCurrentPosition((position) => {
      let currPosition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      setCurrentPosition({ center: currPosition });
    });
  }

  const setRoute = (map, maps) => {
    let directionsService = new maps.DirectionsService();
    let directionsRenderer = new maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    const calcRoute = () => {
      if (currentPosition) {
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

  return (
    <div className="map">
      {currentPosition ? (
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCD5ihqMq750s87Hp0b4QfoJHYTVqcWiRI" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => setRoute(map, maps)}
        ></GoogleMapReact>
      ) : (
        <div>One moment!</div>
      )}
    </div>
  );
};

export default GoForIt;
