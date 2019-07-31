import React, { Component } from 'react';
import './RevealingText.css';

class RevealingText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleTextStyle: {
        color: 'black'
      },
      revealingTextStyle: {
        width: '0px'
      }
    }
  }

  componentDidMount() {
    window.setTimeout( _=> {
      this.setState({visibleTextStyle: {color: 'white'}});
    }, 0);
  }

  transitionEnd = event => {
    if(event.target.classList.contains("visible-text")) {
      this.setState({revealingTextStyle: {width: '641px'}});
      event.stopPropagation();
    }
  }

  render() {
    return (
      <div className="revealing-text-container flex-container full-width full-height center-items"
       onTransitionEnd={this.transitionEnd}>
        <div style={this.state.visibleTextStyle} className="visible-text">I am</div>
        <div className="revealing-text" style={this.state.revealingTextStyle}>
          <div className="float-right">Jaswanth Sai Sattenapalli</div>
        </div>
      </div>
    );
  }
}

export default RevealingText;
