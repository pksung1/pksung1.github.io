import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Navbar from "../layouts/Navbar"
import Text from "@components/Text"
import MainBrand from "src/sections/MainBrand"
import RandomBlogPosts from "src/sections/RandomBlogPosts"
import MainKeyword from "src/sections/MainKeyword"
import SkillGraph from "src/sections/SkillGraph"

export const Head: HeadFC = () => {
  console.log("HEAD IMPORT")
  return (
    <>
      <title>Home Page</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"></link>
    </>
  )
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Navbar />
      <MainBrand />
      <MainKeyword />
      <RandomBlogPosts />
      {/* TODO: 스킬그래프 작업후 보여주기 */}
      {/* <SkillGraph /> */}
      {/* <Text as="p">프로젝트 경험(타임라인)</Text>
      <Text as="p">Contact Me</Text> */}
    </main>
  )
}

export default IndexPage
