import PageLayout from "@app/layouts/PageLayout";
import React from "react";
import Text from "@app/components/Text";
import { filename } from "@app/utils/format";
import { graphql } from "gatsby";

const Posts = ({ data }: {data: Queries.PostsQuery }) => {

  console.log(data);
  return (
    <PageLayout>
      <Text className="text-xl font-bold">Post List</Text>
      <ul>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <li>
            <Text>{filename(node.fileAbsolutePath!)}</Text>
          </li>
        ))}
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
    }, limit: 3) {
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