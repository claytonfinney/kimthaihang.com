import React, { Component } from 'react';
import {Animated} from 'react-animated-css';

import './funPage.css';

class FunPage extends Component {
  render() {
    let {header, text, selected, index, hidden} = this.props;
    return (selected === index) ? (
        <div className="about-text-container">
          <Animated animationIn="fadeInUp" animationInDelay={0}>
          <h3 className="about-title">{"// " + this.props.header}</h3>
          {this.props.text.map((line) =>
            <p className="about-text" key={line.substring(0, 3)}>{line}</p>
          )}
          </Animated>
        </div>
    ) : (
      <div />
    )
  }
}

export default FunPage;
