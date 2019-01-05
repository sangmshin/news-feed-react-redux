import React, {  Component,  } from 'react';
import '../style.scss';
import TechSingleNews from "./TechSingleNews";
import PropTypes from "prop-types";
import { getTechNews } from '../actions/techNewsAction';
import { connect } from "react-redux";
import { Context } from "../Store";
const { Consumer } = Context;


class Tech extends Component{
  constructor(props){
    super(props)
    this.state = {
     isResizing: false
    }
  }

  onResize =()=> this.setState({ isResizing: true })

  shouldComponentUpdate(nextProps, nextState){
    return this.state.isResizing
    ? false
    : true
  }

  componentDidMount(){
    this.props._getTechNews();
    window.addEventListener('resize', this.onResize)
  }

  render(){
    // console.log('inside TECH.js: ',this.props);
    const { news, isLoading } = this.props.techNews;

     if(!isLoading){
      return (
        <div>
          { news
            ? news.map((singel_news,index)=>
              <TechSingleNews key={singel_news.url} news={singel_news}/>
            )
            : <div>no news found.</div>
          }
        </div>
      )
    }
    return <p>loading news</p>
  }
}


Tech.propTypes = {
  _getTechNews: PropTypes.func.isRequired,
  techNews: PropTypes.object
};

Tech.defaultProps = {
  _getTechNews: e => {},
};

const mapStateToProps = state => state;

const mapActionsToProps = {
  _getTechNews: getTechNews,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Tech);

