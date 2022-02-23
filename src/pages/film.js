import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import styles from './film.module.css'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

class FilmIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <Layout location={this.props.location}>
        <div>
          <Helmet title={siteTitle} />
          {/* <div className={styles.hero}>Blog</div> */}
          <div className="wrapper">
            {/* <h2 className="section-headline">Recent articles</h2> */}
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default FilmIndex

export const pageQuery = graphql`
  query FilmIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "YYYY MMMM")
          tags
          heroImage {
            fluid(maxWidth: 1440, resizingBehavior: PAD) {
              ...GatsbyContentfulFluid_tracedSVG
            }
            # gatsbyImageData(layout: FULL_WIDTH)
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`