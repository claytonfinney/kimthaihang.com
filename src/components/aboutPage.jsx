import React, { Component } from 'react';
import {Animated} from 'react-animated-css';
import Typing from 'react-typing-animation';

import './aboutPage.css';

class AboutPage extends Component {
  isHidden(index, arr) {
    if (arr[index] === true) {
      return true;
    }
  }
  render() {
    let {header, text, selected, index, hidden} = this.props;
    return (selected === index) ? (
        <div className="about-text-container">
          <Animated animationIn="fadeInUp" animationInDelay={0}> 
            <h3 className="about-title">{"// " + header}</h3>
            {text.map((line) =>
              <p className="about-text" key={line.substring(0, 3)}>{line}</p>
            )}
          </Animated>
        </div>
    ) : (
      <div />
    )   
  }
}

export default AboutPage;
