import React, { FC } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { dayOfWeek, staticData } from "../../constants";
import { RefWeek } from "../../enums";
import styles from "./FixedSchedule.module.scss";

interface FixedScheduleProps {}

const FixedSchedule: FC<FixedScheduleProps> = () => {
  const currentWeek: number = getCurrentWeek();

  function getCurrentWeek(): number {
    const currentDate = new Date();
    const oneJan = new Date(currentDate.getFullYear(), 0, 1);
    const numberOfDays = Math.floor(
      (Number(currentDate) - Number(oneJan)) / (24 * 60 * 60 * 1000)
    );
    const currentWeekOfYear = Math.ceil(
      (currentDate.getDay() + 1 + numberOfDays) / 7
    );
    //Project start at week 21
    return currentWeekOfYear % 3 === RefWeek.Week1
      ? RefWeek.Week1
      : currentWeekOfYear % 3 === RefWeek.Week2
      ? RefWeek.Week2
      : RefWeek.Week3;
  }

  function isWfh(startDate: number, currentDate: number): boolean {
    startDate += currentWeek;
    return (
      startDate === currentDate ||
      startDate + 3 === currentDate ||
      startDate - 3 === currentDate
    );
  }
  
  return (
    <div className={styles.FixedSchedule}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell component="th" scope="row">
                Account
              </TableCell>
              {dayOfWeek.map((item) => {
                return <TableCell key={item.value}>{item.name}</TableCell>;
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {staticData.map((item) => {
              return (
                <TableRow>
                  <TableCell component="th" scope="row">
                    {item.account}
                  </TableCell>
                  {dayOfWeek.map((el) => {
                    return (
                      <TableCell key={el.value}>
                        {isWfh(item.startWfhDate, el.value) ? "x" : null}
                      </TableCell>
                    );
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

export default FixedSchedule;
