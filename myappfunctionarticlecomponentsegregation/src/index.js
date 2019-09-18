import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

var article = {
    "source": {
        "id": "cnbc",
        "name": "CNBC"
    },
    "author": "Jasmine Wu",
    "title": "RH is looking into a $300 million notes offering to pay down debt - CNBC",
    "description": "RH, previously known as Restoration Hardware, is considering a $300 million notes offering.",
    "url": "https://www.cnbc.com/2019/09/12/rh-is-looking-into-a-300-million-notes-offering-to-pay-down-debt.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/105470271-1537891118700gettyimages-645009566.jpg?v=1554240072",
    "publishedAt": "2019-09-12T15:09:18Z",
    "content": "RH, formerly known as Restoration Hardware, announced Thursday it is considering a $300 million convertible notes offering due in 2024.\r\nThe proceeds from the offering would be used primarily to retire the company's $200 million of second lien debt and reduce… [+1737 chars]"
};

function ArticleImage(props) {
    return (
        <div>
            <img src={props.url} className="article-image" />
            <span>source: {props.source}</span>
        </div>
    )
}

function ArticleHeader(props) {
    return (
        <div>
            <h1>{props.header.title}</h1>

            <p><strong>Author:</strong> {props.header.author}, <strong>Published: </strong> {props.header.publishedAt} </p>
        </div>
    );
}

function ArticleContent(props) {
    return (
        <p className="article-content">
            {props.content}
        </p>
    );
}

function ArticleElement(props) {
    return (
        <article className="article">

            <ArticleHeader header={
                {
                    title: props.articleDetail.title,
                    author: props.articleDetail.author,
                    publishedAt: props.articleDetail.publishedAt
                }
            } />
           
            <ArticleImage
                url={props.articleDetail.urlToImage}
                source={props.articleDetail.source.name} />

            <ArticleContent content={props.articleDetail.content}/>

        </article>
    )
}


const element = (
    <div className="article-container">
        <ArticleElement articleDetail={article} />
    </div>
);

ReactDOM.render(element, document.getElementById('root'));
