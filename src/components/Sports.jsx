import React, {  Component, Fragment,  } from 'react';
import '../style.scss';
import SportsSingleNews from "./SportsSingleNews";
import { Context } from "../Store";
import PropTypes from "prop-types";
import { getSportsNews } from '../actions/sportsNewsAction';
import { connect } from "react-redux";
const { Consumer } = Context;

class Sports extends Component{
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
    this.props._getSportsNews();
    window.addEventListener('resize', this.onResize)
  }

  render(){
    console.log('inside SPORTS.js: ',this.props);
    const { news, isLoading } = this.props.sportsNews;

     if(!isLoading){
      return (
        <div>
          { news
            ? news.map((singel_news,index)=>
              <SportsSingleNews key={singel_news.url} news={singel_news}/>
            )
            : <div>no news found.</div>
          }
        </div>
      )
    }
    return <p>loading news</p>
  }

}


Sports.propTypes = {
  _getSportsNews: PropTypes.func.isRequired,
  sportsNews: PropTypes.object
};

Sports.defaultProps = {
  _getSportsNews: e => {},
};

const mapStateToProps = state => state;

const mapActionsToProps = {
  _getSportsNews: getSportsNews,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Sports);
