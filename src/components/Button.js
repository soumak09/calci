import React from 'react';
import './Button.css';
function Button(props) {
  const style = {
    backgroundColor: props.bgColor || '#4CAF50',
    color: props.textColor || 'white',
    padding: props.pad || '10px 20px',
    border: props.border || 'none',
    borderRadius: '0px',
    width: props.width,
    height: props.height,
    ...props.style,
  };
  return (
    <button className="button" onClick={props.onClick} value={props.value} style={style} {...props} >
      {props.children}
    </button>
  );
}

export default Button;

