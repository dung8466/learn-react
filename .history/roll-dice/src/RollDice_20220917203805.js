import React, {Component} from "react";
import Dice from "./Dice";
import './RollDice.css';

class Rolldice extends Component{
    render(){
        return(
            <div className="container">
                <Dice />
                <Dice/>
                <button></button>
            </div>
        );
    }
}

export default Rolldice;