import React from 'react';
import './InputArea.css';

function InputArea(props) {
  const style = {
    backgroundColor: props.bgColor || "#da7474",
    color: props.textColor || 'white',
    padding: props.pad || '35px 0px',
    border: props.border || 'none',
    borderRadius: '0px',
    width: props.width,
    height: props.height,
    ...props.style,
  }
  return (
    <input className="inputArea" type="text" value={props.value} style={style} {...props} readOnly >
      {props.children}
    </input>
  );
}

export default InputArea;
