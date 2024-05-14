import { useEffect, useState } from "react";
import Search from "./search";
import "./styles.css";

export default function WeatherApp() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [currentTime, setCurrentTime] = useState("");

  const APIkey = "7fe86f447a64d2b17ba0e1afe2361fd3";

  async function fetchWeatherData(param) {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=${APIkey}`
      );
      const data = await res.json();
      if (data) {
        setWeatherData(data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  function handleSearch() {
    fetchWeatherData(search);
  }

  function getCurrentDate() {
    return new Date().toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  function getCurrentTime() {
    return new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  }

  useEffect(() => {
    fetchWeatherData("Singapore");
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="wrapper">
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div className="city-name">
            <h2>
              {weatherData?.name}, <span>{weatherData?.sys?.country}</span>{" "}
            </h2>
          </div>
          <div className="date">
            <p>Date: {getCurrentDate()}</p>
            <p>Time: {getCurrentTime()}</p>
          </div>
          <div id="temp">{(weatherData?.main?.temp - 273.15).toFixed(2)}°C</div>
          <p className="description">
            {weatherData && weatherData.weather && weatherData.weather[0]
              ? weatherData.weather[0].description
              : ""}
          </p>
        </div>
      )}
    </div>
  );
}
