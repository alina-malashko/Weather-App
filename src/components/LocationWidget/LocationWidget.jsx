import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  setLocationData,
  setIsLoadingLocation
 } from '../../redux/actions';
import {
  selectCity,
  selectCountry,
  selectIsLoadingLocation,
} from '../../redux/selectors';
import styles from './LocationWidget.module.scss';
import stylesLoader from '../Loader.module.scss';

const LocationWidget = () => {
  const dispatch = useDispatch();
  const [cityInput, setCityInput] = useState(false);
  const city = useSelector(selectCity);
  const country = useSelector(selectCountry);
  const isLoading = useSelector(selectIsLoadingLocation);
  const changeLocation = (value) => {
    setCityInput(false);
    dispatch(setIsLoadingLocation());
    fetch(`${process.env.REACT_APP_GEOAPIFY_URL}?text=${value}&apiKey=${process.env.REACT_APP_GEOAPIFY_KEY}`)
    .then(response => response.json())
    .then(data => dispatch(setLocationData(data.features[0].properties)))
    .catch(error => console.log(error));
  };
  return (
    <>
      {isLoading && <span className={stylesLoader.loader}></span>}
      {!isLoading && (
        <div className={styles.location}>
          {cityInput ? 
            <input
              className={styles.location__input}
              defaultValue={city}
              autoFocus
              onBlur={(e) => changeLocation(e.target.value)}
              onKeyDown={(e) => {if (e.key === 'Enter') changeLocation(e.target.value)}}
            />
          :
            <p
              className={styles.location__city}
              onClick={() => setCityInput(true)}
            >
              {city}
            </p>
          }
          <p className={styles.location__country}>{country}</p>
        </div>
      )}
    </>
  );
}

export default LocationWidget;