import * as React from "react"
import { graphql, type HeadFC, type PageProps } from "gatsby"
import MainBrand from "@app/sections/MainBrand"
import RandomBlogPosts, { Post } from "@app/sections/RandomBlogPosts"
import MainKeyword from "@app/sections/MainKeyword"
import PageLayout from "@app/layouts/PageLayout"
import dayjs from "dayjs"
import { getPostSlug, getTitle } from "@app/utils/format"

export const Head: HeadFC = () => {
  return (
    <>
      <title>개발 블로그 | vidilog</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"></link>
    </>
  )
}

const IndexPage = ({ data }: {data: Queries.RecentlyPostsQuery}) => {

  const posts: Post[] = data.allMarkdownRemark.edges.map(({ node }) => ({
    title: getTitle(node.fileAbsolutePath!),
    slug: getPostSlug(node.fileAbsolutePath!),
    description: "<<설명을 넣어야되요>>",
    thumbnail: "",
    publishAt: dayjs(node.frontmatter?.publishAt) ?? null,
    tags: [],
  }))
  return (
    <PageLayout>
      <RandomBlogPosts posts={posts} />
      {/* TODO: 스킬그래프 작업후 보여주기 */}
      {/* <SkillGraph /> */}
      {/* <Text as="p">프로젝트 경험(타임라인)</Text>
      <Text as="p">Contact Me</Text> */}
    </PageLayout>
  )
}


export const query = graphql`
  query RecentlyPosts {
    allMarkdownRemark(sort: {
      frontmatter:{
        publishAt: ASC
      }
    }, limit: 3) {
      edges{
        node {
          frontmatter {
            publishAt
          }
          fileAbsolutePath
        }
      }
    }
  }

`

export default IndexPage
