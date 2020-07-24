import React from "react"
import remarkHTML from 'remark-html'
import remark from 'remark'

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
        }
      }
    }
  }
}`

const toHTML = value => remark()
  .use(remarkHTML)
  .processSync(value)
  .toString()

const IndexPage = (props) => {
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter

  return (
    <div className={'pocContainer'}>
      <SEO title="Home" />
      <img src={data.image} alt={data.imageAltTag} className="image" />
      <div className="contentDiv d">
        <h1 className="title">{data.title}</h1>

        <div className="bodyParagraph"
          dangerouslySetInnerHTML={{ __html: toHTML(data.intro) }}
        />
        <div className="buttonsDiv">
          <a className="buttonOutline" href={data.outlinedButtonLink}>
            {data.outlinedButtonText}
          </a>
          <a className="buttonSolid" href={data.outlinedButtonLink}>
            {data.solidButtonText}
          </a>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
