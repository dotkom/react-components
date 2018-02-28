import React, { Component } from 'react';
import CalendarDay from './CalendarDay';

class EventCalendar extends Component {
  render() {
    return  (
      <table>
        <tr>
          <CalendarDay day={1} />
        </tr>
      </table>
    );
  }
}

export default EventCalendar;