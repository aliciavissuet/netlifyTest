import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby';
import './styles.css'
export const query = graphql`
  query {
    allFile (filter: {sourceInstanceName: {eq: "content"} name: {eq: "home"}}) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              title
              intro
              image
              outlinedButtonText
              outlinedButtonLink
              solidButtonText
              solidButtonLink
          }
        }
      }
    }
  }
}`

const IndexPage = (props) => {
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  return (
    <div className={'pocContainer'}>
      <SEO title="Home" />
      <img src={data.image} alt={data.imageAltTag} className="image" />
      <div className="contentDiv d">
        <h1 className="title">{data.title}</h1>
        <p className="bodyParagraph">{data.intro}</p>
        <div className="buttonsDiv">
          <a className="buttonOutline" to={data.outlinedButtonLink}>
            {data.outlinedButtonText}
          </a>
          <a className="buttonSolid" to={data.outlinedButtonLink}>
            {data.outlinedButtonText}
          </a>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
