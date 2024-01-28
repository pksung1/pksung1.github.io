import type { GatsbyConfig } from "gatsby";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkExternalLinks from "remark-external-links";
import remarkGfm from "remark-gfm";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `vidilog`,
    siteUrl: `https://pksung1.github.io/`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss", 
    "gatsby-transformer-remark", 
    "gatsby-plugin-svgr",
    {
      resolve: "gatsby-plugin-alias-imports",
      options: {
        alias: {
          "@components": "src/components",
          "src": "src",
        },
        extensions: [
          "ts", "tsx"
        ]
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "content",
        "path": `${__dirname}/content`
      },
      __key: "content"
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        mdxOptions: {
          remarkPlugins: [
            // Add GitHub Flavored Markdown (GFM) support
            remarkGfm,
            // To pass options, use a 2-element array with the
            // configuration in an object in the second element
            [remarkExternalLinks, { target: false }],
          ],
          rehypePlugins: [
            // Generate heading ids for rehype-autolink-headings
            rehypeSlug,
            // To pass options, use a 2-element array with the
            // configuration in an object in the second element
            [rehypeAutolinkHeadings, { behavior: `wrap` }],
          ],
        }
      }
    },
  ]
};

export default config;
