import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div data-is-root-path={isRootPath}>
      <header className="shadow-md w-full h-12 items-center z-20 fixed bg-white">
        <div className="flex flex-row justify-between px-4 py-2">
          <h1 className="text-xl">
            <Link to="/">{title}</Link>
          </h1>
          <div className="flex flex-row justify-center items-center">
            Facebook Linkedin Icons
          </div>
        </div>
      </header>
      <main className="flex flex-column">
        <section className="flex"></section>
        <section className="flex-1 overflow-hidden relative">{children}</section>
      </main>
      <footer></footer>
    </div>
  )
}

export default Layout
