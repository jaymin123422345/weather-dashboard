<script lang="ts" setup>
import SearchWeather from './searchWeather.vue';
import axios from 'axios';
import WeatherDashboard from './weatherDashboard.vue'; 
import { defineComponent,ref } from 'vue';
 const weatherData = ref({});
 const fetchWeatherDetails = async (city:string) => {
    console.log(city,"data-=-")
    // const url=`https://api.openweathermap.org/data/3.0/onecall?lat=${city?.lat}.44&lon=${city?.lon}&exclude=hourly,daily&appid=8d0e822de78f185e4f24a69ea75175d9`

    const apiKey = '6b3a150be3ec437e9b9113414241311'; 

    const lat = city?.lat; 

    const lon = city.lon; 

    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}`;
    try{
        const reponse = await axios.get(url); 
        weatherData.value = reponse.data;

            }catch(e){
                console.error(e)
            }
        }
</script>
<template>
    <div class="container mt-5">
      <SearchWeather @search-weather="fetchWeatherDetails" />
      <div class="mt-4 row">
        <div class="col-6">
        <h2>Weather Details:</h2>
        <div v-if="weatherData.location && weatherData.current" class="card p-3">
          <p><strong>Last Updated:</strong> {{ weatherData.current.last_updated }}</p>
          <p><strong>Temperature (°C):</strong> {{ weatherData.current.temp_c }}</p>
          <p><strong>Temperature (°F):</strong> {{ weatherData.current.temp_f }}</p>
          <p><strong>Condition:</strong> {{ weatherData.current.condition.text }}</p>
          <p><strong>Wind Speed (kph):</strong> {{ weatherData.current.wind_kph }}</p>
          <p><strong>Wind Speed (mph):</strong> {{ weatherData.current.wind_mph }}</p>
          <p><strong>Wind Direction:</strong> {{ weatherData.current.wind_dir }}</p>
          <p><strong>Pressure (mb):</strong> {{ weatherData.current.pressure_mb }}</p>
          <p><strong>Precipitation (mm):</strong> {{ weatherData.current.precip_mm }}</p>
          <p><strong>Humidity (%):</strong> {{ weatherData.current.humidity }}</p>
          <p><strong>Cloud (%):</strong> {{ weatherData.current.cloud }}</p>
          <p><strong>Feels Like (°C):</strong> {{ weatherData.current.feelslike_c }}</p>
          <p><strong>Feels Like (°F):</strong> {{ weatherData.current.feelslike_f }}</p>
          <p><strong>Dew Point (°C):</strong> {{ weatherData.current.dewpoint_c }}</p>
          <p><strong>Dew Point (°F):</strong> {{ weatherData.current.dewpoint_f }}</p>
          <p><strong>Visibility (km):</strong> {{ weatherData.current.vis_km }}</p>
          <p><strong>Visibility (miles):</strong> {{ weatherData.current.vis_miles }}</p>
          <p><strong>UV Index:</strong> {{ weatherData.current.uv }}</p>
          <p><strong>Gust Speed (kph):</strong> {{ weatherData.current.gust_kph }}</p>
          <p><strong>Gust Speed (mph):</strong> {{ weatherData.current.gust_mph }}</p>
        </div>
    </div>
        <WeatherDashboard class="col-6" v-if="weatherData.current" :weatherData="weatherData" />
      </div>
    </div>
  </template>