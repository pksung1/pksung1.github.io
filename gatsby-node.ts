
import { CreatePagesArgs } from "gatsby"
import path from "path";

export interface Page {
  title: string;
  frontmatter: {
    publishAt?: Date;
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

  const result = await graphql<Queries.MarkdownPagesQuery>(`
  query MarkdownPages {
    allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          title
          publishAt
        }
        rawMarkdownBody
        fileAbsolutePath
      }
    }
  }`)
  result.data?.allMarkdownRemark?.nodes.forEach((node) => {

    if (!node.frontmatter?.slug) {
      console.log(`Skip Created: ${node.fileAbsolutePath}`)
      return;
    }

    console.log(`Created: ${convertToSlug(node.fileAbsolutePath!)}`)

    createPage({
      path: `posts/${convertToSlug(node.fileAbsolutePath!)}`,
      component: `${path.resolve("./src/templates/blog-post.tsx")}?__contentFilePath=${node.fileAbsolutePath}`,
      context: {
        page: {
          title: path.parse(node.fileAbsolutePath!).name,
          frontmatter: node.frontmatter,
          body: node.rawMarkdownBody,
          internal: node.fileAbsolutePath
        }
      }
    })
  });
}

function createObsidianPage(args: CreatePagesArgs) {
  
}

function convertToSlug(text: string) {
  return path.parse(text).name.toLowerCase().replace(/ /g,'-');
}