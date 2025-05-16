import React from 'react';

const Button = ({ label='btn', onClick=()=>{alert('clicked')} }) => (
  <button onClick={onClick} style={{ padding: '10px', background: 'blue', color: 'white', border: 'none', borderRadius: '4px' }}>
    {label}
  </button>
);

export default Button;