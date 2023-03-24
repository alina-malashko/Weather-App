import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { 
  setCurrentForecastOpenWeather,
  setDailyForecastOpenWeather,
  setHourlyForecastOpenWeather,
  setCurrentForecastWeatherApi,
  setDailyForecastWeatherApi,
  setHourlyForecastWeatherApi,
 } from '../redux/actions';
import { 
  selectLatitude, 
  selectLongitude,
} from '../redux/selectors';

export const useGetWeather = () => {
  const dispatch = useDispatch();
  const latitude = useSelector(selectLatitude);
  const longitude = useSelector(selectLongitude);
  const getForecastOpenWeather = () => {
    fetch(`${process.env.REACT_APP_OPENWEATHER_URL}?lat=${latitude}&lon=${longitude}&units=metric&exclude=minutely&lang=en&appid=${process.env.REACT_APP_OPENWEATHER_KEY}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      dispatch(setCurrentForecastOpenWeather(data.current));
      dispatch(setDailyForecastOpenWeather(data.daily));
      dispatch(setHourlyForecastOpenWeather(data.hourly));
    })
    .catch(error => console.log(error));
  };
  const getForecastWeatherApi = () => {
    fetch(`${process.env.REACT_APP_WEATHERAPI_URL}?key=${process.env.REACT_APP_WEATHERAPI_KEY}&q=${latitude},${longitude}&days=7&aqi=no&alerts=no`)
    .then(response => response.json())
    .then(data => {
      dispatch(setCurrentForecastWeatherApi(data.current));
      dispatch(setDailyForecastWeatherApi(data.forecast));
      dispatch(setHourlyForecastWeatherApi(data.forecast));
    })
    .catch(error => console.log(error));;
  };
  useEffect(() => {
    if (longitude && latitude) {
      //getForecastOpenWeather();
      getForecastWeatherApi();
    }
  }, [longitude, latitude]);
}