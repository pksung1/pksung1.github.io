import * as React from "react"

import '@assets/styles/global.scss'
import MenuWrapper from "../containers/MenuWrapper"

const IndexPage:React.FC = () => {
  return (
    <MenuWrapper>
      <div className="flex flex-col flex-1 items-center justify-center h-screen">
          <h1 className="text-4xl">Seonpark의 gatsby 블로그</h1>
      </div>
    </MenuWrapper>
  )
}

export default IndexPage
