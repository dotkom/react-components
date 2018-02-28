import React, { Component } from 'react';
import CalendarDay from './CalendarDay';

import _s from './EventCalendar.css';

class EventCalendar extends Component {
  render() {
    const calendar = [];

    for (let i = 0; i < 5; i += 1) {
      const row = [];

      for (let j = 0; j < 7; j += 1) {
        row.push(<CalendarDay day={7 * i + j} />);
      }

      calendar.push(row);
    }

    return  (
      <table className={_s.eventCalendar}>
        {calendar.map(days  => <tr>{days}</tr>)}
      </table>
    );
  }
}

export default EventCalendar;