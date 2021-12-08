import React, { useState } from 'react';
import styles from './index.css';
import imgPng from '@/assets/test.png'

console.log(styles);

export default function () {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h1>首页 : {number}</h1>
      <div className={styles.bg}></div>
      <img src={imgPng} alt="" />
      <button
        className={styles.button}
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        点击
      </button>
    </div>
  );
}
