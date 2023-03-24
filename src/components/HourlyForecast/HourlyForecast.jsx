import React from 'react';
import Slider from 'react-slick';
import WeatherItem from '../WeatherItem/WeatherItem';
import styles from './HourlyForecast.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HourlyForecast = ({hourlyForecast, ...props}) => {
  const settings = {
    dots: true,
    slidesToShow: 8,
    slidesToScroll: 8,
    infinite: false,
    arrows: true,
    dots: false,
    draggable: true,
    swipe: true,
  };
  return (
    <div className={styles.forecast}>
      <Slider {...settings}>
        {hourlyForecast.map(item => {
          return (
            <WeatherItem
              key={item.date}
              timestamp={new Date(item.date).getHours() > 9 ? `${new Date(item.date).getHours()}:00` : `0${new Date(item.date).getHours()}:00`}
              temperature={item.temperature}
              icon={item.icon}
            />
        )})}
      </Slider>
    </div>
  );
}

export default HourlyForecast;