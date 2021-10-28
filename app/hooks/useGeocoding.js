import React, { useState, useEffect } from "react";
import { OPEN_WEATHER_API_KEY } from "@env";
const OPEN_WEATHER_BASE_API = "http://api.openweathermap.org/geo/1.0/direct";
/**
 * Tipo de dato para Weather de OpenWeatherAPIResponse
 * @typedef {Object} OpenWeatherAPIResponseGeocoding
 * @property {string} name
 * @property {number} lat
 * @property {number} lon
 */

export default function useGeocoding() {
  /**
   * @type {[OpenWeatherAPIResponseGeocoding[]|null, React.Dispatch<React.SetStateAction<OpenWeatherAPIResponseGeocoding[]|null>>]}
   */
  const [possibleCities, setPossibleCities] = React.useState(null);
  const [isFetching, setIsFetching] = React.useState(false);
  const [hasFetchError, setHasFetchError] = React.useState(false);
  /**
   * @type {[string|null, React.Dispatch<React.SetStateAction<string|null>>]}
   */
  const [cityToSearch, setCityToSearch] = React.useState(null);

  React.useEffect(() => {
    console.log({ cityToSearchUse: cityToSearch });
    if (cityToSearch != null) {
      if (cityToSearch.length === 0 || cityToSearch === null) return;

      const promise = new Promise((resolve, reject) => {
        const fetchURL = `${OPEN_WEATHER_BASE_API}?q=${encodeURIComponent(
          cityToSearch
        )},AR&limit=5&appid=${OPEN_WEATHER_API_KEY}`;
        console.log({fetchURL});

        fetch(fetchURL)
          .then((response) => {
            response
              .clone()
              .json()
              .then((data) => {
                console.log({ data });
                resolve(data);
              })
              .catch((error) => {
                console.log(error);
                resolve(null);
              });
          })
          .catch((error) => {
            console.log(error);
            reject(error);
          });
      });

      setIsFetching(true);

      promise.then(
        (httpResponse) => {
          setPossibleCities(httpResponse);
          setIsFetching(false);
          setHasFetchError(false);
        },
        (error) => {
          setPossibleCities(null);
          setIsFetching(false);
          setHasFetchError(true);
        }
      );
    }
  }, [cityToSearch]);

  return {possibleCities, isFetching, hasFetchError, setCityToSearch};
}
