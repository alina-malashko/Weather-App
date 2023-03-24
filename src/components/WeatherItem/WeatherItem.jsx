import React from 'react';
import styles from './WeatherItem.module.scss';

const WeatherItem = ({timestamp, temperature, icon, ...props}) => {
  return (
    <div className={styles.weather}>
      <div className={styles.weather__label}>
        {timestamp}
      </div>
      <div className={styles.weather__icon}>
        <img src={icon} alt='weather' />
      </div>
      <div className={styles.weather__temperature}>
        {temperature}&deg;
      </div>
    </div>
  );
}

export default WeatherItem;