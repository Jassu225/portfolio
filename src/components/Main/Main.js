import React from 'react';
import './Main.css';
import HomeFrame from '../HomeFrame';

class Main extends React.Component {
  render() {
    return (
      <div className="main-container full-view-width full-view-height">
        <HomeFrame />
      </div>
    );
  }
}

export default Main;
