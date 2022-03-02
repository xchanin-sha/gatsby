const path = require("path")

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
// exports.createPages = async ({ actions, graphql }) => {
 
//   const { createPage } = actions

//   const result = await graphql(`
//     {
//       allWpPage(sort: {fields: [id]}) {
//         edges {
//           node {
//             id
//             title
//             content
//             slug
//           }
//         }
//       }
//     }`
//     )
//     .then(
//       result => 
//     {
      
//       result.data.allWpPage.edges.forEach(({ node }) => {
//         createPage(
//         {
//           // Decide URL structure
//           path: node.slug,
//           // path to template
//           component: path.resolve(`./src/templates/blog-post.js`),
//           context: {
//             // This is the $slug variable
//             // passed to blog-post.js
//             slug: node.slug,
//           }
//         })
//       })
//     }, 
//     error => {
//       console.error('Error while running GraphQL query', error)
//     }
//   )
// }
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
    
    const result = await graphql(`
      query {
        allWpPage {
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
    `)
    result.data.allWpPage.edges.forEach(edge => {
      createPage({
        path: `${edge.node.slug}`,
        component: blogPostTemplate,
        context: {
            slug: edge.node.slug,
        },
      })
    })
  }