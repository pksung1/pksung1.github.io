import React from 'react'

import { graphql, Link } from "gatsby"
import Layout from '../components/layout'
import Post from '../components/Post'
import classNames from 'classnames'

const Archives = ({location, data}) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes;

  const viewerClass = 'w-full flex flex-col items-center justify-center'

  return (
    <Layout location={location} title={siteTitle}>
      <div className='w-10/12 m-auto pt-12 pb-12'>
        <div>
          <h1 className='text-3xl pb-4 dark:text-white'>Blog Archives</h1>
        </div>
        <ul className={viewerClass}>
          {posts.map(post => (
            <Link to={`../posts${post.fields.slug}`} itemProp="url" className="w-full" key={post.fields.slug}>
              <Post
                title={post.frontmatter.title}
                description={post.frontmatter.description}
                date={post.frontmatter.date}
                key={post.fields.slug}
                tags={post.frontmatter.tags}
                className="mb-4"
              />
            </Link>
          ))}  
        </ul>
      </div>
    </Layout>
  )
}


export default Archives;


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
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
          tags
        }
      }
    }
  }
`