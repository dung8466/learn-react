import React, {Component} from 'react';
import './Dice.css'

class Dice extends Component{
    constructor(props){
        super(props);
        this.state = {cls : 'fa-dice-one'}
    }
    render(){
        let temp = Math.floor(Math.random()* 6);
        let value = 'one';
        switch(temp){
            default:
                value = 'one';
                break;
            case 2:
                value = 'two';
                break;
            case 3:
                value = 'three';
                break;
            case 4:
                value = 'four';
                break;
            case 5:
                value = 'five';
                break;
            case 6:
                value = 'six';
                break;
        }
        this.setState = {cls:  'fa-dice-' + value};
        return(
            <i className="fas" cls></i>
        );
    }
}

export default Dice;