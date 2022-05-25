import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";

export interface DateFilterState {
  startDate: Date;
  endDate: Date;
}

const initialState: DateFilterState = {
  startDate: new Date(),
  endDate: new Date(),
};

export const dateFilterSlice = createSlice({
  name: "dateFilter",
  initialState,
  reducers: {
    changeDate: (state, action: PayloadAction<DateFilterState>) => {
      state.startDate = action.payload.startDate;
      state.endDate = action.payload.endDate;
    },
  },
});

export const { changeDate } = dateFilterSlice.actions;
export const selectDateFilter = (state: RootState) => state.dateFilter;

export default dateFilterSlice.reducer;
