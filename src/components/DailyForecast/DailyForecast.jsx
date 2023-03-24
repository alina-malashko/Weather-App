import React from 'react';
import { weekDays } from '../../constants/constants';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import WeatherItem from '../WeatherItem/WeatherItem';
import styles from './DailyForecast.module.scss';

const DailyForecast = ({currentWeather, dailyForecast, ...props}) => {
  return (
    <div className={styles.forecast}>
      <div className={styles.forecast__current}>
        <CurrentWeather
          icon={currentWeather.icon}
          temperature={currentWeather.temperature}
        />
      </div>
      <div className={styles.forecast__daily}>
        {dailyForecast.map(item => {
          return (
            <WeatherItem
              key={item.date}
              timestamp={weekDays[new Date(item.date).getDay()]}
              temperature={item.temperature}
              icon={item.icon}
            />
        )})}
      </div>
    </div>
  );
}

export default DailyForecast;