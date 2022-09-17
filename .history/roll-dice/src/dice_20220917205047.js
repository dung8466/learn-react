import React, {Component} from 'react';
import './Dice.css'

class Dice extends Component{
    render(){
        let temp = Math.floor(Math.random()* 6);
        let value = 'one';
        switch(temp){
            case 1:
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
        let clsName = 'fa-dice-' + value;
        return(
            <i className="fas clsName"></i>
        );
    }
}

export default Dice;