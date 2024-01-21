import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Navbar from "../layouts/Navbar"
import Text from "@components/Text"
import MainBrand from "src/sections/MainBrand"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Navbar />
      <MainBrand />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
