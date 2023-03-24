import { 
  SET_LOCATION_DATA,
  SET_ISLOADING_LOCATION,
  SET_CURRENT_FORECAST_OPENWEATHER,
  SET_DAILY_FORECAST_OPENWEATHER,
  SET_HOURLY_FORECAST_OPENWEATHER,
  SET_CURRENT_FORECAST_WEATHERAPI,
  SET_DAILY_FORECAST_WEATHERAPI,
  SET_HOURLY_FORECAST_WEATHERAPI,
  SET_WEATHER_MODE,
  SET_WEATHER_SOURCE
 } from './types.js';

export function setLocationData(data) {
  return {
    type: SET_LOCATION_DATA,
    data
  };
}

export function setIsLoadingLocation() {
  return {
    type: SET_ISLOADING_LOCATION,
  };
}

export function setCurrentForecastOpenWeather(data) {
  return {
    type: SET_CURRENT_FORECAST_OPENWEATHER,
    data: {
      temperature: Math.round(data.temp),
      icon: data.weather[0].icon
    }
  };
}

export function setDailyForecastOpenWeather(data) {
  const forecast = [];
  data.forEach(el => {
    const day = {
      date: new Date(el.dt * 1000),
      temperature: Math.round(el.temp.day),
      icon: el.weather[0].icon
    }
    forecast.push(day);
  });
  return {
    type: SET_DAILY_FORECAST_OPENWEATHER,
    data: forecast
  };
}

export function setHourlyForecastOpenWeather(data) {
  const forecast = [];
  data.forEach(el => {
    const hour = {
      date: new Date(el.dt * 1000),
      temperature: Math.round(el.temp),
      icon: el.weather[0].icon
    }
    forecast.push(hour);
  });
  return {
    type: SET_HOURLY_FORECAST_OPENWEATHER,
    data: forecast
  };
}

export function setCurrentForecastWeatherApi(data) {
  return {
    type: SET_CURRENT_FORECAST_WEATHERAPI,
    data: {
      temperature: Math.round(data.temp_c),
      icon: data.condition.icon
    }
  };
}

export function setDailyForecastWeatherApi(data) {
  const forecast = [];
  data.forecastday.forEach(el => {
    const day = {
      date: el.date,
      temperature: Math.round(el.day.avgtemp_c),
      icon: el.day.condition.icon
    }
    forecast.push(day);
  });
  forecast.shift();
  return {
    type: SET_DAILY_FORECAST_WEATHERAPI,
    data: forecast
  };
}

export function setHourlyForecastWeatherApi(data) {
  const forecast = [];
  data.forecastday.forEach(el => {
    el.hour.forEach((el) => {
      const hour = {
        date: el.time,
        temperature: Math.round(el.temp_c),
        icon: el.condition.icon
      }
      forecast.push(hour);
    });
  });
  return {
    type: SET_HOURLY_FORECAST_WEATHERAPI,
    data: forecast.slice(0, 24)
  };
}

export function setWeatherMode(data) {
  return {
    type: SET_WEATHER_MODE,
    data
  };
}

export function setWeatherSource(data) {
  return {
    type: SET_WEATHER_SOURCE,
    data
  };
}