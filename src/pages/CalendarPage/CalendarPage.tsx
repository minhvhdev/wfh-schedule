import React, { FC } from "react";
import Calendar from "../../components/Calendar/Calendar";
import { DateFilter } from "../../features";
import styles from "./CalendarPage.module.scss";

interface CalendarPageProps {}

const CalendarPage: FC<CalendarPageProps> = () => (
  <div className={styles.CalendarPage}>
    <div className={styles.title}>
      <h3>WFH Schedule Timetable</h3>
      <DateFilter />
    </div>
    <Calendar />
  </div>
);

export default CalendarPage;
