import React, { FC } from 'react';
import Calendar from '../../components/Calendar/Calendar';
import styles from './CalendarPage.module.scss';

interface CalendarPageProps {}

const CalendarPage: FC<CalendarPageProps> = () => (
  <div className={styles.CalendarPage}>
    <Calendar/>
  </div>
);

export default CalendarPage;
