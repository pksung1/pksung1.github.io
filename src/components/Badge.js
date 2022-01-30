import React from 'react'

const BADGE_COLORS = [
  '#6E44FF',
  '#B892FF',
  '#FFC2E2',
  '#FF90B3',
  '#EF7A85',
]

const Badge = ({text}) => {

  const randomColor = BADGE_COLORS[text[0].charCodeAt() % BADGE_COLORS.length]

  return (
    <div className='py-0.5 px-1 rounded text-sm inline-block border mr-1' style={{color: randomColor}}>
      {text}
    </div>
  )
}

export default Badge;