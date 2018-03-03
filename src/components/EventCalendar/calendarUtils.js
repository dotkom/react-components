import moment from 'moment';

/**
 * Returns the weekday of the first day of a month from a date object.
 * @param {Date} date A JavaScript Date object.
 * @returns {number} Zero indexed number between 0 and 6.
 */
export function getFirstWeekdayOfMonth(date) {
  /** Create moment from the date object */
  let d = moment(date);
  /** Set the moment to the first day of the month */
  d = moment(d.format('YYYY-MM-01'));
  /** Get index of first day from moment, zero-index and return */
  return d.isoWeekday() - 1;
}

/**
 * @param {Date} date JavaScript Date object.
 * @returns {number} Length of the given month. Number between 28 and 31.
 */
export function getMonthLength(date) {
  const d = moment(date);
  return d.daysInMonth();
}

/**
 * @param {Date} date JavaScript Date object.
 * @returns {number} Length of the month previous to the given month. Number between 28 and 31.
 */
export function getPreviousMonthLength(date) {
  let d = moment(date);
  d = d.subtract(1, 'month');
  return getMonthLength(d);
}

/**
 * Shift a Date object with a given number of months.
 * @param {Date} date JavaScript Date object to be shifted.
 * @param {number} amount The amount of which to shift the month of the Date object.
 * @returns {Date} Shifted Date object.
 */
export function changeMonth(date, amount) {
  let d = moment(date);
  if (amount > 0) {
    d = d.add(amount, 'month');
  } else if (amount < 0) {
    d = d.subtract(Math.abs(amount), 'month');
  }
  return d.toDate();
}
