import { MILI_OF_DATE } from "../constants";
import { RefWeek } from "../enums";

export function sumDate(startDate: number | Date, date: number | Date): number {
  return Number(startDate) + Number(date);
}

export function getCurrentWeek(currentDate: Date): number {
  const oneJan = new Date(currentDate.getFullYear(), 0, 1);
  const numberOfDays = Math.floor(
    (Number(currentDate) - Number(oneJan)) / MILI_OF_DATE
  );
  const currentWeekOfYear = Math.ceil(numberOfDays / 7);
  //Project start at week 21
  return currentWeekOfYear % 3 === RefWeek.Week1
    ? RefWeek.Week1
    : currentWeekOfYear % 3 === RefWeek.Week2
    ? RefWeek.Week2
    : RefWeek.Week3;
}

export function getFirstOrLastDateOfMonth(isFirst: boolean): Date {
  const date = new Date();
  const month = date.getMonth();
  const year = date.getFullYear();
  const halfDay = 12 * 60 * 60 * 1000;
  const firstDay = new Date(Number(new Date(year, month, 1)) + halfDay);
  const lastDay = new Date(Number(new Date(year, month + 1, 0)) + halfDay);
  console.log(firstDay);
  console.log(lastDay);

  return isFirst ? firstDay : lastDay;
}

export function formatDateInput(date: string | number | Date): string {
  console.log(new Date(date).toISOString());

  return new Date(date).toISOString().split("T")[0];
}

export function isCorrectTimeLine(
  startDate: string | number | Date,
  endDate: string | number | Date
): boolean {
  startDate = Number(new Date(startDate));
  endDate = Number(new Date(endDate));
  return endDate >= startDate;
}

export function isWorkDate(currentDate: number): boolean {
  switch (currentDate) {
    case 0:
    case 6:
      return false;
    default:
      return true;
  }
}

export function isWfh(
  startDay: number,
  currentDay: number,
  currentDate: Date
): boolean {
  startDay += getCurrentWeek(currentDate);
  return (
    startDay === currentDay ||
    startDay + 3 === currentDay ||
    startDay - 3 === currentDay
  );
}
