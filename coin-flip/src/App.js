import React,{Component} from 'react';
import './App.css';
import CoinFlip from './CoinFlip';
class App extends Component{
  render(){
    return(
      <div className='App'>
        <h1>Coin Flip!</h1>
        <CoinFlip/>
      </div>
    );
  }
}

export default App;
