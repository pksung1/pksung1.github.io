import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import MainBrand from "@app/sections/MainBrand"
import RandomBlogPosts from "@app/sections/RandomBlogPosts"
import MainKeyword from "@app/sections/MainKeyword"
import PageLayout from "@app/layouts/PageLayout"

export const Head: HeadFC = () => {
  return (
    <>
      <title>개발 블로그 | vidilog</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"></link>
    </>
  )
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <PageLayout>
      <MainBrand />
      <MainKeyword />
      <RandomBlogPosts />
      {/* TODO: 스킬그래프 작업후 보여주기 */}
      {/* <SkillGraph /> */}
      {/* <Text as="p">프로젝트 경험(타임라인)</Text>
      <Text as="p">Contact Me</Text> */}
    </PageLayout>
  )
}

export default IndexPage
