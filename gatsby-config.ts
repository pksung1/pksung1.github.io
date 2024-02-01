import type { GatsbyConfig } from "gatsby";
import path from 'path';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `vidilog`,
    siteUrl: `https://pksung1.github.io/`
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss", 
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
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          // "gatsby-remark-obsidian-io",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1200
            }
          },
        ],
      }
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
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "obsidian-content",
        "path": `${__dirname}/obsidian-content`
      },
      __key: "obsidan"
    },
  ]
};

export default config;
