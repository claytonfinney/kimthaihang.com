import React, { Component } from 'react';
import {Animated} from 'react-animated-css';

import './menu.css';

class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      test: 0
    }
    this.menuItemClicked.bind(this);
  }

  menuItemClicked = (e) => {
    this.props.update(e.target.dataset.index, this.props.fpa);
  }

  hoverEnter = () => {

  }

  hoverExit = () => {
    
  }

  render() {
    return (this.props.index === this.props.selected) ? (
      <div className="menu-container">
        {this.props.menuKeys.map(
          (item, i) => (
            item === this.props.menuKeys[this.props.selected] ? (
              <Animated
                key={i}
                animationIn="fadeInLeft" 
                animationInDelay={0}
              >
                <p 
                  className="menu-item-selected"
                  key={this.props.content[item]["menu_title"]}
                  onMouseEnter={this.hoverEnter} 
                  onMouseLeave={this.hoverExit}
                  onClick={this.menuItemClicked}
                  data-index={i}
                ><strong>
                  {this.props.content[item]["menu_title"]}
                 </strong>
                </p>
                <div className="menu-item-underline" />
              </Animated>
            ) : (
              <Animated
                key={i}
                animationIn="fadeInLeft" 
                animationInDelay={1000}
              >
                <p 
                  className="menu-item"
                  key={this.props.content[item]["menu_title"]}
                  onMouseEnter={this.hoverEnter} 
                  onMouseLeave={this.hoverExit}
                  onClick={this.menuItemClicked}
                  data-index={i}
                >
                  {this.props.content[item]["menu_title"]}
                </p>
              </Animated>
            )
          )
        )}
      </div>
    ) : (
      <div />
    )   
  }
}

export default Menu;
