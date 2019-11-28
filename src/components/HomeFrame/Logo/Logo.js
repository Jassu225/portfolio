import React from 'react';
import './Logo.css';

import html5Logo from '../../../assets/images/html5Logo.png';
import css3Logo from '../../../assets/images/css4Logo.png';
import jsLogo from '../../../assets/images/javascriptLogo.png';
import nodejsLogo from '../../../assets/images/nodejsLogo.png';
import reactJsLogo from '../../../assets/images/reactJsLogo.svg';
import vuejsLogo from '../../../assets/images/vuejsLogo.png';
import electronLogo from '../../../assets/images/electronLogo.png';
// import expressLogo from '../../assets/images/express.png';
// import polyMe from '../../assets/images/polyMe.png';
// import bg from '../../assets/images/bg.png';

class Logo extends React.Component {
  constructor(props) {
    super(props);
    this.container = React.createRef();
    this.state = {
      endCount: 0,
      step: 1,
      mainLogoStyle: {
        opacity: 0
      }
    };
  }

  componentDidMount() {
    window.setTimeout(() => {
      this.setState({mainLogoStyle: {opacity: 1}});
    },0);
  }

  proceedToStep2() {
    let containerElement = this.container.current;
    let logos = containerElement.children;
    for(let i = 0; i < logos.length; i++) {
      logos[i].style.opacity = 1;
      logos[i].style.top = "-50px";
    }
  }

  proceedToStep3() {
    let containerElement = this.container.current;
    let logos = containerElement.children;
    let centerY = parseFloat(window.getComputedStyle(containerElement).getPropertyValue("height")) / 2;
    let pointsCount = logos.length;
    for(let i = 0; i < logos.length; i++) {
      let computed = window.getComputedStyle(logos[i]);
      logos[i].style.transformOrigin = `${parseFloat(computed.getPropertyValue("width")) / 2}px 
                                        ${parseFloat(computed.getPropertyValue("height")) / 2 + centerY}px`;
      let degrees = 360 / pointsCount * i;
      logos[i].style.transform = `rotate(${degrees}deg)`;
      logos[i].style.backgroundColor = "transparent";
      logos[i].style.borderWidth = "2px";
      logos[i].children[0].style.transform = `rotate(-${degrees}deg)`;
    }
  }

  transitionEnd = event => {
    if(this.state.step === 1){
      event.stopPropagation();
      this.setState({step: 2});
      this.proceedToStep2();
    }
    else if(this.state.step === 2) {
      event.stopPropagation();
      if(this.state.endCount + 1 === this.container.current.children.length) {
        this.setState({step: 3});
        this.proceedToStep3();
      } else
        this.setState(state => ({endCount: state.endCount + 1}));
    }
  }

  render() {
    return (
      <div className="logo-box">
        <div className="main-logo" style={this.state.mainLogoStyle} onTransitionEnd={this.transitionEnd}>Me</div>
        <div 
        className="logo-container full-width full-height flex-container center-items-horizontally center-items-vertically"
        ref={this.container} onTransitionEnd={this.transitionEnd}
        >
          <div className="logo html5"><div style={{backgroundImage: `url("${html5Logo}")`}} className="full-width full-height"/></div>
          <div className="logo css3"><div style={{backgroundImage: `url("${css3Logo}")`}} className="full-width full-height"/></div>
          <div className="logo js"><div style={{backgroundImage: `url("${jsLogo}")`}} className="full-width full-height"/></div>
          <div className="logo reactjs"><div style={{backgroundImage: `url("${reactJsLogo}")`}} className="full-width full-height"/></div>
          <div className="logo vuejs"><div style={{backgroundImage: `url("${vuejsLogo}")`}} className="full-width full-height"/></div>
          <div className="logo nodejs"><div style={{backgroundImage: `url("${nodejsLogo}")`}} className="full-width full-height"/></div>
          <div className="logo express"><div className="full-width full-height">Express</div></div>
          <div className="logo electron"><div style={{backgroundImage: `url("${electronLogo}")`}} className="full-width full-height"/></div>
          {/* <div className="poly-container">
            <div style={{backgroundImage: `url("${bg}")`}} className="bg"/>
            <div style={{backgroundImage: `url("${polyMe}")`}} className="poly-me"/>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Logo;
