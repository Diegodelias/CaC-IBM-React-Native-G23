import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("db.db");

const getCities = () => {
  return new Promise((resolve, reject) => {
    let cities = [];
    db.transaction(
      (tx) => {
        tx.executeSql("SELECT * FROM cities", [], (_, { rows: { _array } }) => {
          cities = _array;
        });
      },
      (_t, error) => {
        console.log("db error load cities");
        console.log(error);
        reject(error);
      },
      () => {
        resolve(cities);
      }
    );
  });
};

/**
 * Inserta una ciudad en la base de datos
 * @param {Object} param0
 * @param {String} param0.cityName Nombre de la ciudad
 * @param {String} param0.latitude Latitud de la ciudad
 * @param {String} param0.longitude Longitud de la ciudad
 * @returns {Promise<number>}
 */
const insertCity = ({ cityName, latitude = null, longitude = null }) => {
  return new Promise((resolve, reject) => {
    let insertedId = null;
    db.transaction(
      (tx) => {
        tx.executeSql(
          "INSERT INTO cities (name,latitude,longitude) VALUES (?,?,?)",
          [cityName, latitude, longitude],
          (_, { insertId }) => {
            insertedId = insertId;
          }
        )
      },
      (t, error) => {
        console.log("db error insertCities");
        console.log(error);
        reject(error);
      },
      (t, success, a) => {
        resolve(insertedId);
      }
    );
  });
};

/**
 * Elimina una ciudad de la base de datos
 * @param {string} cityId Id de la ciudad
 * @returns {Promise<void>}
 */
const deleteCity = (cityId) => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql("DELETE FROM cities WHERE id = ?", [cityId]);
      },
      (t, error) => {
        console.log("db error deleteCity");
        console.log(error);
        reject(error);
      },
      (t, success, a) => {
        resolve();
      }
    );
  });
};

const setupDatabaseAsync = () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "CREATE TABLE IF NOT EXISTS cities (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, latitude TEXT NOT NULL, longitude TEXT NOT NULL);"
        );
      },
      (_, error) => {
        console.log("db error creating tables");
        console.log(error);
        reject(error);
      },
      (_, success) => {
        resolve(success);
      }
    );
  });
};

export const database = {
  getCities,
  insertCity,
  deleteCity,
  setupDatabaseAsync,
};
