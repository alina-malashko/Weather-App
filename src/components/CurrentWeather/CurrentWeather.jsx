import React from 'react';
import styles from './CurrentWeather.module.scss';

const CurrentWeather = ({icon, temperature, ...props}) => {
  return (
    <div className={styles.weather}>
      <div className={styles.weather__icon}>
        <img src={icon} alt='weather' />
      </div>
      <div className={styles.weather__data}>
        <div className={styles.weather__data__label}>Today</div>
        <div className={styles.weather__data__temperature}>
          {temperature}&deg;
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;