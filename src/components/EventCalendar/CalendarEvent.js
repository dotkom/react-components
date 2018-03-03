import React from 'react';
import PropTypes from 'prop-types';

import _s from './CalendarEvent.css';

function CalendarEvent({ event }) {
  return (
    <div className={_s.calendarEvent}>
      <span className={_s.calendarEventText}>
        {event.headline}
      </span>
    </div>
  );
}

CalendarEvent.propTypes = {
  event: PropTypes.shape({
    type: PropTypes.number,
    status: PropTypes.number,
    headline: PropTypes.string,
  }),
};

CalendarEvent.defaultProps = {
  event: { type: 3, status: 0, headline: 'TBA' },
};

export default CalendarEvent;
