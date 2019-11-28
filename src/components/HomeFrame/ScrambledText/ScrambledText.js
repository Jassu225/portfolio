import React, { Component } from 'react';
import './ScrambledText.css';

class ScrambledText extends Component {
  constructor(props) {
    super(props);
    this.container = React.createRef();
    let indexArray = [];
    for(let i = 0; i < this.props.initialText.length; i++)
      indexArray.push(i);
    this.state = {
      text: this.props.initialText,
      randomCharset: "#$%&@_\\~=!",
      scrambleLength: this.props.initialText.length - 3,
      indexArray,
      lastUpdated: null,
      intervalID: null
    }
  }

  componentDidMount() {
    let id = window.setInterval(this.scrambleText, 80);
    this.setState({intervalID: id});
  }

  getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  }

  scrambleText = _ => {
    // let newTime = new Date().getTime();
    if(this.state.scrambleLength > 0) {
      let elements = [];
      let newText = this.props.initialText;
      let targetIndices = this.getRandom(this.state.indexArray, this.state.scrambleLength);
      if(targetIndices.length < this.props.initialText.length / 2)
        newText = this.props.finalText;
        newText = newText.split("");
      for(let i = 0; i < newText.length; i++){
        if(targetIndices.includes(i))
          elements.push(<span style={{color: '#555555'}} key={i}>{this.state.randomCharset[Math.floor(Math.random() * this.state.randomCharset.length)]}</span>);
        else
          elements.push(newText[i]);
      }
      this.setState(state => ({text: elements, scrambleLength: state.scrambleLength - 1}));
    } else {
      window.clearInterval(this.state.intervalID);
      this.setState((_,props) => ({intervalID: null, text: props.finalText}));
      window.setTimeout(_=> this.container.current.dispatchEvent(new CustomEvent('transitionend', {bubbles: true})), 1000);
    }
  }

  render() {
    return (
      <div className={"scrambled-text flex-container center-items " + this.props.className}
      ref={this.container}>
        {this.state.text}
      </div>
    );
  }
}

export default ScrambledText;
