import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <Link to='/'>首页</Link>
      <Link to='/admin'>后台</Link>
      <Link to='/front/news'>新闻</Link>
      <Link to='/front/about'>关于</Link>
    </div>
  );
}
