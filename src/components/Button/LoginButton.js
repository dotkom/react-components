import React from "react";

import IconButton from './IconButton';

import onlineIcon from '../../assets/images/online-icon.png';
import onlineIconWhite from '../../assets/images/online-icon-white.png';

function LoginButton(props) {
  const { displayText, handleLogin } = props;
  return (
    <IconButton
      text={displayText || "Logg inn"}
      iconLeft={onlineIconWhite}
      hoverIconLeft={onlineIcon}
      onClick={() => handleLogin()}
    />
  );
}

export default LoginButton;
