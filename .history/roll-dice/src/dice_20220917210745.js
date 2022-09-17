import React, {Component} from 'react';
import './Dice.css'

class Dice extends Component{
    render(){
        return(
            <i className=`fas fa-dice-${this.props.face}`></i>
        );
    }
}

export default Dice;