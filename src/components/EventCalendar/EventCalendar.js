import React, { Component } from 'react';

import CalendarDay from './CalendarDay';

import {
  getFirstWeekdayOfMonth,
  getPreviousMonthLength,
  getMonthLength,
  changeMonth,
  getMonthAndYear,
} from './calendarUtils';

import _s from './EventCalendar.css';

class EventCalendar extends Component {
  constructor(props) {
    super(props);

    const now = new Date();

    this.state = {
      calendar: [],
      currentDate: now,
      events: [{
        type: 1,
        status: 0,
        headline: 'TBA',
      }],
    };
  }

  componentDidMount() {
    this.createCalendar();
  }

  /**
   * Change the currentDate state of the Component. Used to affect
   * the month that is displayed by the calendar.
   * @param {number} amount The amount of which to change the month. Given in integers.
   */
  changeMonth(amount) {
    this.setState({
      currentDate: changeMonth(this.state.currentDate, amount),
    }, () => this.createCalendar());
  }

  /**
   * Use current state to create a calendar.
   * The calendar is structured as a 2d-array corresponding to the current month in state.
   * Each array in the outer array is a week in the given month.
   * A week must always have 7 days. When needed, they are filled in from surrounding months.
   */
  createCalendar() {
    const { currentDate } = this.state;
    /** Use momentjs to get month metadata for current month in state */
    const days = getMonthLength(currentDate);
    const firstWeekDay = getFirstWeekdayOfMonth(currentDate);
    const lastDayPrevMonth = getPreviousMonthLength(currentDate);

    /** Setup before filling in calendar */
    const calendar = [];
    let rowNumber = 0;
    calendar[rowNumber] = [];

    /** Fill in dates from previous months to the first week */
    for (let i = firstWeekDay; i > 0; i -= 1) {
      const day = {
        number: (lastDayPrevMonth - i) + 1,
        disabled: true,
      };
      calendar[rowNumber].push(day);
    }

    /** Fill in dates from current months into as many weeks as needed */
    for (let i = 1; i <= days; i += 1) {
      if (calendar[rowNumber].length === 7) {
        rowNumber += 1;
        calendar[rowNumber] = [];
      }
      const day = {
        number: i,
        disabled: false,
      };
      calendar[rowNumber].push(day);
    }

    /** Fill the remaining days of the last week with days from the next month */
    const { length } = calendar[rowNumber];
    for (let i = 0; i < (7 - length); i += 1) {
      const day = {
        number: i + 1,
        disabled: true,
      };
      calendar[rowNumber].push(day);
    }

    this.setState({ calendar });
  }

  render() {
    const { calendar, events, currentDate } = this.state;
    return (
      <div>
        <div className={_s.header}>
          <button className={_s.headerElement} onClick={() => this.changeMonth(-1)}>
            &lt;
          </button>
          
          <p className={_s.headerElement}>{getMonthAndYear(currentDate)}</p>
          
          <button className={_s.headerElement} onClick={() => this.changeMonth(1)}>
            &gt;
          </button>
        </div>
        
        {calendar.length ?
          <table className={_s.eventCalendar}>
            <tbody>
              {calendar.map((week, key) => (
                // eslint-disable-next-line react/no-array-index-key
                <tr key={`week-${key}`}>
                  {week.map(day => (
                    <CalendarDay day={day} event={events[0]} key={day.number + day.disabled} />
                  ))}
                </tr>
              ))}
            </tbody>
          </table> : undefined
        }
      </div>
    );
  }
}

export default EventCalendar;
