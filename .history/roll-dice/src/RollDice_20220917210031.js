import React, {Component} from "react";
import Dice from "./Dice";
import './RollDice.css';

class Rolldice extends Component{
    static defaultProps = {
        sides : ['one' , 'two', 'three', 'four', 'five', 'six']
    }
    constructor(props){
        super(props);
        this.state = {dice1 : 'one', dice2: 'one', rolling: false}
    };
    roll(){
        let temp1 = Math.floor(Math.random() * this.props.sides.length);
        let temp2 = Math.floor(Math.random() * this.props.sides.length);
        this.setState = {dice1 : side[temp1]}
    }
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