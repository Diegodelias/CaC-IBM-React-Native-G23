import React, { useState, useEffect } from "react";
import { OPEN_WEATHER_API_KEY } from "@env";
import useFetch from "./useFetch";
const OPEN_WEATHER_BASE_API = "https://api.openweathermap.org/data/2.5/weather";

/**
 * Tipo de dato para Weather de OpenWeatherAPIResponse
 * @typedef {Object} OpenWeatherAPIResponseWeather
 * @property {number} id
 * @property {string} main
 * @property {string} description
 * @property {string} icon
 */
/**
 * Response de OpenWeather API
 * @typedef {Object} OpenWeatherAPIResponse
 * @property {Object} coord
 * @property {number} coord.lat
 * @property {number} coord.long
 * @property {OpenWeatherAPIResponseWeather[]} weather
 * @property {string} base
 * @property {Object} main
 * @property {number} main.temp
 * @property {number} main.pressure
 * @property {number} main.humidity
 * @property {number} main.temp_min
 * @property {number} main.temp_max
 * @property {number} visibility
 * @property {Object} wind
 * @property {number} wind.speed
 * @property {number} wind.deg
 * @property {number} wind.gust
 * @property {Object} clouds
 * @property {number} cloud.all
 * @property {number} dt
 * @property {Object} sys
 * @property {number} sys.type
 * @property {number} sys.id
 * @property {number} sys.message
 * @property {string} sys.country
 * @property {number} sys.sunrise
 * @property {number} sys.sunset
 * @property {number} timezone
 * @property {number} id
 * @property {string} name
 * @property {number} cod
 */

export default function useWeatherSimple() {
  const { response, hasError, isLoading, setRefetch, setUrl } = useFetch();

  /**
   * @type {[number|null, React.Dispatch<React.SetStateAction<number|null>>]}
   */
  const [latitude, setLatitude] = useState(null);
  /**
   * @type {[number|null, React.Dispatch<React.SetStateAction<number|null>>]}
   */
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    if (latitude && longitude) {
      setUrl(
        `${OPEN_WEATHER_BASE_API}?lat=${latitude}&lon=${longitude}&units=metric&lang=es&appid=${OPEN_WEATHER_API_KEY}`
      );
      setRefetch(true);
    }
  }, [latitude, longitude]);

  return { response, isLoading, hasError, setLatitude, setLongitude };
}
