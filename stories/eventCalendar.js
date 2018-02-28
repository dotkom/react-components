import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { EventCalendar } from '../';


storiesOf('EventCalendar', module)
  .add('big calendar', () => (
    <EventCalendar />
  ));