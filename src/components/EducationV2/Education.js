import React, { Component } from 'react';
import './Education.css';
import educationBG from '../../assets/images/educationBG.png';
import SVG from './SVG';
import SvgPlain from './SvgPlain';
import {education} from '../../assets/js/constants';

class Education extends Component {

  render() {
    let headerColor = "#000000";
    let elements = [];
    if(education && Array.isArray(education) && education.length) {
      for(let i = 0; i < education.length; i++) {
        elements.push(
          <div className="edu-card" key={education[i].timeLine}
          style={{
            ...(education[i].style ? education[i].style : {}),
            ...(this.props.isVisible ? {transform: "rotateY(0deg)", opacity: "1"}: {})
          }}>
            <div>
              <div className="class float-left">{education[i].class}</div>
              <div className="time-line float-right">{education[i].timeLine}</div>
            </div>
            <div className="desc">{education[i].description}</div>
          </div>
        );
      }
    }
    return (
      <div className={"education flex-container center-items " + this.props.className}>
        <div className="content full-height">
          <div className="header"><span style={{color: headerColor}}>Edu</span>cation</div>
          <div className="info">
            <div className="icon full-height">
              {this.props.isVisible ?
                <SVG className="svg"/> :
                <SvgPlain className="svg"/>
              }
              {elements}
            </div>
          </div>
        </div>
        <div className="image full-height" style={{backgroundImage: `url('${educationBG}')`}}></div>
      </div>);
  }
}

export default Education;
