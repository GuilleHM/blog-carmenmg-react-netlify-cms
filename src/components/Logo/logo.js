import React from 'react';
import './logo.css';

const Logo = (props) => {
  return (
    <div className={`logo logo${props.page}`}>
      <span>{props.title}</span>
    </div>
  )
}

export default Logo