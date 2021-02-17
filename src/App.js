import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {AppContext} from './context';
import Stage1 from './components/stage1';
import Stage2 from './components/stage2';

class App extends Component{
  static contextType = AppContext;

  render() {

      return (
      <div className="wrapper">
        <div className="center-wrapper">
          <h1>Who wants to pay the bill ?</h1>
          {
            this.context.state.stage === 1 ? <Stage1 /> : <Stage2 />
          }
        </div>
      </div>
    )
  }
    
}

export default App;
