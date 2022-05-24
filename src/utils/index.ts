import { MILI_OF_DATE } from "../constants";
import { RefWeek } from "../enums";

export function sumDate(startDate: number | Date, date: number | Date): number {
  return Number(startDate) + Number(date);
}

export function getCurrentWeek(): number {
  const currentDate = new Date();
  const oneJan = new Date(currentDate.getFullYear(), 0, 1);
  const numberOfDays = Math.floor(
    (Number(currentDate) - Number(oneJan)) / MILI_OF_DATE
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

export function isWorkDate(currentDate:number): boolean {
  switch (currentDate) {
    case 0:
    case 6:
      return false;
    default:
      return true;
  }
}

export function isWfh(startDate: number, currentDate: number): boolean {
  startDate += getCurrentWeek();
  return (
    startDate === currentDate ||
    startDate + 3 === currentDate ||
    startDate - 3 === currentDate
  );
}
