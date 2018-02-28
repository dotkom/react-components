import React, { Component } from 'react';

import _s from './CalendarDay.css';

class CalendarDay extends Component {
  render() {
    return (
      <td>
        <span className={_s.day}>{this.props.day}</span>
      </td>  
    );
  }
}

export default CalendarDay;