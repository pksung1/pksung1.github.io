import * as React from "react"
import { Link, graphql, navigate } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import MainCanvas from "../components/MainCanvas"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }


  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <MainCanvas />
      <div className="-mt-8 z-10 relative lg:px-20">
        <div className="border bg-white dark:bg-gray-900  mx-auto rounded-t-3xl p-8 max-h dark:text-white">
          <h2 className="text-2xl pb-4">Recent Posts</h2>
          <ol className="lg:grid grid-rows-3 grid-cols-2 gap-2">
            {posts.slice(0, 6).map(post => {
              const title = post.frontmatter.title || post.fields.slug

              return (
                <li key={post.fields.slug} onClick={() => navigate(`posts${post.fields.slug}`)} className="p-4 transition-shadow border-gray-100 border rounded shadow-sm hover:shadow-lg cursor-pointer">
                  <article
                    className="post-list-item "
                    itemScope
                    itemType="http://schema.org/Article"
                  >
                    <header>
                      <h2 className="text-lg">
                        <Link to={`posts${post.fields.slug}`} itemProp="url">
                          <span itemProp="headline">{title}</span>
                        </Link>
                      </h2>
                      <small>{post.frontmatter.date}</small>
                    </header>
                    <section>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: post.frontmatter.description || post.excerpt,
                        }}
                        itemProp="description"
                        className="text-sm"
                      />
                    </section>
                  </article>
                </li>
              )
            })}
          </ol>
          <Bio />
        </div>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
      filter: {fileAbsolutePath: {regex: "/\/blog\//"}}
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
