import React from 'react'
import "./NewsArticle.css"

function NewsArticle({author,title,description,url,urlToImage,publishedAt}) {
  return (
    <div className='news-article-card'>

    <img src={urlToImage} alt="newsimg"  className='news-article-image'/>
    <h1 className='article-title'> {title} </h1>
    <div className='article-info'>
     <p className='article-author'>{author}</p>
     <p className='article-publishedat'>{publishedAt}</p>
     </div>

     <p className='article-description'> {description}  </p>

     <a href={url} target="_blank" className='btn-readmore'> Read more</a>
    </div>
  )
}

export default NewsArticle