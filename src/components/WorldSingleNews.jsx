import React, {  Component,  } from 'react';
import '../style.scss'
import ReactHtmlParser from 'react-html-parser';
import { Thumbnail } from 'react-bootstrap'
import pubdateService from "./pubdateService";



class WorldSingleNews extends Component{
  constructor(props){
    super(props)
    this.state = {}

    this.pubdate = new pubdateService()
  }

  render(){
    const { news } = this.props
    
    return (
        <>
          {
            news.urlToImage && 
            <Thumbnail className="header-img" src={news.urlToImage} width="100%" alt={news.title} href={news.url} target="_blank" rel="noopener noreferrer"></Thumbnail>
          }
          <h2 className="title-large">
            <a href={news.url} target="_blank" rel="noopener noreferrer">{ReactHtmlParser(news.title)}</a>
          </h2>
          {
            !news.description
            ? <p>{news.content}</p>
            : !news.content
            ? <p className="read-article"><a href={news.url} target="_blank" rel="noopener noreferrer">Read Article ⇨</a></p>
            : <p>{news.description}</p>
          }
          {
            news.publishedAt
            && <p className='pubdate'><i>Published at: {this.pubdate.onlyDate(news.publishedAt)}</i></p>
          }
          <hr/>
        </>
    )
  }
}

export default WorldSingleNews;
