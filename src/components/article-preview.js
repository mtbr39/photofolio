import React from 'react'
import { Link } from 'gatsby'
// import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

import * as styles from './article-preview.module.css'

export default ({ article, articleNumber }) => (
  <div className={styles.preview}>
    <div className={styles.headBlock}>
      <div className={styles.leftItem}>
        <div>
          <small></small>
          <small>{article.camera}</small>
        </div>
      </div>
      <Link to={`/film/${article.slug}`}>
        <div className={styles.imgItem}>
          <div className={styles.imgItemInner}>
            <GatsbyImage
              className=""
              alt=""
              image={article.photos[0].gatsbyImageData}
              style={{ height: '100%', width: '100%' }}
              imgStyle={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </Link>
      <div className={styles.leftItem}>
        <div>
          <div className={styles.imgSideItemSpacer}></div>
          <small>
            {articleNumber}
            <span className={styles.triangleMark}></span>
          </small>
          <small>{article.publishDate}</small>
        </div>
      </div>
    </div>
    {/*     
    <div>
      <Link to={`/film/${article.slug}`}>
        <h3 className={styles.previewTitle}>{article.title}</h3>
      </Link>
    </div> 
    */}
  </div>
)
