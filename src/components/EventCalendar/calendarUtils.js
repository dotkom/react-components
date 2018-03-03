import { DateTime } from 'luxon';

/**
 * Returns the weekday of the first day of a month from a date object.
 * @param {Date} date A JavaScript Date object.
 * @returns {number} Zero indexed number between 0 and 6.
 */
export function getFirstWeekdayOfMonth(date) {
  /** Create DateTime from the date object */
  let dt = DateTime.fromJSDate(date);
  /** Set the DateTime to the first day of the month */
  dt = dt.minus({ day: dt.day - 1 });
  /** Get index of first day from DateTime, zero-index and return */
  return dt.weekday - 1;
}

/**
 * @param {Date} date JavaScript Date object.
 * @returns {number} Length of the given month. Number between 28 and 31.
 */
export function getMonthLength(date) {
  const dt = DateTime.fromJSDate(date);
  return dt.daysInMonth;
}

/**
 * @param {Date} date JavaScript Date object.
 * @returns {number} Length of the month previous to the given month. Number between 28 and 31.
 */
export function getPreviousMonthLength(date) {
  let dt = DateTime.fromJSDate(date);
  dt = dt.minus({ month: 1 });
  return getMonthLength(dt.toJSDate());
}

/**
 * Shift a Date object with a given number of months.
 * @param {Date} date JavaScript Date object to be shifted.
 * @param {number} amount The amount of which to shift the month of the Date object.
 * @returns {Date} Shifted Date object.
 */
export function changeMonth(date, amount) {
  let dt = DateTime.fromJSDate(date);
  if (amount > 0) {
    dt = dt.plus({ month: amount });
  } else if (amount < 0) {
    dt = dt.minus({ month: Math.abs(amount) });
  }
  return dt.toJSDate();
}

/**
 * Formats a Date object to a nice formatting, e.g. 'April 2020'.
 * @param {Date} date JavaScript Date object.
 * @returns {string} Formated datestring.
 */
export function getMonthAndYear(date) {
  const dt = DateTime.fromJSDate(date);
  return dt.toFormat('MMMM yyyy');
}
