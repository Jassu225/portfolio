import React from 'react';
import './Main.css';

import VisibilitySensor from 'react-visibility-sensor';
import HomeFrame from '../HomeFrame';
import Education from '../EducationV2';
import Experience from '../Experience';
import FifthFrame from '../FifthFrame';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.frames = ["Education"];
    this.state = {};
    for(let i = 0; i < this.frames.length; i++) {
      this.state[this.frames[i]] = {
        isVisited: false,
        isSensorActive: true
      }
    }
  }

  once = (prop) => {
    if(prop && this.state.hasOwnProperty(prop)) {
      if(!this.state[prop].isVisited)
        this.setState({[prop]: {isVisited: true}});
      else
        this.setState({[prop]: {isSensorActive: false}});
    }
  }

  render() {
    return (
      <div className="main-container full-width full-height">
        <HomeFrame className="full-width full-height frame"/>
        <VisibilitySensor onChange={this.once.bind(this, this.frames[0])} active={this.state[this.frames[0]].isSensorActive}>
          {({isVisible}) => <Education className="full-width full-height frame"  isVisible={isVisible}/>}
        </VisibilitySensor>
        <VisibilitySensor>
          {({isVisible}) => <Experience className="full-width full-height frame" isVisible={isVisible}/>}
        </VisibilitySensor>
        <VisibilitySensor>
          {({isVisible}) => <FifthFrame className="full-width full-height frame" isVisible={isVisible}/>}
        </VisibilitySensor>
      </div>
    );
  }
}

export default Main;
