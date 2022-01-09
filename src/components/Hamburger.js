import React from 'react';

const Hamburger = ({onClick}) => {
  return (
    <svg version="1.1" baseProfile="full" width="35" height="25" onClick={onClick}>
      <rect width="35" height="2" fill="#000" rx="5" ry="5"/>
      <rect width="35" height="2" y="10" fill="#000" rx="5" ry="5"/>
      <rect width="35" height="2" y="20" fill="#000" rx="5" ry="5"/>
    </svg>
  )
}

export default Hamburger;