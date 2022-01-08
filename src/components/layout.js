import * as React from "react"
import { Link } from "gatsby"
import classnames from 'classnames'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  const rootClasses = classnames('flex-1 overflow-hidden relative', {'pt-12': !isRootPath})

  return (
    <div data-is-root-path={isRootPath}>
      <header className="shadow-md w-full h-12 items-center z-20 fixed bg-white">
        <div className="flex flex-row justify-between px-4 py-2">
          <h1 className="text-xl">
            <Link to="/">{title}</Link>
          </h1>
          <div className="flex flex-row justify-center items-center gap-4">
            <Link to="/posts/">Posts</Link>
            <Link to="/archive">Archive</Link>
            <Link to="/category">Category</Link>
            <Link to="/about">About</Link>
          </div>
        </div>
      </header>
      <main className="flex flex-column">
        <section className="flex"></section>
        <section className={rootClasses}>{children}</section>
      </main>
      <footer></footer>
    </div>
  )
}

export default Layout
