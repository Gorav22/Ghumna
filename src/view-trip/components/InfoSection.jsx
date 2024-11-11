import { GetPlaceDetails } from "@/service/GlobalApi";
import React, { useEffect, useState } from "react";
import { PHOTO_REF_URL } from "@/constants/options";
const PLACE_URL = "https://www.google.com/maps/search/?api=1&query=";

const InfoSection = ({ trip }) => {
  const [photoUrl, setPhotoUrl] = useState();
  const [placeUrl, setPlaceUrl] = useState();
  useEffect(() => {
    trip && GetPlacePhoto();
  }, [trip]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: trip?.userChoice?.location?.label,
    };
    const result = await GetPlaceDetails(data).then((resp) => {
      const photoName = resp.data.places[0].photos[3].name;
      const PhotoUrl = PHOTO_REF_URL.replace("{NAME}", photoName);
      setPhotoUrl(PhotoUrl);

      const PlaceUrl = PLACE_URL + encodeURIComponent(trip?.userChoice?.location?.label);
      setPlaceUrl(PlaceUrl);
    });
  };

  return (
    <div className="flex justify-between items-center mt-12 md:mx-16 lg:mx-48 p-6 rounded-lg shadow-lg">
      {placeUrl && (
        <a href={placeUrl} target="_blank" rel="noopener noreferrer">
          <img
            className="h-40 w-40 rounded-full object-cover"
            id="1"
            src={photoUrl}
            alt="Trip Image"
          />
        </a>
      )}
      <div className="flex flex-col ml-6 items-end">
        <div className="text-4xl font-bold mb-2 flex items-center">
          🗺️ {trip?.userChoice?.location?.label}
        </div>
        <div className="text-xl mb-1 flex items-center">
          📅 <span className="font-semibold ml-2">Duration:</span>
          {trip?.userChoice?.noOfDays} days
        </div>
        <div className="text-xl mb-1 flex items-center">
          💰 <span className="font-semibold ml-2">Budget:</span>
          {trip?.userChoice?.budget}
        </div>
        <div className="text-xl flex items-center">
          👥 <span className="font-semibold ml-2">Traveling with:</span>
          {trip?.userChoice?.noOfPeople}
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
