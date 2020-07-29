import React, { useEffect, useState } from "react"
import remarkHTML from 'remark-html'
import remark from 'remark'

import SEO from "../components/seo"
import { graphql } from 'gatsby';
import './styles.css'
import DemoForm from "../components/DemoForm";
export const query = graphql`
  query {
    allFile (filter: {sourceInstanceName: {eq: "content"} name: {eq: "home"}}) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              title
              image
              imageAltTag
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
  const [showForm, setShowForm] = useState(false)
  useEffect(() => {
    const script = document.createElement('script');

    script.src = "//js.hs-scripts.com/7077702.js";
    script.async = true;
    script.type = "text/javascript"
    script.id = "hs-script-loader"
    script.defer = true;

    const script2 = document.createElement('script')
    script2.src = "https://js.hsforms.net/forms/v2.js"
    script2.charset = "utf-8"
    script2.type = "text/javascript"

    document.body.appendChild(script);
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(script2);
    }
  }, []);
  return (
    <>
      <div className={'pocContainer'}>
        <SEO title="Home" />
        <img src={data.image} alt={data.imageAltTag} title={data.imageAltTag} className="image" />
        <div className="contentDiv d">
          <p className="bodyParagraph">** This is version 2</p>
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
          <button onClick={() => setShowForm(!showForm)} className="buttonSolid" style={{ width: 300 }}> Contact Us!</button>
        </div>
      </div>
      <div style={{ display: showForm ? 'block' : 'none' }} className="pocContainer">
        <DemoForm />
      </div>
    </>
  )
}

export default IndexPage
