import React from "react";
import PropTypes from 'prop-types';

import _s from './Button.css';

class Button extends React.Component {
  _mouseEnter(...a) {
    if(this.props.onMouseEnter)
      this.props.onMouseEnter(...a);
  }

  _mouseLeave(...a) {
    if(this.props.onMouseLeave)
      this.props.onMouseLeave(...a);
  }

  render() {
    const { children, ...rest } = this.props;
    
    return (
      <button 
        {...rest}
        className={_s.button} 
        onMouseEnter={(...a) => this._mouseEnter(...a)}
        onMouseLeave={(...a) => this._mouseLeave(...a)}
      >
        <div className={_s.buttonContent}>
          { children }
        </div>
      </button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.node,
};

Button.defaultProps = {
  children: [],
};

export default Button;
