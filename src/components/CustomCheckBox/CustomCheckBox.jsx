import React from 'react';
import styles from './CustomCheckBox.module.scss';

const CustomCheckBox = ({id, handleClick, option, children, ...props}) => {
  return (
    <div
      id={id}
      onClick={handleClick}
      className={styles.container}
    >
      {option ?
        <svg
          width='24'
          height='24'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M5.58621 9.4434C5.90997 9.18503 6.38187 9.23805 6.64023 9.56181L9.00502 12.5252L13.7115 6.5877C13.9688 6.26309 14.4406 6.20854 14.7652 6.46585C15.0898 6.72315 15.1443 7.19488 14.887 7.51948L9.6069 14.1806C9.34959 14.5052 8.87786 14.5597 8.55326 14.3024C8.49307 14.2547 8.44216 14.1996 8.4008 14.1395C8.35493 14.1038 8.31249 14.0622 8.27464 14.0148L5.46779 10.4974C5.20943 10.1737 5.26244 9.70176 5.58621 9.4434Z'
            fill='#FFFFFF'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M5 1.03312e-06C2.23858 7.91709e-07 2.41411e-07 2.23858 0 5L1.03312e-06 15C7.9171e-07 17.7614 2.23858 20 5 20L15 20C17.7614 20 20 17.7614 20 15L20 5C20 2.23858 17.7614 2.41411e-07 15 0L5 1.03312e-06ZM15 1.5L5 1.5C3.067 1.5 1.5 3.067 1.5 5L1.5 15C1.5 16.933 3.067 18.5 5 18.5L15 18.5C16.933 18.5 18.5 16.933 18.5 15L18.5 5C18.5 3.067 16.933 1.5 15 1.5Z'
            fill='#FFFFFF'
          />
        </svg>
      :
        <svg
          width='24'
          height='24'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect
            x='0.75'
            y='0.75'
            width='18.5'
            height='18.5'
            rx='4.25'
            stroke='#FFFFFF'
            strokeWidth='1.5'
          />
        </svg>
      }
      {children}
    </div>
  );
}

export default CustomCheckBox;