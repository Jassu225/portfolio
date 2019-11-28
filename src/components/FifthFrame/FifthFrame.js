import React, { Component } from 'react';
import './FifthFrame.css';
import location from '../../assets/images/location.png';
import {bioData} from '../../assets/js/constants.js';

class SecondFrame extends Component {
  render() {
    let elements = [];
    for(let i = 0; i < bioData.length; i++) {
      elements.push(
      <div className={"info flex-container center-items" + (bioData[i].className ? " " + bioData[i].className:"")}
      key={i}>
        <div className="field">{bioData[i].field}</div><div className="value">{bioData[i].value}</div>
      </div>);
    }

    return (
      <div className={"bio flex-container center-items relative " + this.props.className}>
        <div className="location full-height relative" style={{backgroundImage: `url('${location}')`}}>
          <div className="marker">
            <div className="tag flex-container" style={{animationName: this.props.isVisible ? "open" : "close"}}>
              <div><strong>Location: </strong>Chirala, Andhra Pradesh, India</div>
              <div><strong>Co-Ordinates: </strong>15.8246°N, 80.3521°E</div>
            </div>
          </div>
        </div>
        <div className="data full-height">
          <h1 className="header"><span>Personal Info.</span></h1>
          {elements}
        </div>
      </div>
    );
  }
}

export default SecondFrame;
