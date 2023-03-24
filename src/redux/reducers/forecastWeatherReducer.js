import { 
  SET_CURRENT_FORECAST_WEATHERAPI,
  SET_DAILY_FORECAST_WEATHERAPI,
  SET_HOURLY_FORECAST_WEATHERAPI,
  SET_CURRENT_FORECAST_OPENWEATHER,
  SET_DAILY_FORECAST_OPENWEATHER,
  SET_HOURLY_FORECAST_OPENWEATHER,
  SET_WEATHER_MODE,
  SET_WEATHER_SOURCE
 } from '../types';

const initialState = {
  weatherApi: {
    current: {},
    daily: [],
    hourly: []
  },
  openWeather: {
    current: {},
    daily: [],
    hourly: []
  },
  isLoading: true,
  mode: 'daily',
  source: 'weatherapi'
};

export const forecastWeatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_FORECAST_WEATHERAPI:
      return {
        ...state,
        weatherApi: {
          ...state.weatherApi,
          current: action.data
        },
        isLoading: false,
      };
    case SET_DAILY_FORECAST_WEATHERAPI:
      return {
        ...state,
        weatherApi: {
          ...state.weatherApi,
          daily: action.data
        },
        isLoading: false
      };
    case SET_HOURLY_FORECAST_WEATHERAPI:
      return {
        ...state,
        weatherApi: {
          ...state.weatherApi,
          hourly: action.data
        },
        isLoading: false
      };
    case SET_CURRENT_FORECAST_OPENWEATHER:
      return {
        ...state,
        openWeather: {
          ...state.openWeather,
          current: action.data
        },
        isLoading: false
      };
    case SET_DAILY_FORECAST_OPENWEATHER:
      return {
        ...state,
        openWeather: {
          ...state.openWeather,
          daily: action.data
        },
        isLoading: false
      };
    case SET_HOURLY_FORECAST_OPENWEATHER:
      return {
        ...state,
        openWeather: {
          ...state.openWeather,
          hourly: action.data
        },
        isLoading: false
      };
      case SET_WEATHER_MODE:
        return {
          ...state,
          mode: action.data
        };
      case SET_WEATHER_SOURCE:
        return {
          ...state,
          source: action.data
        };
    default:
      return state;
  }
};