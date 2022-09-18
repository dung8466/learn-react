import React, {Component} from "react";
import './Lotto.css';
import LotteryBall from "./LotteryBall";

class Lotto extends Component{
    static defaultProps = {
        nums : 0
    };
    render(){
        return(
            <LotteryBall nums={6}/>
        );        
    }
}

export default Lotto;