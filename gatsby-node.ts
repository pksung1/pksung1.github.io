
import { CreatePagesArgs } from "gatsby"

export interface Page {
  frontmatter: {
    slug: string;
  }
}

exports.createPages = async (args: CreatePagesArgs) => {
  const { actions, graphql } = args;
  const { createPage } = actions;

  const result = await graphql<{
    allMdx: {
      nodes: Page[];
    }
  }>(`
  query {
    allMdx {
      nodes {
        frontmatter {
          slug
        }
      }
    }
  }`)

  result.data?.allMdx?.nodes.forEach((node) => {
    createPage({
      path: node.frontmatter.slug,
      component: require.resolve("./src/templates/blog-post.tsx"),
      context: {
        slug: node.frontmatter.slug,
      }
    })
  });
  

  return args;
}