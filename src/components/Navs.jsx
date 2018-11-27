import React from 'react';
import {  Navbar, Nav, NavItem,  } from 'react-bootstrap'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import switchTopicAction from "../actions/switchTopicAction";
import $ from 'jquery';


class Navs extends React.Component {
  constructor(props){
    super(props)
    this.state={
      activeKey:'1',
      isDisabled: false
    }
  }
  handleSelect(eventKey, e) {
    e.preventDefault();
    console.log(`selected ${eventKey}`);
    this.setState({activeKey: eventKey})

    eventKey === '1' && window.innerWidth >= 992
    ? this.props.switchTopic(12)
    : eventKey === '1' && window.innerWidth < 992
    ? this.props.switchTopic(1)
    : eventKey === '2' && window.innerWidth >= 992
    ? this.props.switchTopic(12)
    : eventKey === '2' && window.innerWidth < 992
    ? this.props.switchTopic(2)
    : eventKey === '3' && window.innerWidth >= 992
    ? this.props.switchTopic(34)
    : eventKey === '3' && window.innerWidth < 992
    ? this.props.switchTopic(3)
    : eventKey === '4' && window.innerWidth >= 992
    ? this.props.switchTopic(34)
    : eventKey === '4' && window.innerWidth < 992
    && this.props.switchTopic(4)

    $('html, body').animate({ scrollTop: 0 }, 'slow');
    
  }
  
  
  onResize =()=>{
    let {activeKey} = this.state

    window.innerWidth >= 992 && activeKey === '1'
    ? this.props.switchTopic(12)
    : window.innerWidth >= 992 && activeKey === '2'
    ? this.props.switchTopic(12)
    : window.innerWidth >= 992 && activeKey === '3'
    ? this.props.switchTopic(34)
    : window.innerWidth >= 992 && activeKey === '4'
    && this.props.switchTopic(34)

    window.innerWidth >= 992
    ? this.setState({isDisabled:true})
    : this.setState({isDisabled:false})
  }

  componentDidMount(){
    window.addEventListener('resize', this.onResize)
    window.innerWidth >= 992
    ? this.setState({isDisabled:true})
    : this.setState({isDisabled:false})
  }

  render() {

    var {activeKey, isDisabled} = this.state

    return (
      <Navbar id="navbar" inverse collapseOnSelect fixedTop >
        <Navbar.Header>
          <Navbar.Brand>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav pullLeft  bsStyle="tabs" activeKey={activeKey} onSelect={(eventKey, e) => this.handleSelect(eventKey, e)}>
            <NavItem eventKey="1" title="WORLD NEWS">
              WORLD NEWS
            </NavItem>
            <NavItem eventKey="2" title="US NEWS" disabled={isDisabled}>
              US NEWS
            </NavItem>
            <NavItem eventKey="3" title="SPORTS NEWS">
              SPORTS NEWS
            </NavItem>
            <NavItem eventKey="4" title="TECH NEWS" disabled={isDisabled}>
              TECH NEWS
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>


    );
  }
}


Navs.propTypes = {
  switchTopic: PropTypes.func.isRequired,
  display: PropTypes.object.isRequired,
};

Navs.defaultProps = {
  switchTopic: e => {},
};

const mapStateToProps = state => ({display:state.display});

const mapActionsToProps = {
  switchTopic: switchTopicAction,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Navs);