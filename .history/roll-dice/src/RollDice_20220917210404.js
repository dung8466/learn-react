import React, {Component} from "react";
import Dice from "./Dice";
import './RollDice.css';

class Rolldice extends Component{
    static defaultProps = {
        sides : ['one' , 'two', 'three', 'four', 'five', 'six']
    }
    constructor(props){
        super(props);
        this.state = {dice1 : 'one', dice2: 'one', rolling: false};
        this.roll = this.roll.bind(this);
    };
    roll(){
        let temp1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
        let temp2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
        this.setState = {dice1 : temp1, dice2: temp2, rolling: true};
        setTimeout(() => {
            this.setState({ rolling: false });
          }, 1000);
    };
    render(){
        return(
            <div className="container">
                <div className="dice">
                    <Dice face={this.state.dice1} rolling={this.state.rolling}/>
                    <Dice dice2/>
                </div>
                <button className="btn">Roll</button>
            </div>
        );
    }
}

export default Rolldice;