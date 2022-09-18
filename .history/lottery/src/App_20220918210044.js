import React, {Component} from 'react';
import './App.css';
import Lotto from './Lotto';
class App extends Component{
  render(){
    return (
      <div className="App">
        <Lotto />
        <Lotto title='4-Lotto' numBall={4}
      </div>
    );
  }
}

export default App;
