import React from "react";

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

export default LoginButton;
