import React, { FC } from 'react';
import FixedSchedule from '../../components/FixedSchedule/FixedSchedule';
import styles from './HomePage.module.scss';

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => (
  <div className={styles.HomePage}>
    <FixedSchedule/>
  </div>
);

export default HomePage;
