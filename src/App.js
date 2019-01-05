import React, { Suspense, lazy, Component, } from 'react';
// import { BrowserRouter as Router, Route, Link, Switch, Redirect, Prompt, withRouter } from 'react-router-dom';
import {  Grid, Row, Col  } from 'react-bootstrap'
import Navs from './components/Navs';
import './style.scss';
import { Store } from "./Store";
// import { css } from 'react-emotion';
import { ClipLoader, DotLoader } from 'react-spinners';
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import ClipLoader from 'react-spinners/ClipLoader';
// import $ from 'jquery';
const WorldLazy = lazy(() => import('./components/World'));
const UsLazy = lazy(() => import('./components/Us'));
const SportsLazy = lazy(() => import('./components/Sports'));
const TechLazy = lazy(() => import('./components/Tech'));


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loading:true
    }
  }

  render() {

    let {isWorldVisible, isUsVisible, isSportsVisible, isTechVisible} = this.props.display
    
    return (
      <Store>
        <Grid fluid>
          <Row>
            <Col xs={12} sm={12} md={12} lgHidden={true}>
              <Navs/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} xsHidden={!isWorldVisible} sm={12} smHidden={!isWorldVisible} md={6} mdHidden={!isWorldVisible} lg={4} className='topic'>
                  <h2 className="category-title">WORLD NEWS</h2>
                  <Suspense fallback={
                    <ClipLoader
                      className='override'
                      sizeUnit={"px"}
                      size={30}
                      color={'#123abc'}
                      loading={this.state.loading}
                    />
                  }>
                    <WorldLazy/>
                  </Suspense>
            </Col>
                
                <Col xs={12} xsHidden={!isUsVisible} sm={12} smHidden={!isUsVisible} md={6} mdHidden={!isUsVisible} lg={4} className='topic'>
                  <h2 className="category-title">US NEWS</h2>
                  <Suspense fallback={
                    <ClipLoader
                      className='override'
                      sizeUnit={"px"}
                      size={30}
                      color={'#123abc'}
                      loading={this.state.loading}
                    />
                  }>
                    <UsLazy/>
                  </Suspense>              
                </Col>
                <Col xs={12} xsHidden={!isSportsVisible} sm={12} smHidden={!isSportsVisible} md={6} mdHidden={!isSportsVisible} lg={2} className='topic'>
                  <h2 className="category-title">SPORTS NEWS</h2>
                  <Suspense fallback={
                    <ClipLoader
                      className='override'
                      sizeUnit={"px"}
                      size={30}
                      color={'#123abc'}
                      loading={this.state.loading}
                    />
                  }>
                    <SportsLazy/>
                  </Suspense>              
                </Col>

                <Col xs={12} xsHidden={!isTechVisible} sm={12} smHidden={!isTechVisible} md={6} mdHidden={!isTechVisible} lg={2} className='topic' id='tech'>
                  <h2 className="category-title">TECH NEWS</h2>
                  <Suspense fallback={
                    <ClipLoader
                      className='override'
                      sizeUnit={"px"}
                      size={30}
                      color={'#123abc'}
                      loading={this.state.loading}
                    />
                  }>
                    <TechLazy/>
                  </Suspense>              
                </Col>
          </Row>
        </Grid>
      </Store>
    );
  }

  static propTypes = {
    display: PropTypes.object,
  };
}


const mapStateToProps = state => ({display:state.display})

const mapActionsToProps = {
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);
