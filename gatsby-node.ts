
import { CreatePagesArgs } from "gatsby"
import path from "path";

export interface Page {
  frontmatter: {
    slug: string;
    title: string;
    date: Date;
    tags: string[];
  }
  body: string;
  internal: {
    contentFilePath: string;
  }
}

exports.createPages = async (args: CreatePagesArgs) => {
  
  await createPostPages(args);
  return args;
}

async function createPostPages(args: CreatePagesArgs) {

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
          title
          date
          tags
        }
        body
        internal {
          contentFilePath
        }
      }
    }
  }`)
  result.data?.allMdx?.nodes.forEach((node) => {
    createPage({
      path: path.join('posts', node.frontmatter.slug),
      component: `${path.resolve("./src/templates/blog-post.tsx")}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        page: node
      }
    })
  });
}