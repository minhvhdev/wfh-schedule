import React, { FC } from 'react';
import styles from './HomePage.module.scss';

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => (
  <div className={styles.HomePage}>
    HomePage Component
  </div>
);

export default HomePage;
