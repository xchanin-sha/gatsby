import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "gatsby"

const IndexPage = ({ data }) => {

  return (
    <Layout>
      {/* <SEO title="home" /> */}
      <h1>My WordPress Blog</h1>
      <h4>Posts</h4>

      {data.allWpPage.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.slug}>
            <p>{node.title}</p>
          </Link>
          {/* <div dangerouslySetInnerHTML={{ __html: node.content }} /> */}
        </div>
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allWpPage(sort: { fields: [id] }) {
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

export default IndexPage
