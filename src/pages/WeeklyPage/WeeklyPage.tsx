import React, { FC } from 'react';
import styles from './WeeklyPage.module.scss';

interface WeeklyPageProps {}

const WeeklyPage: FC<WeeklyPageProps> = () => (
  <div className={styles.WeeklyPage}>
    WeeklyPage Component
  </div>
);

export default WeeklyPage;
