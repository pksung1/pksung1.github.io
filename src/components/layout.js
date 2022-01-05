import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <div className="flex flex-row justify-between px-4 py-2 border-b border-gray-600 border-solid">
        <h1 className="text-3xl">
          <Link to="/">{title}</Link>
        </h1>
        <input type="text" className="border w-64 rounded-xl px-2" placeholder="검색" />
      </div>
    )
  } else {
    header = (
      <Link className="text-xl" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="bg-gray-200" data-is-root-path={isRootPath}>
      <header>{header}</header>
      <main className="flex flex-column">
        <section className="flex"></section>
        <section className="max-w-2xl">{children}</section></main>
      <footer></footer>
    </div>
  )
}

export default Layout
