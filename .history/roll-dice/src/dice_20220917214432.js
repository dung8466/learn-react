import React, {Component} from 'react';
import './Dice.css'

class Dice extends Component{
    render(){
        return(
            <i className={`fas fa-dice-${this.props.face} ${this.props.rolling && 'saking'}`}></i>
        );
    }
}

export default Dice;