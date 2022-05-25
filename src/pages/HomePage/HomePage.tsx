import React, { FC } from "react";
import { SelectChangeEvent } from "@mui/material";
import FixedSchedule from "../../components/FixedSchedule/FixedSchedule";
import styles from "./HomePage.module.scss";
import { Container } from "@mui/system";

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
  const [dayNumber, setDayNumber] = React.useState(14); //2 week
  function handleChangeNumber(event: SelectChangeEvent): void {
    setDayNumber(Number(event.target.value));
  }

  return (
    <div className={styles.HomePage}>
        <h3>Fixed WFH Schedule for this week</h3>
        <FixedSchedule />
    </div>
  );
};

export default HomePage;
