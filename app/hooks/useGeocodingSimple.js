import React, { useState, useEffect } from "react";
import useFetch from "./useFetch";
const OPEN_WEATHER_BASE_API = "http://api.openweathermap.org/geo/1.0/direct";

/**
 * Tipo de dato para Weather de OpenWeatherAPIResponse
 * @typedef {Object} OpenWeatherAPIResponseGeocoding
 * @property {string} name
 * @property {number} lat
 * @property {number} lon
 */

export default function useGeocodingSimple() {
  const { response, hasError, isLoading, setRefetch, setUrl } = useFetch();

  /**
   * @type {[string|null, React.Dispatch<React.SetStateAction<string|null>>]}
   */
  const [cityToSearch, setCityToSearch] = useState(null);

  useEffect(() => {
    if (cityToSearch) {
      if (cityToSearch.length === 0 || cityToSearch === null) return;
      setUrl(
        `${OPEN_WEATHER_BASE_API}?q=${encodeURIComponent(
          cityToSearch
        )},AR&limit=5&appid=${process.env.OPEN_WEATHER_API_KEY}`
      );

      setRefetch(true);
    }
  }, [cityToSearch]);

  return { response, isLoading, hasError, setCityToSearch };
}
