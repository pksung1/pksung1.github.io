import React from 'react'

import { graphql } from "gatsby"
import Layout from '../components/layout'

const Category = ({location, data}) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout location={location} title={siteTitle}>
      <div className='flex items-center justify-center'>
        <h1>준비중</h1>
      </div>
    </Layout>
  )
}

export default Category;


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`