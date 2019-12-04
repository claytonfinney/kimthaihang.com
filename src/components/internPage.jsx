import React, { Component } from 'react';
import { Animated } from 'react-animated-css';

import MedicineShoppe from '../img/medicineshoppe.jpg';
import HealthRX from '../img/specialtypharmacy.jpg';
import Florence from '../img/florence.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTablets } from '@fortawesome/free-solid-svg-icons';

import './internPage.scss';

class InternPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      logos: this.initLogos()
    };
  }

  initLogos() {
    return [
      {"icon": HealthRX, "style": {marginTop: "-3%", marginBottom: "3%"}},
      {"icon": MedicineShoppe, "style": {}},
      {"icon": Florence, "style": {}},
    ];
  }

  determineDelay(index) {
    return index * 400 + 200;
  }

  render() {
    let {header, text, selected, index, hidden, content} = this.props;
    let jobs = [...content.internExperience.jobs];
    return (selected === index) ? (
      <div className="intern-text-container">
        <div className="intern-flex">
          {jobs.map(
            (job, i) => (
              <div className="intern-flex-item"> 
                <Animated animationIn="fadeInUp" animationInDelay={this.determineDelay(i)}>
                  <div className="intern-item-img-container">
                    <img className="intern-item-img" src={this.state.logos[i].icon} style={this.state.logos[i].style} />
                  </div>
                  <h4 className="intern-item-title">{job.name}</h4>
                  <p className="intern-item-duration">{job.date}</p>
                  <p className="intern-item-location">{job.location}</p>
                  <div className="intern-item-description-container">
                    {job.text.map(
                      (line) => (

                        <p className="intern-item-description-line"><span className="icon-spacer"><FontAwesomeIcon style={{marginRight: "4%"}} icon={faTablets}/></span>{line}</p>
                      )
                    )}
                  </div>
                </Animated>
              </div> 
            ) 
          )}
        </div>
      </div>
    ) : (
      <div />
    )
  }
}

export default InternPage;
