import React, { Component } from 'react';
import { Animated } from 'react-animated-css';

import CVS from '../img/cvs3.jpg';
import IBX from '../img/ibx2.jpg';
import Penn from '../img/penn4.jpg';
import Ritner from '../img/ritner3.jpg';
import Mercy from '../img/mercy3.jpg';
import Walgreens from '../img/walgreens2.jpg';
import BackArrow from '../img/backarrow.png';

import './appePage.scss';

class AppePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hoverIndex: -1,
      logos: this.initLogos(),
      currentLogo: null,
      currentAppe: null,
      currentAppeIndex: -1
    };

    this.onClick = this.onClick.bind(this);
  }

  initLogos() {
    return [
        {"name": "cvs", "logo": CVS, "styleAdjustments": {"img": {}, "spacing": {}}},
        {"name":"ibx", "logo": IBX, "styleAdjustments": {"img": {marginTop: "5%", marginBottom: "-1%"}, "spacing": {marginBottom: "3%"}}},
        {"name":"penn", "logo": Penn, "styleAdjustments": {"img": {marginTop: "5%"}, "spacing": {marginBottom: "3%"}}},
        {"name":"ritner", "logo": Ritner, "styleAdjustments": {"img": {marginBottom: "-3%"}, "spacing": {marginBottom: "3%"}}},
        {"name":"mercy", "logo": Mercy, "styleAdjustments": {"img": {marginTop: "5%", marginBottom: "-8%"}, "spacing": {marginBottom: "4%"}}},
        {"name":"walgreens", "logo": Walgreens, "styleAdjustments": {"img": {}, "spacing": {}}}
    ];
  }

  determineDelay(index, offset) {
    if (index === 0) {
      return 0;
    }
    return index * offset;
  }

  onMouseEnter(e) {
    this.setState({hoverIndex: e.target.dataset.index});
  }

  onMouseLeave(e) {
    this.setState({hoverIndex: e.target.dataset.index});
  }

  onClick = (e) => {  
    this.setState({
      currentLogo: this.state.logos[e.target.dataset.index].logo,
      currentAppe: this.props.content.appeExperience.jobs[e.target.dataset.jobname],
      currentAppeIndex: e.target.dataset.index
    });
  }

  exitSingleView(e) {
    this.setState({currentLogo: null})
  }

  render() {
    let {header, text, selected, index, hidden, content} = this.props;
    if (selected === index) {
      if (this.state.currentLogo === null) {
        return ( 
          <div className="appe-text-container">
            <Animated animationIn="fadeIn" animationInDelay={2000} style={{zIndex: 100}}>
              <div className="click-to-expand-container">
                <p className="click-to-expand-text">(Click to expand!)</p>
              </div>
            </Animated>
            <div className="appe-grid">
              {this.state.logos.map(
                (company, i) => (
                  <Animated key={i} animationIn="fadeInUp" animationInDelay={this.determineDelay(i, 200)}>
                    <img 
                      src={company.logo} 
                      className="appe-logo" 
                      onMouseEnter={this.onMouseEnter.bind(this)}
                      onMouseLeave={this.onMouseLeave.bind(this)}
                      onClick={this.onClick.bind(this)}
                      style={{transform: `${this.state.hoverIndex === i ? 'scale(1.5,1.5)' : null}`}}
                      data-index={i}
                      data-jobname={company.name}
                    />
                  </Animated>
                )
              )}
            </div>
          </div>
        )
      } else {
        return ( 
          <div className="appe-single-container">
            <div className="appe-single-img-container">
              <Animated animationIn="fadeInUp" animationInDelay={0}>
                <img className="appe-single-img" src={this.state.currentLogo} style={this.state.logos[this.state.currentAppeIndex].styleAdjustments.img} />
              </Animated>
            </div>
            <div className="appe-single-title-container">
              <Animated animationIn="fadeInUp" animationInDelay={200}>
                <p className="appe-single-company">{this.state.currentAppe.name} - {this.state.currentAppe.position}</p>
                <p className="appe-single-dates">{this.state.currentAppe.date}</p>
                <p className="appe-single-location" style={this.state.logos[this.state.currentAppeIndex].styleAdjustments.spacing}>{this.state.currentAppe.location}</p>
              </Animated>
            </div>
            <div className="appe-single-descriptions">
              {this.state.currentAppe.text.map(
                (description, i) => (
                  <Animated animationIn="fadeInUp" animationInDelay={this.determineDelay(i + 2, 400)}>
                    <p className="appe-single-description">{description}</p>
                  </Animated>
                )
              )}
            </div>
            <div className="appe-single-logo-slider">
              <Animated animationIn="fadeInUp" animationInDelay={1500}>
                {this.state.logos.map(
                  (company, i) => (
                    <img 
                      className="appe-single-slider-img" 
                      src={company.logo} 
                      onClick={this.onClick.bind(this)}
                      data-index={i} 
                      data-jobname={company.name}
                    />
                  )
                )}
              </Animated>
            </div>
            <div className="backarrow-container">
              <Animated animationIn="fadeInUp" animationInDelay={1500}>
                <img className="backarrow" src={BackArrow} onClick={this.exitSingleView.bind(this)}/>
              </Animated>
            </div>
          </div>
        )
      } 
    } else {
      return <div />
    } 
  }
}

export default AppePage;
