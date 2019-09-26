import React from 'react'
import './article.css'

function ArticleElement(props) {
  console.log(props);
  return (
    <div className='article'>
      <div className='article-header'>
        <h2>{props.article.title}</h2>
        <p>
          <span>
            Author: <strong>{props.article.author}</strong>
          </span>
          <span>
            Source: <strong>{props.article.source.name}</strong>
          </span>
        </p>
      </div>
      <div className='article-content'>
        <p>
          {props.article.description}
        </p>
        <p>
          <a href={props.article.url}>Click here to know more about this</a>
        </p>
      </div>
    </div>
  )
}

export default ArticleElement