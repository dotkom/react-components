import React from 'react';
import PropTypes from 'prop-types';

import _s from './Button.css';

function Button(props) {
  const { children, ...rest } = props;
  return (
    <button
      {...rest}
      className={_s.button}
    >
      <div className={_s.buttonContent}>
        { children }
      </div>
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
};

Button.defaultProps = {
  children: [],
};

export default Button;
