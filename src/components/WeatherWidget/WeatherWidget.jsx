import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  setWeatherMode,
  setWeatherSource
 } from '../../redux/actions';
import { 
  selectIsLoadingWeather,
  selectCurrentWeather,
  selectDailyForecast,
  selectHourlyForecast,
  selectWeatherMode,
  selectWeatherSource
} from '../../redux/selectors';
import { useGetWeather } from '../../hooks/useGetWeather';
import DailyForecast from '../DailyForecast/DailyForecast';
import HourlyForecast from '../HourlyForecast/HourlyForecast';
import CustomCheckBox from '../CustomCheckBox/CustomCheckBox';
import styles from './WeatherWidget.module.scss';
import stylesLoader from '../Loader.module.scss';

const WeatherWidget = () => {
  const dispatch = useDispatch();
  const mode = useSelector(selectWeatherMode);
  const source = useSelector(selectWeatherSource);
  const currentWeather = useSelector(selectCurrentWeather);
  const dailyForecast = useSelector(selectDailyForecast);
  const hourlyForecast = useSelector(selectHourlyForecast);
  const isLoading = useSelector(selectIsLoadingWeather);
  useGetWeather();

  return (
    <>
      {isLoading && <span className={stylesLoader.loader}></span>}
      {!isLoading && (
        <div className={styles.weather}>
          <div className={styles.weather__settings}>
            <div className={styles.weather__settings__options}>
              <CustomCheckBox
                id='daily'
                handleClick={e => dispatch(setWeatherMode(e.currentTarget.id))}
                option={mode === 'daily'}
              >
                Daily
              </CustomCheckBox>
              <CustomCheckBox
                id='hourly'
                handleClick={e => dispatch(setWeatherMode(e.currentTarget.id))}
                option={mode === 'hourly'}
              >
                Hourly
              </CustomCheckBox>
            </div>
            <div className={styles.weather__settings__options}>
              <CustomCheckBox
                id='weatherapi'
                handleClick={e => dispatch(setWeatherSource(e.currentTarget.id))}
                option={source === 'weatherapi'}
              >
                Weather Api
              </CustomCheckBox>
              <CustomCheckBox
                id='openweather'
                handleClick={e => dispatch(setWeatherSource(e.currentTarget.id))}
                option={source === 'openweather'}
              >
                OpenWeather
              </CustomCheckBox>
            </div>
          </div>
          <div className={styles.weather__forecast}>
            {mode === 'daily' ?
              <DailyForecast
                currentWeather={currentWeather}
                dailyForecast={dailyForecast}
              />
            :
              <HourlyForecast
                hourlyForecast={hourlyForecast}
              />
            }
          </div>
        </div>
      )}
    </>
  );
}

export default WeatherWidget;