import React, { Component } from 'react';

import {content} from '../content.js'
import Menu from './menu';
import IntroPage from './introPage';
import AboutPage from './aboutPage';
import AppePage from './appePage';
import InternPage from './internPage';
import LicensesPage from './licensesPage';
import AcademicsPage from './academicsPage';
import FunPage from './funPage';
import ContactPage from './contactPage';

import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from "@fullpage/react-fullpage";

class Fullpage extends Component {

  constructor(props) {
    super(props);
    let ks = Object.keys(content);
    let anchors = this.initAnchors(ks);
    this.state = {
      anchors: anchors,
      menuKeys: ks,
      selected: 0,
      toHide: this.initHidden(ks.length)
    }
    this.updateMenu.bind(this);
  }

  initAnchors(arr) {
    let ret = [];
    for (let i = 0; i < arr.length; i++) {
      let n = arr[i].replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
      ret.push(n);
    }
    return ret;
  }

  initHidden(numKeys) {
    let hidden = [];
    hidden.push(false);
    for (let i = 1; i < numKeys; i++) {
      hidden.push(true);
    }
    return hidden;
  }

  menuItemClicked(e) {
    console.log(e); 
  }

  updateHidden(selected) {
    let newHidden = [];
    for (let i = 0; i < this.state.anchors.length; i++) {
      if (i === selected) {
        newHidden.push(false);
      } else {
        newHidden.push(true);
      }
    }
    return newHidden;
  }

  afterLoad(origin, destination, direction) {
    let selected = destination.index;
    let newAnchor = this.state.anchors[selected];
    this.setState({selected: selected, currentAnchor: newAnchor})
    setTimeout(function() {
      this.setState({toHide: this.updateHidden(selected)})
    }.bind(this), 200);
  }

  updateMenu = (selected, fpa) => {
    let newAnchor = this.state.anchors[selected];
    this.setState({selected: selected, currentAnchor: newAnchor})
    setTimeout(function() {
      this.setState({toHide: this.updateHidden(selected)})
    }.bind(this), 200);
    fpa.moveTo(newAnchor, 0);
  }

  render() {
    return (
      <div className="app"> 
        <ReactFullpage
          anchors={this.state.anchors}
          scrollOverflow={true}
          sectionsColor={["white", "white", "white"]}
          afterLoad={this.afterLoad.bind(this)}
          render={({ state, fullpageApi }) => {
            return (
              <div>
                <div className="section">
                  <Menu 
                    index={0}
                    selected={this.state.selected}
                    hidden={this.state.toHide}
                    menuKeys={this.state.menuKeys}
                    content={content}
                    update={this.updateMenu}
                    fpa={fullpageApi}
                  />
                  <IntroPage 
                    header={content.intro.title} 
                    text={content.intro.text} 
                    selected={this.state.selected} 
                    index={0}
                    hidden={this.state.toHide}
                    content={content}
                    fpa={fullpageApi}
                  />
                </div>
                <div className="section">
                  <Menu 
                    index={1}
                    selected={this.state.selected}
                    hidden={this.state.toHide}
                    menuKeys={this.state.menuKeys}
                    content={content}
                    update={this.updateMenu}
                    fpa={fullpageApi}
                  />
                  <AboutPage 
                    header={content.about.title}
                    text={content.about.text}
                    selected={this.state.selected}
                    index={1}
                    hidden={this.state.toHide}
                  />
                </div>
                <div className="section">
                  <Menu 
                    index={2}
                    selected={this.state.selected}
                    hidden={this.state.toHide}
                    menuKeys={this.state.menuKeys}
                    content={content}
                    update={this.updateMenu}
                    fpa={fullpageApi}
                  />
                  <AppePage
                    header={content.appeExperience.title}
                    text={content.appeExperience.text}
                    selected={this.state.selected}
                    index={2}
                    hidden={this.state.toHide}
                    content={content}
                  />
                </div>
                <div className="section">
                  <Menu 
                    index={3}
                    selected={this.state.selected}
                    hidden={this.state.toHide}
                    menuKeys={this.state.menuKeys}
                    content={content}
                    update={this.updateMenu}
                    fpa={fullpageApi}
                  />
                  <AcademicsPage
                    header={content.academics.title}
                    text={content.academics.text}
                    selected={this.state.selected}
                    index={3}
                    hidden={this.state.toHide}
                  /> 
                </div>
                <div className="section">
                  <Menu 
                    index={4}
                    selected={this.state.selected}
                    hidden={this.state.toHide}
                    menuKeys={this.state.menuKeys}
                    content={content}
                    update={this.updateMenu}
                    fpa={fullpageApi}
                  />
                  <InternPage
                    header={content.internExperience.title}
                    text={content.internExperience.text}
                    selected={this.state.selected}
                    index={4}
                    hidden={this.state.toHide}
                    content={content}
                  /> 
                </div>
                <div className="section">
                  <Menu 
                    index={5}
                    selected={this.state.selected}
                    hidden={this.state.toHide}
                    menuKeys={this.state.menuKeys}
                    content={content}
                    update={this.updateMenu}
                    fpa={fullpageApi}
                  />
                  <LicensesPage
                    header={content.licenses.title}
                    text={content.licenses.text}
                    selected={this.state.selected} 
                    index={5}
                    hidden={this.state.toHide}
                    content={content}
                  /> 
                </div>
                <div className="section">
                  <Menu 
                    index={6}
                    selected={this.state.selected}
                    hidden={this.state.toHide}
                    menuKeys={this.state.menuKeys}
                    content={content}
                    update={this.updateMenu}
                    fpa={fullpageApi}
                  />
                  <FunPage
                    header={content.fun.title}
                    text={content.fun.text}
                    selected={this.state.selected}
                    index={6}
                    hidden={this.state.toHide}
                  />
                </div>
                <div className="section">
                  <Menu 
                    index={7}
                    selected={this.state.selected}
                    hidden={this.state.toHide}
                    menuKeys={this.state.menuKeys}
                    content={content}
                    update={this.updateMenu}
                    fpa={fullpageApi}
                  />
                  <ContactPage
                    header={content.contact.title}
                    text={content.contact.text}
                    selected={this.state.selected}
                    index={7}
                    hidden={this.state.toHide}
                  />
                </div>
              </div>
            )
          }}
        />
      </div>
    )
  }
}

export default Fullpage;
