import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTimezone } from '../../redux/selectors';
import { apiCalendar } from './config';
import styles from './Calendar.module.scss';

const Calendar = () => {
  const timezone = useSelector(selectTimezone);
  const [signIn, setSignIn] = useState(false);
  const [events, setEvents] = useState(null);
  const [error, setError] = useState('');

  const listEvents = (e) => {
    const today = new Date(new Date().setUTCHours(0, 0, 0, 0));
    const tomorrow = new Date(new Date(today).setDate(today.getDate() + 1));
    apiCalendar.listEvents({
      timeMin: today.toISOString(),
      timeMax: tomorrow.toISOString(),
      showDeleted: false,
      singleEvents: true,
      orderBy: 'startTime',
      timeZone: timezone
    }).then(data => {
      const eventsItems = [];
      data.result.items.forEach(item => {
        const hours = new Date(item.start.dateTime).getHours();
        const minutes = new Date(item.start.dateTime).getMinutes();
        const eventItem = {
          time: `${hours > 9 ? hours : `0${hours}`}:${minutes > 9 ? minutes : `0${minutes}`}`,
          summary: item.summary
        };
        eventsItems.push(eventItem);
      });
      setEvents(eventsItems);
    })
    .catch(error => setError('Something went wrong, please reload the page'));
  };

  const handleClick = (name) => {
    if (name === 'sign-in') {
      apiCalendar.handleAuthClick();
      setSignIn(true);
    } else if (name === 'sign-out') {
      apiCalendar.handleSignoutClick();
      setSignIn(false);
      setEvents(null);
    }
  };

  return (
    <div className={styles.calendar}>
      <button
        id={signIn ? 'sign-out' : 'sign-in'}
        className={styles.calendar__button}
        onClick={(e) => handleClick(e.currentTarget.id)}
      >
        {signIn ? 'Sign Out' : 'Sign In'}
      </button>
      {signIn && (
        <button
          className={styles.calendar__button}
          onClick={(e) => listEvents(e)}
        >
          Show Events
        </button>
      )}
      <div className={styles.calendar__events}>
        {error && <div>{error}</div>}
        {events && events.length === 0 && 'Nothing is planned'}
        {events && events.length !== 0 && events.map(({ time, summary }) => {
          return (
            <div className={styles.calendar__events__event} key={time}>
              <div className={styles.calendar__events__event__time}>
                {time}
              </div>
              <div className={styles.calendar__events__event__summary}>
                {summary}
              </div>
            </div>
        )})}
      </div>
    </div>
  );
}

export default Calendar;