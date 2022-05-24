import React, { FC } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import styles from "./WeekSelect.module.scss";
interface WeekSelectProps {
  handleChange: (event: SelectChangeEvent) => void;
  defaultValue: number;
}
const WeekSelect: FC<WeekSelectProps> = ({ handleChange, defaultValue }) => {
    console.log(typeof defaultValue);
    
  return (
    <div className={styles.WeekSelect}>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={defaultValue.toString()}
          onChange={(e: SelectChangeEvent) => {
            handleChange(e);
          }}
          label="Day Number Display"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={7}>1 week</MenuItem>
          <MenuItem value={14}>2 week</MenuItem>
          <MenuItem value={21}>3 week</MenuItem>
          <MenuItem value={30}>1 month</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default WeekSelect;
