import React, { Component } from 'react';
import {Animated} from 'react-animated-css';
import Typing from 'react-typing-animation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import { faTablets } from '@fortawesome/free-solid-svg-icons';


import './academicsPage.css';
import PCP from '../img/pcp.jpg';

class AcademicsPage extends Component {

  getPortraitStyle() {
    let imgStyle = {
      backgroundImage: `url(${PCP})`,
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
    let {header, text, selected, index, hidden} = this.props;
    let extraText = [
      "Doctor of Pharmacy",
      "B.S. Pharmacologic Studies",
      "American Society of Consultant Pharmacists",
      "APhA-ASP",
      "American College of Apothecaries",
      "Alliance",
      "Presidential Scholarship",
      "Prep Tuition Grant",
      "Pembrolizumab for the Treatment of Melanoma"
    ];
    let subText = [
      "(graduating May 2020)",
      "(conferred May 2018)",
      "(Events Coordinator)",
      "(Member)",
      "(Member)",
      "(Student Government Association Senator)",
      "(2014-2018)",
      "(2014-2020)",
      "(presented to the Philadelphia College of Pharmacy on Feb 22, 2019)"
    ];
    return (selected === index) ? (
      <div className="academics-container">
        <div className="academics-text-container">
          <Animated animationIn="fadeInUp" animationInDelay={0}>
            <h3 className="academics-title">{"" + header}</h3>
            <p className="academics-text"><span className="icon-spacer"><FontAwesomeIcon style={{marginRight: "4%"}}  icon={faGraduationCap} />{extraText[0]}</span><span className="subtext">{subText[0]}</span></p>
            <p className="academics-text"><span className="icon-spacer"><FontAwesomeIcon style={{marginRight: "4%"}}  icon={faGraduationCap} />{extraText[1]}</span><span className="subtext">{subText[1]}</span></p>
          </Animated>
          <Animated animationIn="fadeInUp" animationInDelay={0}>
            <h3 className="academics-title">{"" + "Professional Affiliations"}</h3>
            <p className="academics-text" style={{marginBottom:"-1%"}}><span className="icon-spacer"><FontAwesomeIcon style={{marginRight: "4%"}}  icon={faBriefcase} />{extraText[2]}</span></p>
            <span className="subtext-under">{subText[2]}</span>
            <p className="academics-text" style={{marginTop:"1.5%"}}><span className="icon-spacer"><FontAwesomeIcon style={{marginRight: "4%"}}  icon={faBriefcase} />{extraText[3]}</span><span className="subtext">{subText[3]}</span></p>
            <p className="academics-text"><span className="icon-spacer"><FontAwesomeIcon style={{marginRight: "4%"}}  icon={faBriefcase} />{extraText[4]}</span><span className="subtext">{subText[4]}</span></p>
            <p className="academics-text"><span className="icon-spacer"><FontAwesomeIcon style={{marginRight: "4%"}}  icon={faBriefcase} />{extraText[5]}</span><span className="subtext">{subText[5]}</span></p>
          </Animated>
          <Animated animationIn="fadeInUp" animationInDelay={0}>
            <h3 className="academics-title">{"" + "Honors and Scholarships"}</h3>
          </Animated>
          <Animated animationIn="fadeInUp" animationInDelay={0}>
            <p className="academics-text"><span className="icon-spacer"><FontAwesomeIcon style={{marginRight: "4%"}}  icon={faAward} />{extraText[6]}</span><span className="subtext">{subText[6]}</span></p>
            <p className="academics-text"><span className="icon-spacer"><FontAwesomeIcon style={{marginRight: "4%"}}  icon={faAward} />{extraText[7]}</span><span className="subtext">{subText[7]}</span></p>
          </Animated>
          <Animated animationIn="fadeInUp" animationInDelay={0}>
            <h3 className="academics-title">{"" + "Research"}</h3>
            <p className="academics-text-italics" style={{marginBottom:"-1%"}}><span className="icon-spacer"><FontAwesomeIcon style={{marginRight: "2%"}}  icon={faTablets} />{extraText[8]}</span></p>
            <span className="subtext-under">{subText[8]}</span>
          </Animated>
        </div>
        <div className="academics-image-container">
          <Animated animationIn="fadeInUp" animationInDelay={0}>
            <img className="academics-image" src={PCP} />
          </Animated>
        </div>
      </div>
    ) : (
      <div />
    )
  }
}
export default AcademicsPage;
