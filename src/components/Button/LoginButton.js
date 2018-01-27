import React from "react";
import PropTypes from 'prop-types';

import IconButton from './IconButton';

import onlineIcon from '../../assets/images/online-icon.png';
import onlineIconWhite from '../../assets/images/online-icon-white.png';

function LoginButton(props) {
  const { children, ...rest } = props;
  return (
    <IconButton
      {...rest}
      iconLeft={onlineIconWhite}
      hoverIconLeft={onlineIcon}
    >{children}</IconButton>
  );
}

LoginButton.propTypes = {
  children: PropTypes.node,
}

LoginButton.defaultProps = {
  children: [],
}

export default LoginButton;
