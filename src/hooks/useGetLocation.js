import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  selectLatitude,
  selectLongitude
} from '../redux/selectors';
import { setLocationData } from '../redux/actions';

export const useGetLocation = () => {
  const dispatch = useDispatch();
  const latitude = useSelector(selectLatitude);
  const longitude = useSelector(selectLongitude);

  useEffect(() => {
    if (!latitude || !longitude) {
      fetch(`${process.env.REACT_APP_IPGEOLOCATION_URL}?api_key=${process.env.REACT_APP_IPGEOLOCATION_KEY}`)
      .then(response => response.json())
      .then(data => dispatch(setLocationData(data)))
      .catch(error => console.log(error));
    }
  }, []);
};