import { 
  SET_LOCATION_DATA,
  SET_ISLOADING_LOCATION
 } from '../types';

const initialState = {
  city: '',
  country: '',
  longitude: '',
  latitude: '',
  timeZone: '',
  isLoading: true
};

export const locationDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCATION_DATA:
      return {
        ...state,
        city: action.data.city,
        country: action.data.country,
        longitude: action.data.longitude || action.data.lon,
        latitude: action.data.latitude || action.data.lat,
        timezone: action.data.timezone.name,
        isLoading: false
      };
    case SET_ISLOADING_LOCATION:
      return {
        ...state,
        isLoading: true
      }
    default:
      return state;
  }
};