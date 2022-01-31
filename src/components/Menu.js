import React, {useState} from 'react'
import { Link } from "gatsby"
import Hamburger from './Hamburger'
import DarkModeSwitch from './DarkModeSwitch'
import classNames from 'classnames'

const MENUS = [
  {
    to: '/posts',
    display: 'Posts'
  },
  {
    to: '/archive',
    display: 'Archive'
  },
  {
    to: '/category',
    display: 'Category'
  },
  {
    to: '/about',
    display: 'About'
  },
]

const Menu = () => {
  const [displayMenu, setDisplayMenu] = useState(false)
  const handleMenuClick = () => {
    setDisplayMenu(!displayMenu)
  }

  const mobileMenuClasses = classNames('flex flex-col items-center absolute left-0 top-12 bg-white dark:bg-gray-900 w-full shadow', {'hidden': !displayMenu})

  
  return (
    <div className='flex items-center'>
        <div className="flex-row justify-center items-center gap-4 hidden lg:flex dark:text-white">
          {MENUS.map(({to, display}) => <Link to={to} key={to}>{display}</Link>)}
          <DarkModeSwitch />
        </div>
        
        <div className="lg:hidden flex items-center">
          <Hamburger onClick={handleMenuClick} />
          <div className={mobileMenuClasses}>
            <DarkModeSwitch />
            {MENUS.map(({to, display}) => <Link className='py-2 w-full shadow dark:shadow-gray-300 text-center dark:text-white' to={to} key={to}>{display}</Link>)}
            
          </div>
        </div>
    </div>
  )
}

export default Menu;