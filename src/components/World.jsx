import React, { Component, } from 'react';
import '../style.scss';
import WorldSingleNews from "./WorldSingleNews";
import PropTypes from "prop-types";
import { Context } from "../Store";
import { getWorldNews } from '../actions/worldNewsAction';
import { connect } from "react-redux";
const { Consumer } = Context;

class World extends Component{
  constructor(props){
    super(props)
    this.state = {
      isResizing: false
    }
  }

  onResize=()=> this.setState({isResizing:true})

  shouldComponentUpdate(nextProps, nextState){
    return this.state.isResizing
    ? false
    : true
  }

  componentDidMount(){
    this.props._getWorldNews();
    window.addEventListener('resize', this.onResize)
  }

  render(){
    // console.log('inside WORLD.JS: ', this.props.worldNews);
    const { news, isLoading } = this.props.worldNews;

     if(!isLoading){
      return (
        <div>
          { news
            ? news.map((singel_news,index)=>
              <WorldSingleNews key={singel_news.url} news={singel_news}/>
            )
            : <div>no news found.</div>
          }
        </div>
      )
    }

    return <p>loading news</p>
  }
  
  static propTypes = {
    _getWorldNews: PropTypes.func.isRequired,
    worldNews: PropTypes.object
  };
}



World.defaultProps = {
  _getWorldNews: e => {},
};

const mapStateToProps = state => state;

const mapActionsToProps = {
  _getWorldNews: getWorldNews,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(World);
