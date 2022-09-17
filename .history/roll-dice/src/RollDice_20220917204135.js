import React, {Component} from "react";
import Dice from "./Dice";
import './RollDice.css';

class Rolldice extends Component{
    constructor(props){
        super(props);
        this.state = {number : 0}
    };
    render(){
        return(
            <div className="container">
                <div className="dice">
                    <Dice/>
                    <Dice/>
                </div>
                <button className="btn">Roll</button>
            </div>
        );
    }
}

export default Rolldice;