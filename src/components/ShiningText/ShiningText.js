import React, { Component } from 'react';
import './ShiningText.css';

class ShiningText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textContainerStyle: {
        backgroundPosition: "-500%"
      }
    };
  }
  componentDidMount() {
    window.setTimeout( _=> {
      this.setState({textContainerStyle: {backgroundPosition: "500%"}})
    },0);
  }
  render() {
    return (
      <div className={"flex-container center-items " + this.props.className}>
        <div style={this.state.textContainerStyle}>{this.props.children}</div>
      </div>
    );
  }
}

export default ShiningText;
