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
              image
              intro
              outlinedButtonText
              outlinedButtonLink
              solidButtonText
              solidButtonLink
          } 
          html
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
        <div
          className="bodyParagraph"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <div className="bodyParagraph">{data.intro}</div>
        <div className="buttonsDiv">
          <a className="buttonOutline" href={data.outlinedButtonLink}>
            {data.outlinedButtonText}
          </a>
          <a className="buttonSolid" href={data.outlinedButtonLink}>
            {data.outlinedButtonText}
          </a>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
