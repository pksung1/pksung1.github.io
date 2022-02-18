import React from 'react'
import { Link } from "gatsby"
import classNames from 'classnames'
import Badge from './Badge'
const Post = ({title, description, date, tags, className}) => {
  const wrapper = classNames(
    "w-full h-32 transition-shadow shadow hover:shadow-lg border-l-8 \
    border-red-800 rounded-xl p-4 flex flex-row justify-between dark:shadow-gray-600", className)

  return (
    <div className={wrapper}>
      <div className='dark:text-white'>
        <h3 className='text-2xl'>{title}</h3>
        <p className='text flex-1 text-gray-400'>{description}</p>
        <p className='text-sm text-gray-400'>{date}</p>
      </div>
      <div className='w-48 border-l-2 pl-2'>
        {tags?.map(tag => <Badge text={tag} key={tag} />)}
      </div>
    </div>
  )
}

export default Post;