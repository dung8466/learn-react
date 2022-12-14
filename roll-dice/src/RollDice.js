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
        const temp1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
        const temp2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
        this.setState({dice1 : temp1, dice2: temp2, rolling: true});
        setTimeout(() => {
            this.setState({ rolling: false });
          }, 1000);
    };
    render(){
        return(
            <div className="container">
                <div className="dice">
                    <Dice face={this.state.dice1} rolling={this.state.rolling}/>
                    <Dice face={this.state.dice2} rolling={this.state.rolling}/>
                </div>
                <button className="btn" onClick={this.roll} disabled={this.state.rolling}>
                    {this.state.rolling ? 'Rolling...' : 'Roll!'}
                </button>
            </div>
        );
    }
}

export default Rolldice;