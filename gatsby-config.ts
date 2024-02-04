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
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-plugin-alias-imports",
      options: {
        alias: {
          "@components": "src-app/components",
          "src": "src",
          "@app": "src-app"
        },
        extensions: [
          "ts", "tsx", "js"
        ]
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        gfm: true
        // gatsbyRemarkPlugins: [
        //   // "gatsby-remark-obsidian-io",
        //   {
        //     resolve: "gatsby-remark-images",
        //     options: {
        //       maxWidth: 1200
        //     }
        //   },
        // ],
        // mdxOptions: {
        //   remarkPlugins: [
        //     // Add GitHub Flavored Markdown (GFM) support
        //     // remarkGfm,
        //     // // To pass options, use a 2-element array with the
        //     // // configuration in an object in the second element
        //     // [remarkExternalLinks, { target: false }],
        //   ],
        //   rehypePlugins: [
        //     // // Generate heading ids for rehype-autolink-headings
        //     // rehypeSlug,
        //     // // To pass options, use a 2-element array with the
        //     // // configuration in an object in the second element
        //     // [rehypeAutolinkHeadings, { behavior: `wrap` }],
        //   ],
        // },
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/",
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
      __key: "pages"
    }, 
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     "name": "content",
    //     "path": `${__dirname}/content`
    //   },
    //   __key: "content"
    // }, 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "obsidian-content",
        "path": `${__dirname}/obsidian-content`
      },
      __key: "obsidan"
    },
    "gatsby-plugin-postcss", 
    "gatsby-plugin-svgr",
  ]
};

export default config;
