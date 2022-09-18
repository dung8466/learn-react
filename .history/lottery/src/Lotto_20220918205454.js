import React, {Component} from "react";
import './Lotto.css';
import LotteryBall from "./LotteryBall";

class Lotto extends Component{
    static defaultProps = {
        title : 'Lotto',  
        numBall : 6,
        maxNum: 99
    }
    constructor(props){
        super(props);
        this.state = {nums : Array.from({length: this.props.numBall}) };
        this.handleClick = this.handleClick.bind(this);
    }
    generate(){
        this.setState(curSt => ({
            nums: curSt.nums.map(num => num = Math.floor(Math.random() * this.props.maxNum)),
        }))
        // let temp = Math.floor(Math.random() * this.props.maxNum);
    }
    handleClick(){
        this.generate();
    }
    render(){
        return(
            <div className="lotto">
                <h1>{this.props.title}</h1>
                <div className="ballDisplay">
                    {this.state.nums.map(b => (
                        <LotteryBall nums={b}/>
                    ))}
                </div>
                <button onClick={this.handleClick}>Lotto</button>
            </div>
        );        
    }
}

export default Lotto;