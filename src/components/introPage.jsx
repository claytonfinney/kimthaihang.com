import React, { Component } from 'react';
import {Animated} from 'react-animated-css';
import Typing from 'react-typing-animation';

import './introPage.css';
import portrait from '../img/kim-portrait.png';
class IntroPage extends Component {

  getPortraitStyle() {
    let imgStyle = {
      backgroundImage: `url(${portrait})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
    return imgStyle;
  }

  isHidden(index, arr) {
    if (arr[index] === true) {
      return true;
    }
  }

  render() {
    let {header, text, selected, index, hidden, content, fpa} = this.props;
    return (selected === index) ? (
      <div className="intro-container">
        <div className="intro-text-container">
          <Typing speed={120} startDelay={500}>
            <h3 className="intro-title">{"// " + header}</h3>
          </Typing>
          <Animated animationIn="fadeInUp" animationInDelay={1000}>
            {text.map((line) =>
              <p className="intro-text" key={line.substring(0, 3)}>{"// " + line}</p>
            )}
            <p className="intro-text">// As a shortcut, here's my <a href={content.intro.linkedinLink} target="_blank">LinkedIn</a> and my <a href={content.intro.resumeLink} target="_blank">normal resume.</a></p>
          </Animated>
        </div>
        <div className="intro-image-container">
          <Animated animationIn="fadeInUp" animationInDelay={1000}>
            <img className="intro-image" src={portrait} />
          </Animated>
        </div>
      </div>
    ) : (
      <div />
    )
  }
}

export default IntroPage;
