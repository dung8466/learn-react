import React, {Component} from "react";
import './Lotto.css';
import LotteryBall from "./LotteryBall";

class Lotto extends Component{
    static defaultProps = {
        title : Lotto,  
        numBall : 6,
        maxNum: 99
    };
    constructor(props){
        super(props);
        this.state = {nums : []}
    };
    render(){
        return(
            <div className="lotto">
                <h1>{this.props.title}</h1>
                <LotteryBall nums={10}/>
            </div>
        );        
    }
}

export default Lotto;