import React, { Component } from 'react';
import {Animated} from 'react-animated-css';

import California from '../img/california.jpg';
import Pennsylvania from '../img/pennsylvania.jpg';
import USA from '../img/usa.jpg';

import './licensesPage.css';

class LicensesPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stateImgs: this.initStates()
    }
  }

  initStates() {
    return {
      "california": {"name": "California", "logo": California, "styleAdjustments": {"img": {marginRight: "2%"}, "spacing": {}}},
      "pennsylvania": {"name": "Pennsylvania", "logo": Pennsylvania, "styleAdjustments": {"img": {marginTop: "5%"}, "spacing": {marginLeft: "-3%", width: "110%"}}},
      "usa": {"name": "United States", "logo": USA, "styleAdjustments": {"img": {maxHeight: "57%", maxWidth: "57%", marginTop: "10%"}, "spacing": {marginLeft: "5%", width: "110%"}}}
    };
  }

  firstLetterUpper(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  determineDelay(index) {
    return index * 400 + 200;
  }

  render() {
    let {header, text, selected, index, hidden} = this.props;
    return (selected === index) ? (
      <div>
        <div className="licenses-content-container">
          {Object.keys(this.props.content.licenses.licenses).map(
            (loc, i) => (
              <Animated animationIn="fadeInUp" animationInDelay={this.determineDelay(i)}>
                <div className="license-state">
                  <img className="license-state-img" src={this.state.stateImgs[loc].logo} style={this.state.stateImgs[loc].styleAdjustments.img} />
                </div>
              </Animated>
            ) 
          )}              
        </div>
        <div className="licenses-content-text-container">
          {Object.keys(this.props.content.licenses.licenses).map(
            (loc, i) => (
              <Animated animationIn="fadeInUp" animationInDelay={this.determineDelay(i)}>
                <div className="license-cell" style={this.state.stateImgs[loc].styleAdjustments.spacing}>
                <div className="license-state">
                  <p className="license-state-name">{this.state.stateImgs[loc].name}</p> 
                  {this.props.content.licenses.licenses[loc].map(
                    (license) => (
                      <div className="single-license">
                        <p className="license-single-license-name">{license.name}</p>
                        <p className="license-single-license-date">{license.date}</p>
                      </div>
                    )
                  )}
                </div>
                </div>
              </Animated>
            ) 
          )}  
        </div>
      </div>
    ) : (
      <div />
    )
  }
}

export default LicensesPage;
