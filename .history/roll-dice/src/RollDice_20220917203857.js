import React, {Component} from "react";
import Dice from "./Dice";
import './RollDice.css';

class Rolldice extends Component{
    render(){
        return(
            <div className="container">
                <div className="dice">
                    <Dice/>
                    <Dice/>
                </div>
                <button>Roll</button>
            </div>
        );
    }
}

export default Rolldice;