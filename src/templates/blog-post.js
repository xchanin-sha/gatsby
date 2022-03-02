import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const post = ({ data }) => {
  const post = data.allWpPage.edges[0].node
  console.log('BLOG POST', post);
  return (
    <Layout>
      <div>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </Layout>
  )
}

export default post;

export const query = graphql`
  query($slug: String!) {
    allWpPage(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          id
          title
          content
          slug
        }
      }
    }
  }
  `