import React, { Component } from 'react';
import './MovableText.css';

class MovableText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textContainerStyle: {
        width: "43rem",
        marginLeft: "calc(50% - 21.5rem)"
      },
      textStyle: {},
      targetTextStyle: {
        transform: "rotateX(180deg)"
      },
      step: 1
    };
  }

  componentDidMount() {
    debugger
    window.setTimeout( _=> {
      this.setState({
        textStyle: {
          transform: "rotateX(180deg)"
        },
        targetTextStyle: {
          transform: "rotateX(360deg)"
        }
      });
    })
  }

  transitionEnd = event => {
    if(this.state.step === 1) {
      event.stopPropagation();
      this.setState({
        textContainerStyle: {
          width: "18rem",
          // transform: "scale(1,-1)",
          marginLeft: "calc(100% - 42rem)"
        },
        step: 2
      });
    } else if(this.state.step === 2) {
      event.stopPropagation();
      this.setState({step: 3});
    }
  }

  render() {
    return (
      <div className={"movable-text flex-container center-items-vertically preserve-3d " + this.props.className}
      onTransitionEnd={this.transitionEnd} style={this.props.style}>
        <div className="center-text relative preserve-3d" style={this.state.textContainerStyle}>
          <div className="target-text absolute full-width full-height flex-container center-items" style={this.state.targetTextStyle}>My Skill Set</div>
          <div className="full-width full-height absolute flex-container center-items" style={this.state.textStyle}>An Aspiring Web Developer</div>
        </div>
      </div>
    );
  }
}

export default MovableText;
