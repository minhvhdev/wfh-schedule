import React, { FC } from "react";
import FixedSchedule from "../../components/FixedSchedule/FixedSchedule";
import styles from "./HomePage.module.scss";

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
  return (
    <div className={styles.HomePage}>
      <h3>Fixed WFH Schedule for this week</h3>
      <FixedSchedule />
    </div>
  );
};

export default HomePage;
