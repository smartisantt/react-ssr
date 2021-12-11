import React, { useState } from 'react';
import styles from './index.css';
import imgPng from '@/assets/test.png'


export default function Home() {
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
