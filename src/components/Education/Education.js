import React, { Component } from 'react';
import './Education.css';
import educationBG from '../../assets/images/educationBG.png';
import SVG from './SVG';
import {education} from '../../assets/js/constants';

class Education extends Component {
  render() {
    // let headerColor = "#040d43";
    let headerColor = "#000000";
    let timeLineElements = [], dataElements = [];
    if(education && education.length) {
      for(let i = 0; i < education.length; i++) {
        timeLineElements.push(<div key={i} className="time-line">{education[i].timeLine}</div>);
        dataElements.push(
          <div key={i} className="data-entry">
            <div>
              <div className=""></div>
            </div>
            <div className="desc"></div>
          </div>
        );
      }
    }
    return (
      <div className={"education flex-container center-items " + this.props.className}>
        <div className="content full-height">
          <div className="header"><span style={{color: headerColor}}>Edu</span>cation</div>
          <div className="info">
            <div className="year-container">{timeLineElements}</div>
            <div className="icon full-height full-width"><SVG className="svg"/></div>
            <div className="data"></div>
          </div>
        </div>
        <div className="image full-height" style={{backgroundImage: `url('${educationBG}')`}}></div>
      </div>);
  }
}

export default Education;
