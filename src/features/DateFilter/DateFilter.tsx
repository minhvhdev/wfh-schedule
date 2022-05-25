import React, { FC } from "react";
import { SearchOutlined } from "@mui/icons-material";
import { Alert, Icon } from "@mui/material";
import styles from "./DateFilter.module.scss";
import { changeDate, selectDateFilter } from "./dateFilterSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { formatDateInput, isCorrectTimeLine } from "../../utils";

interface DateFilterProps {}

const DateFilter: FC<DateFilterProps> = () => {
  const dateFilter = useAppSelector(selectDateFilter);
  const [startDate, setStartDate] = React.useState(
    formatDateInput(dateFilter.startDate)
  );
  const [endDate, setEndDate] = React.useState(
    formatDateInput(dateFilter.endDate)
  );
  const [isError, setIsError] = React.useState(false);
  const dispatch = useAppDispatch();

  function handleChangeStartDate(e: React.ChangeEvent<HTMLInputElement>): void {
    setStartDate(e.target.value);
  }

  function handleChangeEndDate(e: React.ChangeEvent<HTMLInputElement>): void {
    setEndDate(e.target.value);
  }

  function handleSearch(): void {
    if (isCorrectTimeLine(startDate, endDate)) {
      dispatch(
        changeDate({
          startDate: new Date(startDate),
          endDate: new Date(endDate),
        })
      );
    } else {
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 3000);
    }
  }

  return (
    <div className={styles.DateFilter}>
      <label htmlFor="start">From</label>
      <input
        id="start"
        type="date"
        value={startDate}
        onChange={handleChangeStartDate}
      />
      <label htmlFor="end">to</label>
      <input
        id="end"
        type="date"
        value={endDate}
        onChange={handleChangeEndDate}
      />
      <Icon
        className={styles.icon}
        component={SearchOutlined}
        onClick={handleSearch}
      />
      {isError ? (
        <Alert variant="filled" severity="error" className={styles.alert}>
          Are you going to destroy the timeline? Call Dr.Strange!
        </Alert>
      ) : null}
    </div>
  );
};

export default DateFilter;
