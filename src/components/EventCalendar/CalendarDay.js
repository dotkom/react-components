import React from 'react';
import PropTypes from 'prop-types';

import _s from './CalendarDay.css';
import CalendarEvent from './CalendarEvent';

function CalendarDay({ day, event }) {
  return (
    <td className={day.disabled ? _s.cellDisabled : _s.cell}>
      <span className={_s.day}>{day.number}</span>
      <CalendarEvent event={event} />
    </td>
  );
}

CalendarDay.propTypes = {
  day: PropTypes.shape({
    number: PropTypes.number,
    disabled: PropTypes.bool,
  }),
  event: PropTypes.shape({
    type: PropTypes.number,
    status: PropTypes.number,
    headline: PropTypes.string,
  }),
};

CalendarDay.defaultProps = {
  day: { number: 0, disabled: true },
  event: { type: 3, status: 0, headline: 'TBA' },
};

export default CalendarDay;
