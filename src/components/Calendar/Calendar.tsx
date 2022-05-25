import React, { FC } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { MILI_OF_DATE, START_DATA } from "../../constants";
import styles from "./Calendar.module.scss";
import { isWfh, isWorkDate } from "../../utils";
import { useAppSelector } from "../../redux/hooks";
import { selectDateFilter } from "../../features/DateFilter/dateFilterSlice";
import CustomExport from "../CustomExport/CustomExport";

interface CalendarProps {}

const Calendar: FC<CalendarProps> = () => {
  const dateFilter = useAppSelector(selectDateFilter);
  const startDate = Number(dateFilter.startDate);
  const endDate = Number(dateFilter.endDate);
  const duration = (endDate - startDate) / MILI_OF_DATE;
  const listDate: Array<Date> = getListDate();

  const columns: GridColDef[] = listDate.map((date, index) => {
    return {
      field: `day${index}`,
      headerName: `${date.getMonth() + 1}/${date.getDate()}`,
      sortable: false,
      filterable: false,
      editable: true,
      flex: duration,
      minWidth: 100,
    };
  });

  const rows: any = [];
  for (let index = 0; index < START_DATA.length; index++) {
    const element = START_DATA[index];
    let row = listDate.reduce((accumulator, date, index) => {
      const key = `day${index}`;
      const value = isWfh(element.startWfhDate, date.getDay(), date) ? "X" : "";
      return {
        ...accumulator,
        [key]: value,
      };
    }, {});
    rows.push({ ...row, account: element.account });
  }

  columns.unshift({
    field: "account",
    headerName: "Account",
    sortable: true,
    filterable: true,
    width: 150,
  });

  function getListDate(): Array<Date> {
    const result = [];
    for (let i = 0; i <= duration; i++) {
      const date = new Date(startDate + i * MILI_OF_DATE);
      if (isWorkDate(date.getDay())) {
        result.push(new Date(startDate + i * MILI_OF_DATE));
      }
    }
    return result;
  }

  return (
    <div className={styles.Calendar}>
      <DataGrid
        autoHeight
        rows={rows}
        columns={columns}
        getRowId={(row) => row.account}
        hideFooter={true}
        pagination={undefined}
        disableColumnMenu
        components={{
          Toolbar: CustomExport,
        }}
        componentsProps={{ toolbar: { csvOptions: { allColumns: true } } }}
      />
    </div>
  );
};

export default Calendar;
