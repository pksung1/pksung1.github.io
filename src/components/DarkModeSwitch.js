import classNames from 'classnames';
import React, { useLayoutEffect, useState } from 'react';

const DARKMODE_STORAGE_KEY = 'DARKMODE_STORAGE_KEY'
const MODE = {
  dark: 'dark',
  white: 'white'
}

const DarkModeSwitch = () => {
  const [isDark, setIsDark] = useState(false)

  const wrapperClass = classNames('w-10 rounded-3xl border p-1 transition-all', isDark ? 'border-gray-700 bg-white' : 'border-white bg-gray-700')
  const dotClass = classNames('w-4 h-4 border rounded-full transition-all', isDark ? ' border-gray-700 bg-white' : 'border-white bg-gray-700 translate-x-4')


  const handleDarkModeClick = () => {
    localStorage.setItem(DARKMODE_STORAGE_KEY, !isDark ? MODE.dark : MODE.white)
    if (!isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    setIsDark(!isDark)
  }

  useLayoutEffect(() => {
    const mode = localStorage.getItem(DARKMODE_STORAGE_KEY)
    if (mode === MODE.dark) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDark(false)
    }
  }, [])


  return (
    <div className={wrapperClass} onClick={handleDarkModeClick}>
      <div className={dotClass} />
    </div>
  )
}

export default DarkModeSwitch