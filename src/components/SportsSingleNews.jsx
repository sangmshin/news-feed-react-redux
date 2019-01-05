import React, { memo } from 'react';
import '../style.scss'
import ReactHtmlParser from 'react-html-parser';
import {  Thumbnail } from 'react-bootstrap'
import pubdateService from "./pubdateService";


const SportsSingleNews = memo((props) => {

  console.log('rendering');
  
  const { news } = props

  var pubdate = new pubdateService()

  return (
    <>
      {
        !news.urlToImage
        ? null
        : <Thumbnail className="header-img" src={news.urlToImage} width="100%" alt={news.title} href={news.url} target="_blank" rel="noopener noreferrer"></Thumbnail>
      }
      
      <h2 className="title-small">
        <a href={news.url} target="_blank" rel="noopener noreferrer">{ReactHtmlParser(news.title)}</a>
      </h2>
      {
        !news.description
        ? <p className="read-article"><a href={news.url} target="_blank" rel="noopener noreferrer">Read Article ⇨</a></p>
        : <p>{news.description}</p>
      }
      {
        news.publishedAt
        && <p className='pubdate'><i>Published at: {pubdate.onlyDate(news.publishedAt)}</i></p>
      }
      
      <hr/>
    </>
  )
})


export default SportsSingleNews;
