import React, { Component } from 'react';
import './Experience.css';
import TypeText from './TypeText';
import Cog from './cog';
import {animatedCode, experienceData} from '../../assets/js/constants';

class Experience extends Component {
  render() {
    let expElements = [];
    experienceData.forEach(expInfo => {
      let timeline = `${expInfo.timeLine.from} - ${expInfo.timeLine.to}`;
      expElements.push(
        <div className="expInfo" key={timeline}>
          <div className="timeline">{timeline}</div>
          <div className="designation">{expInfo.designation}</div>
          <div className="company">{expInfo.company}</div>
          <div className="description">{expInfo.description}</div>
        </div>
      );
    });
    return (
      <div className={"experience " + this.props.className}>
        <div className="animation-container">
          <div>
            {this.props.isVisible && <TypeText textArray={animatedCode}/>}
          </div>
          <div className="relative">
            <div className="cog-container"
              style={{width: "2rem", height: "2rem", left: "23.5%"}}>
              <Cog className="cog" fill="#5f9ea0"/>
            </div>
            <div className="cog-container"
              style={{width: "3rem", height: "3rem", left: "13.85%", top: "-0.8%",
                    animationDirection: "reverse"}}>
              <Cog className="cog" fill="#5f9ea0"/>
            </div>
            <div className="cog-container" 
              style={{width: "4rem", height: "4rem", left: "1%"}}>
              <Cog className="cog" fill="#5f9ea0"/>
            </div>
            <div className="cog-container" 
              style={{width: "5rem", height: "5rem", left: "7%", top: "17%", animationDirection: "reverse"}}>
              <Cog className="cog" fill="#5f9ea0"/>
            </div>
            <div className="cog-container"
              style={{width: "6rem", height: "6rem", left: "19.6%", top: "30.4%"}}>
              <Cog className="cog" fill="#5f9ea0"/>
            </div>
            <div className="cog-container" 
              style={{width: "5rem", height: "5rem", left: "35.6%", top: "17%", animationDirection: "reverse"}}>
              <Cog className="cog" fill="#5f9ea0"/>
            </div>
            <div className="cog-container" 
              style={{width: "5rem", height: "5rem", left: "35.6%", top: "50%", animationDirection: "reverse"}}>
              <Cog className="cog" fill="#5f9ea0"/>
            </div>
          </div>
        </div>
        <div className="exp-content-container">
          <div className="exp-header">Experience</div>
          <div className="exp-content">
            {expElements}
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
