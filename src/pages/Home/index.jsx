import React, { useState } from 'react';
import styles from './index.css';

console.log(styles);

export default function () {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h1>首页 : {number}</h1>
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
