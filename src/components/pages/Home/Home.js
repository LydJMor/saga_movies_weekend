
import {connect} from 'react-redux';
import React, { Component } from 'react';

class Home extends Component {
 
    render(){
        return (
            <div id="enter-btn">
            <button>Enter the Matrix</button>
            </div>
    );
  }
}

export default connect()(Home);