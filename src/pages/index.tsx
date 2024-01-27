import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Navbar from "../layouts/Navbar"
import Text from "@components/Text"
import MainBrand from "src/sections/MainBrand"
import RandomBlogPosts from "src/sections/RandomBlogPosts"
import MainKeyword from "src/sections/MainKeyword"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Navbar />
      <MainBrand />
      <MainKeyword />
      <Text as="p">3가지 키워드</Text>
      <RandomBlogPosts />
      <Text as="p">블로그 글 (Random)</Text>
      <Text as="p">프로젝트 경험(타임라인)</Text>
      <Text as="p">Contact Me</Text>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
