import { Page } from "gatsby-node"
import React from "react"

const BlogPost = (data: Page) => {
  return (
    <div>{data.frontmatter.slug}</div>
  )
}

export default BlogPost