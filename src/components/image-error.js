import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

function ImageError() {
  return (
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "default.png" }) {
            childImageSharp {
              fluid(maxWidth: 400, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <Img fluid={data.file.childImageSharp.fluid} />
      )}
    />
  )
}

export default ImageError