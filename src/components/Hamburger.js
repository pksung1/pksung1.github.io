import React from 'react';

const Hamburger = ({onClick}) => {
  return (
    <svg version="1.1" baseProfile="full" width="35" height="25" onClick={onClick} className='overflow-hidden group'>
      <rect width="35" height="2" rx="5" ry="5" className='group-hover:translate-x-0 translate-x-2 transition-transform duration-300 fill-black dark:fill-white'/>
      <rect width="35" height="2" y="10" rx="5" ry="5" className='group-hover:translate-x-0 translate-x-4 transition-transform duration-300 fill-black dark:fill-white'/>
      <rect width="35" height="2" y="20" rx="5" ry="5" className='group-hover:translate-x-0 translate-x-6 transition-transform duration-300 fill-black dark:fill-white'/>
    </svg>
  )
}

export default Hamburger;