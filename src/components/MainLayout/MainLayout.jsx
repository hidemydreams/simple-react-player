import React, { Component } from 'react';
import "./MainLayout.css";

class MainLayout extends Component {



  render(props) {
    return (
      <div className="main-layout">
        {this.props.children}
      </div>
    );
  }
}

export default MainLayout;