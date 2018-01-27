import React from "react";

import Button from './Button';

import _s from './IconButton.css';

class IconButton extends Button {
  constructor(props){
    super(props);
    this.state = {
      hover: false
    }
  }

  componentDidMount() {
    const { hoverIconLeft, hoverIconRight } = this.props;
    // Preload hover icons
    if(hoverIconLeft) {
      new Image().src = hoverIconLeft;
    }
    if(hoverIconRight) {
      new Image().src = hoverIconRight;
    }
  }

  render(){
    const { text, iconLeft, iconRight, hoverIconLeft, hoverIconRight, ...rest } = this.props;
    
    const icLeft = this.state.hover ? hoverIconLeft || iconLeft : iconLeft || hoverIconLeft;
    const icRight = this.state.hover ? hoverIconRight || iconRight : iconRight || hoverIconRight;
    
    return (
      <Button
        {...rest}
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
      >
        <div className={_s.buttonContent}>
          { icLeft && <img className={_s.iconLeft} src={icLeft} alt="Ikon" /> }
          { text }
          { icRight && <img className={_s.iconRight} src={icRight} alt="Ikon" /> }
        </div>
      </Button>
    );
  }
}

export default IconButton;
