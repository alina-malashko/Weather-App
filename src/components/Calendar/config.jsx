import ApiCalendar from 'react-google-calendar-api';

export const config = {
  clientId: process.env.REACT_APP_GOOGLE_CALENDAR_CLIENTID,
  apiKey: process.env.REACT_APP_GOOGLE_CALENDAR_KEY,
  scope: process.env.REACT_APP_GOOGLE_CALENDAR_SCOPE,
  discoveryDocs: [
    process.env.REACT_APP_GOOGLE_CALENDAR_URL
  ]
};

export const apiCalendar = new ApiCalendar(config);