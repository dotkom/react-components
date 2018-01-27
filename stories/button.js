import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../src/components/Button';
import { IconButton, LoginButton } from '../src/components/Button';

import onlineLogoWhite from '../src/assets/images/online-icon-white.png';
import onlineLogo from '../src/assets/images/online-icon.png';


storiesOf('Button', module)
  .add('with text', () => (
    <Button>Button</Button>
  ))
  .add('with an icon on the left', () => (
    <IconButton iconLeft={onlineLogoWhite}>Button with icon</IconButton>
  ))
  .add('with an icon on the right', () => (
    <IconButton iconRight={onlineLogoWhite}>Button with icon</IconButton>
  ))
  .add('with different icon on hover', () => (
    <IconButton
      iconRight={onlineLogoWhite}
      hoverIconRight={onlineLogo}
    >Button with icon</IconButton>
  ))
  .add('as LoginButton', () => (
    <LoginButton handleLogin={action('clicked')} />
  ))
