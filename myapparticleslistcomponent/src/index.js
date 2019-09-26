import React from 'react'
import ReactDOM from 'react-dom'

import DATA from './files/articles'
import ArticleElement from './components/article/article-element'


var articleComponents = DATA.articles.map((articleItem) => <ArticleElement article={articleItem}/>);

var element = <div>
  {
    articleComponents
  }
</div>

ReactDOM.render(element, document.getElementById('root'));