import React, { Component } from 'react';
import './TypeText.css';

class TypeText extends Component {
  constructor(props) {
    super(props);
    this.textIndex = 0;
    this.charIndex = 0;
    this.state = {
      elements: [],
      intervalID: null,
    }
  }

  componentDidMount() {
    if(this.props.textArray && this.props.textArray.length) {
      let intervalID = window.setInterval(this.typeText, 80);
      this.setState({intervalID: intervalID});
    }
  }

  typeText = _ => {
    if(this.textIndex < this.props.textArray.length){
      if(this.charIndex < this.props.textArray[this.textIndex].length) {
        let text = this.props.textArray[this.textIndex].slice(0, this.charIndex + 1);
        let element = <div key={this.textIndex}>{text}</div>;
        if(this.charIndex === 0)
          this.setState(state => ({elements: state.elements.concat(element)}));
        else
        this.setState(state => {
          state.elements[state.elements.length - 1] = element;
          return {elements: state.elements}
        });
        this.charIndex++;
      } else {
        this.textIndex++;
        this.charIndex = 0;
      }
    } else if(this.state.intervalID) {
      window.clearInterval(this.state.intervalID);
      this.setState({intervalID: null});
    }
  }

  render() {
    return (
      <div className="type-animation">
        <pre>{this.state.elements}</pre>
      </div>
    );
  }
}

export default TypeText;
