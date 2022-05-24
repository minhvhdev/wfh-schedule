import React, { FC } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { DAY_OF_WEEK, START_DATA } from "../../constants";
import styles from "./FixedSchedule.module.scss";
import { isWfh } from "../../utils";

interface FixedScheduleProps {}

const FixedSchedule: FC<FixedScheduleProps> = () => {  
  return (
    <div className={styles.FixedSchedule}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell component="th" scope="row">
                Account
              </TableCell>
              {DAY_OF_WEEK.map((item) => {
                return <TableCell key={item.value}>{item.name}</TableCell>;
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
                  {DAY_OF_WEEK.map((el) => {
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
