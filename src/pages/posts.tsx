import PageLayout from "@app/layouts/PageLayout";
import React from "react";
import Text from "@app/components/Text";
import { filename } from "@app/utils/format";
import { Link, graphql } from "gatsby";

const Posts = ({ data, pageContext, ...props }: {data: Queries.PostsQuery, pageContext: { page: Post } }) => {

  return (
    <PageLayout>
      <Text className="text-xl font-bold">Post List</Text>
      <ul>
        {data.allMarkdownRemark.edges.map(({ node }) => {
        return(
          <li key={node.fileAbsolutePath}>
            <Link to={node.frontmatter?.slug!}>
              <Text>{filename(node.fileAbsolutePath!)}</Text>
            </Link>
          </li>
        )})}
      </ul>
    </PageLayout>
  )
};

export default Posts

export const query = graphql`
  query Posts {
    allMarkdownRemark(sort: {
      frontmatter:{
        publishAt: ASC
      }
    }) {
      edges{
        node {
          frontmatter {
            title
            slug
            publishAt
          }
          fileAbsolutePath
        }
      }
    }
  }

`