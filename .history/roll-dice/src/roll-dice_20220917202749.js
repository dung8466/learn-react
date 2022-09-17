import React, {Component} from "react";
import dice from "./dice";
import './roll-dice.css';

class rollDice extends Component{
    render(){
        return(
            <dice/>
        );
    }
}

export default rollDice;