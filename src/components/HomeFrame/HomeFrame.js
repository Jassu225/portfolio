import React from 'react';
import './HomeFrame.css';

import ShiningText from '../ShiningText';
import RevealingText from '../RevealingText';
import ScrambledText from '../ScrambledText';
import MovableText from '../MovableText';
import Logo from '../Logo';

class HomeFrame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1
    };
  }

  transitionEnd = _ => {
    if(this.state.step < 5) {
      if([2].includes(this.state.step))
        window.setTimeout(_=> this.setState(state => ({step: state.step + 1})), 1000);
      else
        this.setState(state => ({step: state.step + 1}));
    }
  }

  render() {
    let className = "full-width full-height", style={};
    if(this.state.step === 5) {
      className = "full-height";
      style = {width: "calc(100% - 401px)"};
    }
    return (
      <div className="home full-view-width full-view-height flex-container center-items-vertically"
      onTransitionEnd={this.transitionEnd}
      >
        {this.state.step === 1 && <ShiningText className="full-width full-height shining-text">Hello World!</ShiningText>}
        {this.state.step === 2 && <RevealingText className="full-width full-height"/>}
        {this.state.step === 3 && 
          <ScrambledText initialText="I am Jaswanth Sai Sattenapalli"
          className="full-width full-height"
          finalText="An Aspiring Web Developer" />}
        {this.state.step === 5 && <Logo />}
        {[4,5].includes(this.state.step) && <MovableText className={className} style={style}/>}
      </div>
    );
  }
}

export default HomeFrame;
