import React, {Component} from "react";
import Dice from "./Dice";
import './RollDice.css';

class Rolldice extends Component{
    defaultProps = {
        sides : ['one' , 'two', 'three', 'four', 'five', 'six']
    }
    constructor(props){
        super(props);
        this.state = {dice1 : 'one', dice2: 'one', rolling: false}
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