export const selectLongitude = (state) => state.locationDataReducer.longitude;
export const selectLatitude = (state) => state.locationDataReducer.latitude;
export const selectCity = (state) => state.locationDataReducer.city;
export const selectCountry = (state) => state.locationDataReducer.country;
export const selectIsLoadingLocation = (state) => state.locationDataReducer.isLoading;
export const selectTimezone = (state) => state.locationDataReducer.timezone;

export const selectCurrentWeather = (state) => state.forecastWeatherReducer.weatherApi.current;
export const selectDailyForecast = (state) => state.forecastWeatherReducer.weatherApi.daily;
export const selectHourlyForecast = (state) => state.forecastWeatherReducer.weatherApi.hourly;
export const selectIsLoadingWeather = (state) => state.forecastWeatherReducer.isLoading;
export const selectWeatherMode = (state) => state.forecastWeatherReducer.mode;
export const selectWeatherSource = (state) => state.forecastWeatherReducer.source;