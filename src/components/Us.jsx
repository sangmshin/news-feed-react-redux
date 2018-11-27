import React, {  Component, Fragment,  } from 'react';
import '../style.scss';
import UsSingleNews from "./UsSingleNews";
import { Context } from "../Store";
import PropTypes from "prop-types";
import { getUsNews } from '../actions/usNewsAction';
import { connect } from "react-redux";
const { Consumer } = Context;

class Us extends Component{
  constructor(props){
    super(props)
    this.state = {
     isResizing: false
    }
  }

  onResize=()=> this.setState({ isResizing: true })

  shouldComponentUpdate(nextProps, nextState){
    return this.state.isResizing
    ? false
    : true
  }

  componentDidMount(){
    this.props._getUsNews();
    window.addEventListener('resize', this.onResize)
  }

  render(){
    console.log('inside US.js: ',this.props);
    const { news, isLoading } = this.props.usNews;

     if(!isLoading){
      return (
        <div>
          { news
            ? news.map((singel_news,index)=>
              <UsSingleNews key={singel_news.url} news={singel_news}/>
            )
            : <div>no news found.</div>
          }
        </div>
      )
    }

    return <p>loading news</p>
  }
}


Us.propTypes = {
  _getUsNews: PropTypes.func.isRequired,
  usNews: PropTypes.object
};

Us.defaultProps = {
  _getUsNews: e => {},
};

const mapStateToProps = state => state;

const mapActionsToProps = {
  _getUsNews: getUsNews,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Us);
