import React, { FC } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { MILI_OF_DATE, START_DATA } from "../../constants";
import styles from "./Calendar.module.scss";
import { isWfh, isWorkDate } from "../../utils";
import WeekSelect from "../WeekSelect/WeekSelect";
import { SelectChangeEvent } from "@mui/material";

interface CalendarProps {}

const Calendar: FC<CalendarProps> = () => {
  const [dayNumber, setDayNumber] = React.useState(14); //2 week  
  const startDate: number = getStartDate();
  const listDate: Array<Date> = getListDate();

  function getStartDate(): number {
    const currentDate = new Date();
    const currentDateValue = currentDate.getDay();
    const mondayValue = 1;
    return (
      Number(currentDate) - (currentDateValue - mondayValue) * MILI_OF_DATE
    );
  }

  function getListDate(): Array<Date> {
    const result = [];
    for (let i = 0; i < dayNumber; i++) {
      const date = new Date(startDate + i * MILI_OF_DATE);
      if (isWorkDate(date.getDay())) {
        result.push(new Date(startDate + i * MILI_OF_DATE));
      }
    }
    return result;
  }

  function handleChangeNumber(event: SelectChangeEvent): void {
    setDayNumber(Number(event.target.value));
  }

  return (
    <div className={styles.Calendar}>
      <WeekSelect handleChange={(event)=>{handleChangeNumber(event)}} defaultValue={dayNumber} />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell component="th" scope="row">
                Account
              </TableCell>
              {listDate.map((item, index) => {
                return (
                  <TableCell key={index}>{`${
                    item.getMonth() + 1
                  }/${item.getDate()}`}</TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {START_DATA.map((item) => {
              return (
                <TableRow>
                  <TableCell component="th" scope="row">
                    {item.account}
                  </TableCell>
                  {listDate.map((el, index) => {
                    return isWorkDate(el.getDay()) ? (
                      <TableCell key={index}>
                        {isWfh(item.startWfhDate, el.getDay()) ? "x" : null}
                      </TableCell>
                    ) : null;
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Calendar;
