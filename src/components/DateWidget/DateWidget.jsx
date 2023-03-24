import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTimezone } from '../../redux/selectors';
import { days, months } from '../../constants/constants';
import styles from './DateWidget.module.scss';

const DateWidget = () => {
  const timezone = useSelector(selectTimezone);
  const now = new Date(new Date().toLocaleString('en-US', {timeZone: timezone}));
  let startHours = now.getHours() > 12 ? now.getHours() - 12 : now.getHours();
  startHours = startHours < 10 ? `0${startHours}` : startHours;
  let startMinutes = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
  let interval = now.getHours() < 13 ? 'AM' : 'PM';
  const [hours, setHours] = useState(startHours);
  const [minutes, setMinutes] = useState(startMinutes);
  const [dayInterval, setDayInterval] = useState(interval);
  const [day, setDay] = useState(days[now.getDay()]);
  const [date, setDate] = useState(now.getDate());
  const [month, setMonth] = useState(months[now.getMonth()]);
  const [year, setYear] = useState(now.getFullYear());

  useEffect(() => {
    let timer = setInterval(() => {
      const date = new Date(new Date().toLocaleString('en-US', {timeZone: timezone}));
      let hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
      let minutes = date.getMinutes();
      hours < 10 ? setHours(`0${hours}`) : setHours(hours);
      minutes < 10 ? setMinutes(`0${minutes}`) : setMinutes(minutes);
      date.getHours() < 13 ? setDayInterval('AM') : setDayInterval('PM');
      setDay(days[date.getDay()]);
      setDate(date.getDate());
      setMonth(months[date.getMonth()]);
      setYear(date.getFullYear());
    } ,1000);
    return () => clearInterval(timer);
  }, [timezone]);
  return (
    <div className={styles.clock}>
      <div className={styles.clock__time}>
        <p>{`${hours}:${minutes} `}</p>
        <span>{dayInterval}</span>
      </div>
      <div className={styles.clock__date}>
        {`${day}, ${date} ${month} ${year}`}
      </div>
    </div>
  );
}

export default DateWidget;