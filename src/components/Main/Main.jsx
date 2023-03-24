import React from 'react';
import { useGetLocation } from '../../hooks/useGetLocation'
import DateWidget from '../DateWidget/DateWidget';
import LocationWidget from '../LocationWidget/LocationWidget';
import WeatherWidget from '../WeatherWidget/WeatherWidget';
import Calendar from '../Calendar/Calendar';
import styles from './Main.module.scss';

const Main = () => {
  useGetLocation();
  return (
    <main className={styles.main}>
      <div className={styles.main__content}>
        <div className={styles.main__content__header}>
          <div className={styles.main__content__header__clock}>
            <DateWidget />
          </div>
          <div className={styles.main__content__header__location}>
            <LocationWidget />
          </div>
        </div>
        <div className={styles.main__content__calendar}>
          <Calendar />
        </div>
        <div className={styles.main__content__weather}>
          <WeatherWidget />
        </div>
      </div>
    </main>
  );
}

export default Main;